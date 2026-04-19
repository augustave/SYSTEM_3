/* ════════════════════════════════════════════════════════════════════════════
   SYSTEM_3 · KNOWLEDGE_MESH · ONTOLOGY DATA · v1.5.0
   Single source of truth. Edit this file to mutate the mesh.
   Loaded via <script> before the main runtime → no fetch, no CORS.
   ════════════════════════════════════════════════════════════════════════════ */
window.__ONTOLOGY__ = {
  revision: "1.5.0",

  metaAnchor: {
    id: "KM_ANCHOR",
    ref: "T·0 · META-ROOT",
    label: "KM",
    type: "System : Knowledge_Mesh",
    governedBy: "TO",
    manifestsAs: "T_UX",
    structuredBy: "MO",
    physics: "ν&lt;0 · 1-DOF",
    terminal: "V-β TERMINAL",
    metaRelations: "7 META-RELS · 3 VECTORS",
    count: "N = 09 (1·META / 8·CANON)"
  },

  clusters: [
    {
      id: "01",
      name: "Cognitive Architecture",
      desc: "Mechanics of decision-making, bias, and culture formulation.",
      renderMode: "RAW TEXT · HIGH CONTRAST · STARK GRID",
      patternId: "m01a",
      patternSvg: `<path d="M0 0 L14 0 L20 14 L6 14 Z" fill="none" stroke="var(--p-ivory-black)" stroke-width="0.35"/><path d="M0 7 L20 7" stroke="var(--p-ivory-black)" stroke-width="0.2" stroke-dasharray="1 1.5"/>`,
      patternSize: "20,14",
      nodes: [
        { id: "HTAHT",   ref: "N-01.01", alt: "FN · VOLATILITY", type: "Psychology : Wartime_Endurance", ord: "N·01·01", title: "The Hard Thing About Hard Things", func: "Navigating terminal volatility; wartime psychological endurance under adversarial conditions.", rails: [{k:"MODE",v:"WARTIME"}, {k:"END.",v:"PSYCHO"}, {k:"POLE",v:"VOLATILE"}] },
        { id: "WYDIWYA", ref: "N-01.02", alt: "FN · CULTURE",    type: "Behavioral : Observable_Action", ord: "N·01·02", title: "What You Do Is Who You Are",       func: "Translating abstract values into observable, programmable actions. Culture as executable instruction set.", rails: [{k:"MODE",v:"OBSERV"}, {k:"TYPE",v:"PROG."}, {k:"SCOPE",v:"ACTION"}] }
      ]
    },
    {
      id: "02",
      name: "Network Topology",
      desc: "The mathematical and spatial rules of connected systems.",
      renderMode: "WIREFRAME · BOUNDING BOX · TESSELLATION",
      patternId: "m02a",
      patternSvg: `<path d="M0 0 L12 0 L16 12 L4 12 Z" fill="none" stroke="var(--p-prussian-blue)" stroke-width="0.45"/><path d="M0 0 L4 12 M12 0 L16 12" stroke="var(--p-prussian-blue)" stroke-width="0.2" stroke-dasharray="1 1"/>`,
      patternSize: "16,12",
      nodes: [
        { id: "RWO",     ref: "N-02.01", alt: "FN · PROTOCOL",  type: "Network : Decentralized_Protocol", ord: "N·02·01", title: "Read Write Own",               func: "Decentralized protocol design and cryptoeconomic incentives as primitive.", rails: [{k:"MODE",v:"DECEN."}, {k:"ECON",v:"CRYPTO"}, {k:"PROT.",v:"OPEN"}] },
        { id: "PATTERN", ref: "N-02.02", alt: "FN · PRIMITIVE", type: "Architecture : Structural_Primitive", ord: "N·02·02", title: "A Pattern Language",       func: "Deep structural primitives for interface and environment design. Geometry as grammar. Generative rules over surface instances.", rails: [{k:"MODE",v:"GEN."}, {k:"SCOPE",v:"ARCH"}, {k:"GRAM.",v:"SPATIAL"}] },
        { id: "SHANNON", ref: "N-02.03", alt: "FN · ENTROPY",   type: "Network : Signal_Fidelity",         ord: "N·02·03", title: "Mathematical Theory of Comms.", func: "Quantification of information entropy and signal redundancy across adversarial channels.", rails: [{k:"MODE",v:"SIGNAL"}, {k:"LIMIT",v:"NOISE"}, {k:"STATE",v:"ENTROPY"}] }
      ]
    },
    {
      id: "03",
      name: "Tactical Swarm Dynamics",
      desc: "Coordination, defense, and maneuverability under hostile conditions.",
      renderMode: "KINEMATIC · VECTOR · RED ACCENT",
      patternId: "m03a",
      patternSvg: `<path d="M0 0 L13 0 L18 13 L5 13 Z" fill="none" stroke="var(--p-vermillion)" stroke-width="0.35"/><path d="M0 6.5 L18 6.5" stroke="var(--p-vermillion)" stroke-width="0.2" stroke-dasharray="1 1.3"/><circle cx="9" cy="6.5" r="0.5" fill="var(--p-vermillion)"/>`,
      patternSize: "18,13",
      nodes: [
        { id: "CERTAIN_TO_WIN", ref: "N-03.01", alt: "FN · OODA",     type: "Tactics : OODA_Temporal_Dominance", ord: "N·03·01", title: "Certain to Win",                  func: "OODA-loop application toward temporal dominance; maneuver warfare for commercial-scale operations.", rails: [{k:"MODE",v:"TEMP."}, {k:"GOAL",v:"DOMIN."}, {k:"TEMPO",v:"FAST"}] },
        { id: "TEAM_OF_TEAMS",  ref: "N-03.02", alt: "FN · COMMAND",  type: "Command : Decentralized_Fluid",     ord: "N·03·02", title: "Team of Teams",                   func: "Decentralized command structures for fluid, high-threat environments; shared consciousness × empowered execution.", rails: [{k:"MODE",v:"DECEN."}, {k:"STRUCT.",v:"FLUID"}, {k:"OPS",v:"JOINT"}] },
        { id: "BOYD",           ref: "N-03.03", alt: "FN · MANEUVER", type: "Tactics : Cognitive_Disruption",    ord: "N·03·03", title: "A Discourse on Winning & Losing", func: "Destruction and creation phases of mental models; collapsing adversary decision cycles.", rails: [{k:"MODE",v:"KINETIC"}, {k:"TACTIC",v:"DISRUPT"}, {k:"CYCLE",v:"LOOP"}] }
      ]
    }
  ],

  edges: [
    { name: "V-α", title: "OODA → CAPITAL",        sources: ["CERTAIN_TO_WIN"], targets: ["RWO"],        color: "var(--p-chrome-yellow)", stroke: 2.4, accent: "var(--p-vermillion)",   dash: "0",   bend:  0.26, animType: "packet", speed: "1.2s" },
    { name: "V-β", title: "TOPOLOGICAL DEFENSE",   sources: ["PATTERN"],        targets: ["KM_ANCHOR"],  color: "var(--p-ultramarine)",   stroke: 1.8, accent: "var(--p-alizarin)",     dash: "6 3", bend: -0.22, animType: "crawl",  speed: "3s"   },
    { name: "V-γ", title: "INFO → KINETIC",        sources: ["SHANNON"],        targets: ["BOYD"],       color: "var(--p-vermillion)",    stroke: 2.2, accent: "var(--p-ivory-black)",  dash: "0",   bend:  0.18, animType: "packet", speed: "0.8s" }
  ],

  ghosts: [
    { id: "ZERO_TO_ONE", ref: "N-∅.01", alt: "WAS TGT · V-α", title: "Zero to One", titleNote: null,           deprecatedIn: "REV 1.2", supersededBy: "SUPERSEDED · R1.3 REWIRES V-α → RWO" },
    { id: "SECURITY",    ref: "N-∅.02", alt: "WAS TGT · V-β", title: "Security",    titleNote: "(structural)", deprecatedIn: "REV 1.2", supersededBy: "SUPERSEDED · R1.3 REWIRES V-β → KM"  },
    { id: "CHIP_WAR",    ref: "N-∅.03", alt: "WAS TGT · V-β", title: "Chip War",    titleNote: null,           deprecatedIn: "REV 1.2", supersededBy: "SUPERSEDED · R1.3 REWIRES V-β → KM"  }
  ]
};
