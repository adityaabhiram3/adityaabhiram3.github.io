export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export const heroHighlights = [
  'PhD Computing Science at Simon Fraser University',
  'Research Assistant in Systems, Networking and Architecture Research Lab',
  'Compiler and architecture work spanning gem5, LLVM, MLIR, TVM, and CUDA',
];

export const personalSnapshot = [
  {
    title: 'Why I build systems',
    detail:
      'I enjoy translating hard-to-see memory behavior into practical compiler and runtime choices that speed up real workloads.',
  },
  {
    title: 'How I like to work',
    detail:
      'I like combining formal simulation studies with implementation-first prototypes so ideas can be stress-tested quickly.',
  },
  {
    title: 'What I am exploring now',
    detail:
      'Structural locality signals in pointer-heavy traversals, and how those signals can guide adaptive optimizations.',
  },
];

export const stats = [
  { value: '3.84/4.33', label: 'PhD GPA' },
  { value: '2', label: 'Accepted papers' },
  { value: '4', label: 'Core research themes' },
  { value: '6', label: 'Languages in daily use' },
];

export const focusAreas = [
  'Sparse data-structure traversal',
  'Domain-specific architectures',
  'Compiler primitives for locality',
  'Cache behavior and memory systems',
];

export const timeline = [
  {
    period: '2024 - Present',
    title: 'PhD Computing Science, SFU',
    detail:
      'Researching structural locality in pointer-centric data structures and compiler support for memory-intensive workloads.',
  },
  {
    period: '2024',
    title: 'Compiler Research Engineer Intern, Huawei',
    detail:
      'Supported GPU compiler builds and developed synchronization utilities for multi-threaded compilation workflows.',
  },
  {
    period: '2021 - Present',
    title: 'Research Assistant, SYNAR Lab',
    detail:
      'Designing abstractions and simulation studies for locality-aware optimizations on domain-specific accelerators.',
  },
  {
    period: '2021 - Present',
    title: 'Teaching Assistant, SFU',
    detail:
      'Teaching computer systems, memory hierarchy, cache protocols, and RISC-V assembly labs.',
  },
  {
    period: '2020 - 2021',
    title: 'Industry and research internships',
    detail:
      'Worked on MEAN applications at Cisco and on compiler and simulator tooling at IISc.',
  },
];

export const skills = [
  'C++',
  'C',
  'Python',
  'Go',
  'R',
  'CUDA',
  'OpenMP',
  'OpenCL',
  'LLVM',
  'MLIR',
  'TVM',
  'gem5',
  'MongoDB',
  'Postgres',
  'MySQL',
];

export const projects = [
  {
    name: 'Loom',
    tag: 'Locality modeling',
    summary:
      'Probabilistic structural representations for predicting traversal reuse in pointer-centric data structures.',
    impact: 'Moves beyond hotness by modeling structure-aware locality.',
  },
  {
    name: 'CATALYST',
    tag: 'Far-memory runtime',
    summary:
      'A lightweight C++ runtime that reduces pointer-chasing overhead with traversal short-circuiting.',
    impact: 'Reported up to 80% lower remote memory traffic on selected workloads.',
  },
  {
    name: 'Range-Blocks',
    tag: 'Synchronization facility',
    summary:
      'A facility for mutating graphs and indexed structures on domain-specific architectures.',
    impact: 'Accepted at ASPLOS 2025.',
  },
  {
    name: 'METAL',
    tag: 'Index caching',
    summary:
      'A multi-level indexing approach that translates index reuse into caching behavior for hierarchical data structures.',
    impact: 'Accepted at ASPLOS 2024.',
  },
];

export const publications = [
  {
    title: 'METAL: Caching Multi-level Indexes in Domain-Specific Architectures',
    venue: 'ASPLOS 2024',
    note: 'Proceedings of the 29th ACM International Conference on Architectural Support for Programming Languages and Operating Systems.',
  },
  {
    title: 'RANGE-BLOCKS: A Synchronization Facility for Domain-Specific Architectures',
    venue: 'ASPLOS 2025',
    note: 'Proceedings of the 30th ACM International Conference on Architectural Support for Programming Languages and Operating Systems.',
  },
];

export const researchWordCloud = [
  {
    label: 'Structural Locality',
    weight: 10,
    x: 52,
    y: 46,
    cluster: 'Memory Systems',
    note: 'Predicting reuse from structure, not just temporal hotness.',
  },
  {
    label: 'Sparse Traversals',
    weight: 9,
    x: 34,
    y: 35,
    cluster: 'Memory Systems',
    note: 'Understanding pointer-centric walks where latency dominates.',
  },
  {
    label: 'Pointer Chasing',
    weight: 8,
    x: 70,
    y: 34,
    cluster: 'Memory Systems',
    note: 'Modeling dependent accesses that challenge prefetching and caches.',
  },
  {
    label: 'Cache Behavior',
    weight: 8,
    x: 63,
    y: 60,
    cluster: 'Memory Systems',
    note: 'Characterizing misses and reuse in indirect access patterns.',
  },
  {
    label: 'Domain-Specific Architectures',
    weight: 9,
    x: 30,
    y: 59,
    cluster: 'Architecture',
    note: 'Designing accelerator-aware abstractions for irregular workloads.',
  },
  {
    label: 'gem5-SALAM',
    weight: 7,
    x: 18,
    y: 46,
    cluster: 'Architecture',
    note: 'Simulating front-end and back-end interactions for DSA evaluation.',
  },
  {
    label: 'Far Memory',
    weight: 7,
    x: 78,
    y: 52,
    cluster: 'Architecture',
    note: 'Reducing remote-memory traffic in large, pointer-heavy indexes.',
  },
  {
    label: 'Compiler Primitives',
    weight: 9,
    x: 47,
    y: 27,
    cluster: 'Compilers',
    note: 'Creating reusable compiler-level representations for locality.',
  },
  {
    label: 'LLVM IR',
    weight: 6,
    x: 42,
    y: 67,
    cluster: 'Compilers',
    note: 'Connecting program structure and backend optimization opportunities.',
  },
  {
    label: 'MLIR',
    weight: 6,
    x: 57,
    y: 71,
    cluster: 'Compilers',
    note: 'Exploring multi-level representations for hardware-targeted lowering.',
  },
  {
    label: 'Traversal Reuse',
    weight: 8,
    x: 24,
    y: 27,
    cluster: 'Algorithms',
    note: 'Capturing repeated path behavior to reduce wasted memory work.',
  },
  {
    label: 'Index Structures',
    weight: 7,
    x: 67,
    y: 23,
    cluster: 'Algorithms',
    note: 'Optimizing B+Trees and related structures under irregular access.',
  },
  {
    label: 'Range-Blocks',
    weight: 6,
    x: 82,
    y: 68,
    cluster: 'Algorithms',
    note: 'Synchronization facility accepted at ASPLOS 2025.',
  },
  {
    label: 'METAL',
    weight: 6,
    x: 12,
    y: 67,
    cluster: 'Algorithms',
    note: 'Multi-level index caching approach accepted at ASPLOS 2024.',
  },
];

export const contactLinks = [
  {
    label: 'Email',
    value: 'aditya_prasanna@sfu.ca',
    href: 'mailto:aditya_prasanna@sfu.ca',
  },
  {
    label: 'Resume PDF',
    value: 'Download full resume',
    href: './resume.pdf',
  },
];