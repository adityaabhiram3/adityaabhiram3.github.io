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