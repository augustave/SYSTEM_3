# SYSTEM_3 · v1.5 Implementation Record

## Status

v1.5 is implemented as a static, disk-openable HTML artifact backed by `ontology.js`.

The earlier `ontology.json` plan was intentionally replaced by a script-loaded ontology because direct JSON fetches are brittle when the page is opened with `file://`. The current architecture keeps zero-build editing while avoiding browser CORS differences.

## Implemented

- `ontology.js` defines `window.__ONTOLOGY__`.
- `metaAnchor` drives the Tier 0 `KM_ANCHOR` node.
- `clusters` drive the three visible cluster columns.
- `edges` drive V-α, V-β, and V-γ SVG vectors.
- `ghosts` drive the deprecated target row.
- Hover proximity unfolds nodes with fixed-step spring physics.
- Ripple propagation partially unfolds neighboring and edge-linked nodes.
- Incident edge highlighting dims unrelated vectors.
- Sympathetic ripple nodes receive a vermillion outline.
- The motion system sleeps at rest and pauses the clock plus decorative animation until interaction resumes.

## Active Topology

- Active nodes: 9 total.
- Meta-root: 1, `KM_ANCHOR`.
- Clustered canonical nodes: 8.
- Edges: 3.
- Ghost nodes: 3.

## Files

| File | Role |
|------|------|
| `index.html` | Main runtime, styling, markup shell, physics loop, vector renderer. |
| `SYSTEM_3_KNOWLEDGE_MESH.html` | Canonical filename copy of `index.html`. |
| `ontology.js` | Single source of truth for meta-root, clusters, edges, and ghosts. |
| `validate-ontology.js` | Local consistency check for ontology shape and references. |

## Verification

Run:

```bash
node validate-ontology.js
node --check ontology.js
```

For browser verification:

```bash
python3 -m http.server 8765
```

Then open:

```text
http://127.0.0.1:8765/index.html
```

Expected visual result:

- The hero reads v1.5.0.
- The mesh renders 1 meta-root, 8 clustered canonical nodes, 3 vectors, and 3 ghosts.
- Hovering a node unfolds it.
- Nearby and edge-linked nodes receive ripple energy.
- Incident vectors remain bright while unrelated vectors dim.

## Deferred

- Click-to-pin node state.
- Additional vectors V-δ/V-ε.
- Real telemetry or live data source.
- Responsive/mobile layout. The current plate intentionally assumes a desktop canvas at 1480 px or wider.
