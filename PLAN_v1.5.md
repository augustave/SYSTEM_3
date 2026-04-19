# SYSTEM_3 · v1.5 Implementation Plan

## Objective

Finish the CMS refactor started in v1.4 and layer one interaction upgrade on top. After v1.5:

- Ontology + edges + ghost zone all live in a single external `ontology.json`
- Editing the mesh requires **zero HTML/JS touches** — just JSON
- Hovering a node highlights its incident vectors and dims non-related ones
- Sympathetic neighbors (already unfolding via ripple) get a visible accent ring

## Scope

Three packages, shippable independently. Each leaves the mesh in a working state.

---

### Package A · Externalize ontology → `ontology.json`

**Why:** `ontologyData` is currently inline in the script. Moving it to a file makes the data editable without touching code, and sets up loading of additional record types (ghosts, edges).

**Schema:**
```jsonc
{
  "revision": "1.5.0",
  "clusters": [ /* same shape as current ontologyData */ ],
  "edges": [ /* same shape as current edges[] */ ],
  "ghosts": [
    {
      "id": "ZERO_TO_ONE",
      "ref": "N-∅.01",
      "alt": "WAS TGT · V-α",
      "title": "Zero to One",
      "deprecatedIn": "R1.2",
      "supersededBy": "R1.3 REWIRES V-α → RWO",
      "titleNote": null
    },
    { "id": "SECURITY", "titleNote": "(structural)", ... },
    { "id": "CHIP_WAR", ... }
  ]
}
```

**Changes to `SYSTEM_3_KNOWLEDGE_MESH.html`:**

1. Delete inline `ontologyData` and `edges` const declarations.
2. Wrap bootstrap in an async loader:
   ```js
   async function bootstrap() {
     const data = await fetch('./ontology.json').then(r => r.json());
     ontologyData = data.clusters;
     edges = data.edges;
     renderOntology();
     renderGhosts(data.ghosts);   // new
     // ... existing node discovery, substrate, rulers, frame loop
   }
   ```
3. Move `renderOntology` and a new `renderGhosts` function so they read from the loaded payload.
4. Show a loading state or fallback if fetch fails (file:// has no CORS issue for same-folder fetches in Chrome ≥ 114 with `--allow-file-access-from-files`, but Safari blocks it — add a `<script type="module">` alternative or inline fallback).

**Critical file:** [SYSTEM_3_KNOWLEDGE_MESH.html](SYSTEM_3_KNOWLEDGE_MESH.html) — modify top of IIFE (~lines 1150–1300) and bootstrap section (~lines 1500–1517).
**New file:** `ontology.json`.

**Verification:**
- Reload file in Chrome → all 9 nodes, 3 vectors, 3 ghosts render identically to v1.4.
- Edit `ontology.json` (e.g., change SHANNON's title), reload → change appears with no code edit.
- Delete `ontology.json` → page shows a visible "ONTOLOGY UNLOADED" banner rather than blank.

---

### Package B · Data-drive the ghost zone

**Why:** The 3 deprecated nodes are still hardcoded in the ghost zone. Once ontology.json ships (Package A), the ghost zone should hydrate from `data.ghosts`.

**Changes:**
1. In HTML: replace the 3 hardcoded `<article class="node node--ghost">` blocks with a single `<div id="cms-ghosts">`.
2. Add `renderGhosts(ghosts)` that emits the same markup as today but from data.
3. Keep the ghost-zone header and `.ghost-anchor` forensic note as hardcoded — they're narrative, not data.

**Critical file:** [SYSTEM_3_KNOWLEDGE_MESH.html](SYSTEM_3_KNOWLEDGE_MESH.html) ~lines 1050–1100.

**Verification:**
- All 3 ghosts render with strike-through, deprecated stamps, and superseded text.
- Add a 4th ghost to `ontology.json` → appears without code edits.

---

### Package C · Hover highlighting on vectors + sympathetic nodes

**Why:** Today edges render uniformly regardless of interaction. Adding highlighting makes the topology feel alive and teaches the viewer which nodes participate in which vectors.

**Mechanism:**

1. **Hovered node detection:** already have `s.baseT` per node; define `hoveredNode = node with max(baseT)` when `maxBaseT > 0.6`.
2. **Incident edge set:** `edges.filter(e => e.sources.includes(hId) || e.targets.includes(hId))`.
3. **Render pass:** when hover is active:
   - Non-incident edges get `stroke-opacity: 0.2`
   - Incident edges get an extra glow polyline (4px accent, opacity 0.35)
   - Sympathetic nodes (those whose `ripple > 0.1`) get a subtle vermillion outline via a CSS class added dynamically
4. **Implementation note:** `drawEdges()` currently rebuilds the whole SVG every frame via `recompute()` on mousemove — don't over-redraw. Instead:
   - Rebuild SVG only on resize/scroll (as today)
   - Drive highlight via CSS classes on the `edges-layer` SVG root: `[data-hover="CERTAIN_TO_WIN"]` → selectors like `polyline[data-edge-src="CERTAIN_TO_WIN"]` glow; others dim.
   - In `drawEdges()`, add `data-edge-src` and `data-edge-tgt` attributes to each polyline.
   - In `frame()`, compute current hover node and set `edgesSvg.parentElement.dataset.hover = hId || ''`.

**Critical file:** [SYSTEM_3_KNOWLEDGE_MESH.html](SYSTEM_3_KNOWLEDGE_MESH.html) — CSS additions (~line 700), `drawEdges()` polyline attrs, `frame()` hover detection.

**Verification:**
- Hover PATTERN → V-β glows ultramarine+accent; V-α and V-γ dim to 20% opacity.
- Hover over empty mesh area → all vectors return to baseline.
- Sympathetic neighbors (e.g., RWO when PATTERN is hovered) get a vermillion 1px outline ring.

---

## Schedule

Three commits, each independently reversible. Estimated total: ~90 minutes of focused work.

| Step | Package | Est. | Deliverable |
|------|---------|------|-------------|
| 1    | A: Write `ontology.json` + schema extraction | 15 min | JSON file matches current state, validates |
| 2    | A: Async loader + fetch fallback | 20 min | Page renders from JSON; no inline data |
| 3    | A: Verify + snapshot-compare DOM vs v1.4 | 5 min  | Confirm zero regression |
| 4    | B: `renderGhosts()` + empty `#cms-ghosts` div | 15 min | Ghost zone hydrated from data |
| 5    | B: Verify + edit test (add 4th ghost) | 5 min  | 4th ghost renders without code |
| 6    | C: CSS dim/glow rules + data-edge-* attrs | 15 min | Visual highlighting works on static hover |
| 7    | C: `frame()` hover detection → `data-hover` | 10 min | Dynamic highlight follows cursor |
| 8    | C: Sympathetic-neighbor ring via CSS | 5 min  | Ripple-active nodes get outline |

**Halt points:** after step 3 (A complete), after step 5 (A+B complete), after step 8 (full v1.5).

## Out of Scope (explicitly deferred)

- Click-to-pin (item 2 from the shortlist) — adds state machine complexity, schedule separately as v1.6.
- New vectors V-δ/V-ε — wait for user to specify semantics.
- Real telemetry hookup — no data source defined yet.
- Mobile/responsive — the brutalist grid intentionally assumes ≥1480px canvas.

## Verification (end-to-end)

1. Open `SYSTEM_3_KNOWLEDGE_MESH.html` in Chrome (already loaded at the same path).
2. Confirm all v1.4 functionality still works (9 nodes, 3 animated vectors, ripple physics, ghost zone).
3. Edit `ontology.json` — add a new node to Cluster 01, reload → new node appears, spring physics applies.
4. Hover each of the 9 nodes in turn → its incident edge(s) glow, others dim, sympathetic neighbors outline.
5. No console errors. FPS stays ≥ 55 on M-series Mac.
