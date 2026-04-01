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
  { value: '2', label: 'Ongoing projects' },
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
    url: 'https://dl.acm.org/doi/10.1145/3620665.3640402',
  },
  {
    title: 'RANGE-BLOCKS: A Synchronization Facility for Domain-Specific Architectures',
    venue: 'ASPLOS 2025',
    note: 'Proceedings of the 30th ACM International Conference on Architectural Support for Programming Languages and Operating Systems.',
    url: 'https://dl.acm.org/doi/abs/10.1145/3669940.3707225',
  },
];

export const researchWordCloud = [
  {
    label: 'Operating Systems',
    weight: 10,
    x: 28,
    y: 44,
    cluster: 'Systems Fundamentals',
    note: 'Resource management, isolation, and system-level control across software and hardware.',
    relatedProjects: ['Range-Blocks', 'CATALYST'],
  },
  {
    label: 'Distributed Systems',
    weight: 9,
    x: 39,
    y: 32,
    cluster: 'Systems Fundamentals',
    note: 'Coordination, communication, and consistency across networked compute environments.',
    relatedProjects: ['CATALYST', 'Loom'],
  },
  {
    label: 'Concurrency Control',
    weight: 8,
    x: 34,
    y: 54,
    cluster: 'Systems Fundamentals',
    note: 'Mechanisms for correctness and scalability under parallel and concurrent execution.',
    relatedProjects: ['Range-Blocks', 'CATALYST'],
  },
  {
    label: 'Scheduling',
    weight: 8,
    x: 20,
    y: 56,
    cluster: 'Systems Fundamentals',
    note: 'Assigning work and resources efficiently across cores, nodes, and heterogeneous units.',
    relatedProjects: ['Range-Blocks', 'CATALYST'],
  },
  {
    label: 'Computer Architecture',
    weight: 9,
    x: 57,
    y: 30,
    cluster: 'Architecture and Memory',
    note: 'Design and evaluation of processors, pipelines, and hardware/software interfaces.',
    relatedProjects: ['METAL', 'Range-Blocks'],
  },
  {
    label: 'Memory Hierarchy',
    weight: 7,
    x: 63,
    y: 44,
    cluster: 'Architecture and Memory',
    note: 'Latency, bandwidth, and data-placement behavior across cache, DRAM, and far memory.',
    relatedProjects: ['CATALYST', 'METAL'],
  },
  {
    label: 'Cache Coherence',
    weight: 7,
    x: 70,
    y: 56,
    cluster: 'Architecture and Memory',
    note: 'Coordinating consistent shared-memory views across cores and cache levels.',
    relatedProjects: ['METAL', 'Range-Blocks'],
  },
  {
    label: 'Parallel Systems',
    weight: 9,
    x: 52,
    y: 60,
    cluster: 'Architecture and Memory',
    note: 'System-level performance and coordination across many-core and accelerator-rich environments.',
    relatedProjects: ['METAL', 'Range-Blocks'],
  },
  {
    label: 'Performance Engineering',
    weight: 6,
    x: 60,
    y: 70,
    cluster: 'Architecture and Memory',
    note: 'Measurement-driven optimization for throughput, latency, and resource efficiency.',
    relatedProjects: ['Loom', 'CATALYST'],
  },
  {
    label: 'Runtime Systems',
    weight: 6,
    x: 43,
    y: 72,
    cluster: 'Software Systems',
    note: 'Execution-time adaptation, coordination, and synchronization for complex workloads.',
    relatedProjects: ['CATALYST', 'Range-Blocks'],
  },
  {
    label: 'Storage Systems',
    weight: 8,
    x: 24,
    y: 28,
    cluster: 'Software Systems',
    note: 'Data organization, indexing, and access-path efficiency for large-scale datasets.',
    relatedProjects: ['Loom', 'CATALYST'],
  },
  {
    label: 'Networking Systems',
    weight: 7,
    x: 47,
    y: 22,
    cluster: 'Software Systems',
    note: 'Communication-path performance and system behavior in remote/disaggregated environments.',
    relatedProjects: ['CATALYST', 'Loom'],
  },
  {
    label: 'Fault Tolerance',
    weight: 6,
    x: 26,
    y: 68,
    cluster: 'Software Systems',
    note: 'Designing robust systems that continue operating correctly under failures and perturbations.',
    relatedProjects: ['Range-Blocks', 'CATALYST'],
  },
  {
    label: 'Compiler Systems',
    weight: 6,
    x: 66,
    y: 26,
    cluster: 'Software Systems',
    note: 'Compiler design for analysis, transformation, and system-level optimization of programs.',
    relatedProjects: ['METAL', 'Loom'],
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