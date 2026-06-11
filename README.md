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
| `SYSTEM_3_KNOWLEDGE_MESH.html` | Redirect stub → `index.html` (historical filename, kept for old links). |
| `PLAN_v1.5.md` | v1.5 implementation record and remaining scope notes. |
| `system_3_A.md` | Earlier spec directive (v1.3 → v1.4 upgrade). |
| `validate-ontology.js` | Local consistency check for ontology IDs, counts, edge targets, and required fields. |

## Interactions

- **Hover a node** — it unfolds via a fixed-step underdamped spring (K=210, C=19, M=1, ζ≈0.66) within a 280 px proximity radius, overshooting ~5 % and settling in ~520 ms with a paper-snap. Open folds tilt up to 4° toward the pointer.
- **Ripple wake** — nearby nodes within 420 px get partially cracked open by the spatial sympathy coefficient (0.28), with edge-linked nodes receiving topological sympathy (0.18) even outside direct range. First-order ripple retransmits once more at 0.45 decay, so waves cascade through the mesh.
- **Vector highlighting** — hover acquisition uses hysteresis (enter 0.55 / exit 0.42 / challenger margin 0.08) to prevent flicker; incident vectors glow while non-incident vectors dim to 16 % opacity and unrelated nodes recede to 55 %.
- **Click to pin** — clicking a foldable node locks it open with an outline and `◉ PINNED` stamp; its vectors stay highlighted while you hover elsewhere. Escape releases all pins.
- **Keyboard** — Tab focuses and unfolds nodes (no pointer needed); Enter/Space toggles pin. Nodes expose `role="button"`, `aria-label`, and `aria-pressed`.
- **Sympathetic outline** — nodes being opened purely by ripple (ripple > 0.08, direct baseT < 0.3) get a vermillion 1 px ring.
- **Reduced motion** — `prefers-reduced-motion` snaps springs instantly and omits packet/crawl/pulse animations.
- **Idle sleep** — when the pointer leaves and every spring reaches rest, the physics loop, clock timer, and decorative SVG/CSS animations pause until the next interaction.
- **Cursor readout** — live X/Y/proximity plus the hovered node id and unfold percentage.

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
Ontology validation passed: 9 active nodes (1 meta + 8 canon), 3 edges, 3 ghosts.
```

Counts are derived from `ontology.js`, so they track whatever the ontology currently declares. CI runs the same checks on every push (`.github/workflows/validate.yml`).
