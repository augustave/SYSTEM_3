#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ontologyPath = path.join(__dirname, 'ontology.js');
const source = fs.readFileSync(ontologyPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: ontologyPath });

const ontology = sandbox.window.__ONTOLOGY__;
const errors = [];

function fail(message) {
  errors.push(message);
}

function requireString(obj, field, label) {
  if (!obj || typeof obj[field] !== 'string' || obj[field].trim() === '') {
    fail(`${label}.${field} is required`);
  }
}

if (!ontology || typeof ontology !== 'object') {
  fail('window.__ONTOLOGY__ must be defined');
} else {
  requireString(ontology, 'revision', 'ontology');

  if (!ontology.metaAnchor || typeof ontology.metaAnchor !== 'object') {
    fail('ontology.metaAnchor is required');
  } else {
    ['id', 'ref', 'label', 'type', 'terminal', 'metaRelations'].forEach((field) => {
      requireString(ontology.metaAnchor, field, 'metaAnchor');
    });
  }

  if (!Array.isArray(ontology.clusters) || ontology.clusters.length === 0) {
    fail('ontology.clusters must contain at least one cluster');
  }

  if (!Array.isArray(ontology.edges) || ontology.edges.length === 0) {
    fail('ontology.edges must contain at least one edge');
  }

  if (!Array.isArray(ontology.ghosts)) {
    fail('ontology.ghosts must be an array');
  }

  const activeIds = new Set();
  const addActiveId = (id, label) => {
    if (!id) return;
    if (activeIds.has(id)) fail(`duplicate active node id: ${id} (${label})`);
    activeIds.add(id);
  };

  if (ontology.metaAnchor) {
    addActiveId(ontology.metaAnchor.id, 'metaAnchor');
  }

  let clusteredNodeCount = 0;
  (ontology.clusters || []).forEach((cluster, clusterIndex) => {
    const label = `clusters[${clusterIndex}]`;
    ['id', 'name', 'abbrev', 'color', 'desc', 'renderMode', 'patternId', 'patternSvg', 'patternSize'].forEach((field) => {
      requireString(cluster, field, label);
    });
    if (!Array.isArray(cluster.nodes) || cluster.nodes.length === 0) {
      fail(`${label}.nodes must contain at least one node`);
      return;
    }
    clusteredNodeCount += cluster.nodes.length;
    cluster.nodes.forEach((node, nodeIndex) => {
      const nodeLabel = `${label}.nodes[${nodeIndex}]`;
      ['id', 'ref', 'alt', 'type', 'ord', 'title', 'func'].forEach((field) => {
        requireString(node, field, nodeLabel);
      });
      addActiveId(node.id, nodeLabel);
      if (!Array.isArray(node.rails) || node.rails.length !== 3) {
        fail(`${nodeLabel}.rails must contain exactly 3 rail entries`);
      } else {
        node.rails.forEach((rail, railIndex) => {
          requireString(rail, 'k', `${nodeLabel}.rails[${railIndex}]`);
          requireString(rail, 'v', `${nodeLabel}.rails[${railIndex}]`);
        });
      }
    });
  });


  (ontology.edges || []).forEach((edge, edgeIndex) => {
    const label = `edges[${edgeIndex}]`;
    ['name', 'title', 'color', 'accent', 'dash', 'animType', 'speed'].forEach((field) => {
      requireString(edge, field, label);
    });
    if (typeof edge.stroke !== 'number') fail(`${label}.stroke must be a number`);
    if (typeof edge.bend !== 'number') fail(`${label}.bend must be a number`);
    ['sources', 'targets'].forEach((field) => {
      if (!Array.isArray(edge[field]) || edge[field].length === 0) {
        fail(`${label}.${field} must contain at least one node id`);
        return;
      }
      edge[field].forEach((id) => {
        if (!activeIds.has(id)) fail(`${label}.${field} references unknown active node id: ${id}`);
      });
    });
  });

  const ghostIds = new Set();
  (ontology.ghosts || []).forEach((ghost, ghostIndex) => {
    const label = `ghosts[${ghostIndex}]`;
    ['id', 'ref', 'alt', 'title', 'deprecatedIn', 'supersededBy'].forEach((field) => {
      requireString(ghost, field, label);
    });
    if (ghostIds.has(ghost.id)) fail(`duplicate ghost id: ${ghost.id}`);
    ghostIds.add(ghost.id);
  });

}

if (errors.length > 0) {
  console.error('Ontology validation failed:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

const activeTotal = 1 + (ontology.clusters || []).reduce((acc, c) => acc + (c.nodes || []).length, 0);
console.log(
  `Ontology validation passed: ${activeTotal} active nodes (1 meta + ${activeTotal - 1} canon), ` +
  `${(ontology.edges || []).length} edges, ${(ontology.ghosts || []).length} ghosts.`
);
