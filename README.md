# SYSTEM_3 · KNOWLEDGE_MESH

Topological knowledge mesh — Scientific Brutalism × Forensic Surrealism.

Nine active nodes: one Tier 0 meta-root plus eight clustered canonical nodes, bound by three entanglement vectors. Nodes don't *load* — they **unfold from a continuous Miura-ori substrate** on observer proximity, governed per frame by integrated spring physics with a topological sympathy ripple. The ontology is the interface.

## Live

`index.html` is a self-contained page. Open in any modern desktop browser (≥ 1480 px canvas) or visit the deployed GitHub Pages URL.

## Files

| File | Role |
|------|------|
| `index.html` | Runtime — CSS, markup, physics engine. |
| `ontology.js` | **Single source of truth.** Edit this to mutate the mesh — nodes, vectors, ghosts. No HTML changes required. |
| `SYSTEM_3_KNOWLEDGE_MESH.html` | Canonical filename copy of `index.html`. |
| `PLAN_v1.5.md` | v1.5 implementation record and remaining scope notes. |
| `system_3_A.md` | Earlier spec directive (v1.3 → v1.4 upgrade). |
| `validate-ontology.js` | Local consistency check for ontology IDs, counts, edge targets, and required fields. |

## Interactions

- **Hover a node** — it unfolds via a fixed-step damped spring (K=210, C=30, M=1) within a 280 px proximity radius.
- **Ripple wake** — nearby nodes within 420 px get partially cracked open by the spatial sympathy coefficient (0.28), with edge-linked nodes receiving topological sympathy (0.18) even outside direct range.
- **Vector highlighting** — when a node's `baseT` exceeds 0.55, incident vectors glow and non-incident vectors dim to 16 % opacity.
- **Sympathetic outline** — nodes being opened purely by ripple (ripple > 0.08, direct baseT < 0.3) get a vermillion 1 px ring.
- **Idle sleep** — when the pointer leaves and every spring reaches rest, the physics loop, clock timer, and decorative SVG/CSS animations pause until the next interaction.

## Vectors

| Name | Route | Style | Motion |
|------|-------|-------|--------|
| **V-α** | `CERTAIN_TO_WIN → RWO` | chrome-yellow, solid | packet burst, 1.2 s |
| **V-β** | `PATTERN → KM_ANCHOR` | ultramarine, 6/3 dash | defensive crawl, 3 s |
| **V-γ** | `SHANNON → BOYD` | vermillion, solid | fast packet, 0.8 s |

## Editing the ontology

Open `ontology.js` and modify `window.__ONTOLOGY__.clusters`, `.edges`, or `.ghosts`. Reload the page. That's it.

## Validation

Run:

```bash
node validate-ontology.js
```

Expected result:

```text
Ontology validation passed: 9 active nodes, 3 edges, 3 ghosts.
```
