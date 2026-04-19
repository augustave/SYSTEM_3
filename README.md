# SYSTEM_3 · KNOWLEDGE_MESH

Topological knowledge mesh — Scientific Brutalism × Forensic Surrealism.

Nine canonical nodes across three clusters, bound by three entanglement vectors. Nodes don't *load* — they **unfold from a continuous Miura-ori substrate** on observer proximity, governed per frame by integrated spring physics with a topological sympathy ripple. The ontology is the interface.

## Live

`index.html` is a self-contained page. Open in any modern desktop browser (≥ 1480 px canvas) or visit the deployed GitHub Pages URL.

## Files

| File | Role |
|------|------|
| `index.html` | Runtime — CSS, markup, physics engine. |
| `ontology.js` | **Single source of truth.** Edit this to mutate the mesh — nodes, vectors, ghosts. No HTML changes required. |
| `SYSTEM_3_KNOWLEDGE_MESH.html` | Canonical filename copy of `index.html`. |
| `PLAN_v1.5.md` | Design notes for the v1.5 upgrade (CMS + hover highlighting). |
| `system_3_A.md` | Earlier spec directive (v1.3 → v1.4 upgrade). |

## Interactions

- **Hover a node** — it unfolds via damped spring physics (K=180, C=22, M=1) within a 280 px proximity radius.
- **Ripple wake** — nearby nodes within 380 px get partially cracked open by the sympathy coefficient (0.35), even outside direct range.
- **Vector highlighting** — when a node's `baseT` exceeds 0.55, incident vectors glow and non-incident vectors dim to 16 % opacity.
- **Sympathetic outline** — nodes being opened purely by ripple (ripple > 0.1, direct baseT < 0.3) get a vermillion 1 px ring.

## Vectors

| Name | Route | Style | Motion |
|------|-------|-------|--------|
| **V-α** | `CERTAIN_TO_WIN → RWO` | chrome-yellow, solid | packet burst, 1.2 s |
| **V-β** | `PATTERN → KM_ANCHOR` | ultramarine, 6/3 dash | defensive crawl, 3 s |
| **V-γ** | `SHANNON → BOYD` | vermillion, solid | fast packet, 0.8 s |

## Editing the ontology

Open `ontology.js` and modify `window.__ONTOLOGY__.clusters`, `.edges`, or `.ghosts`. Reload the page. That's it.
