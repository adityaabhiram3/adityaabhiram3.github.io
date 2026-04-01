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
    label: 'Computer Architecture',
    weight: 10,
    x: 52,
    y: 46,
    cluster: 'Core Systems',
    note: 'Design and evaluation of processors, memory hierarchies, and hardware/software interfaces.',
    relatedProjects: ['METAL', 'Range-Blocks'],
  },
  {
    label: 'Memory Systems',
    weight: 9,
    x: 34,
    y: 35,
    cluster: 'Core Systems',
    note: 'Research on latency, bandwidth, locality, and data movement across memory layers.',
    relatedProjects: ['CATALYST', 'METAL'],
  },
  {
    label: 'Cache Management',
    weight: 8,
    x: 70,
    y: 34,
    cluster: 'Core Systems',
    note: 'Policies and mechanisms for cache placement, replacement, and reuse-aware optimization.',
    relatedProjects: ['METAL', 'Loom'],
  },
  {
    label: 'Parallel Computing',
    weight: 8,
    x: 63,
    y: 60,
    cluster: 'Core Systems',
    note: 'Scaling computation across multicore and manycore systems while preserving efficiency.',
    relatedProjects: ['Range-Blocks', 'CATALYST'],
  },
  {
    label: 'Distributed Systems',
    weight: 9,
    x: 30,
    y: 59,
    cluster: 'Core Systems',
    note: 'Coordination, consistency, and performance in networked and disaggregated compute environments.',
    relatedProjects: ['CATALYST', 'Loom'],
  },
  {
    label: 'Operating Systems',
    weight: 7,
    x: 18,
    y: 46,
    cluster: 'Core Systems',
    note: 'Resource management, scheduling, isolation, and kernel-level performance behavior.',
    relatedProjects: ['Range-Blocks', 'CATALYST'],
  },
  {
    label: 'Heterogeneous Computing',
    weight: 7,
    x: 78,
    y: 52,
    cluster: 'Architecture',
    note: 'Programming and optimization across CPUs, GPUs, and specialized accelerators.',
    relatedProjects: ['METAL', 'Range-Blocks'],
  },
  {
    label: 'Domain-Specific Architectures',
    weight: 9,
    x: 47,
    y: 27,
    cluster: 'Architecture',
    note: 'Architecture design focused on target workload classes and dataflow characteristics.',
    relatedProjects: ['METAL', 'Range-Blocks'],
  },
  {
    label: 'Performance Modeling',
    weight: 6,
    x: 42,
    y: 67,
    cluster: 'Architecture',
    note: 'Analytical and empirical models for throughput, latency, scalability, and bottlenecks.',
    relatedProjects: ['Loom', 'CATALYST'],
  },
  {
    label: 'Compiler Optimization',
    weight: 6,
    x: 57,
    y: 71,
    cluster: 'Compilers',
    note: 'Transformations that improve execution time, locality, and resource efficiency.',
    relatedProjects: ['METAL', 'Loom'],
  },
  {
    label: 'Program Analysis',
    weight: 8,
    x: 24,
    y: 27,
    cluster: 'Compilers',
    note: 'Static and dynamic analysis to expose behavior, dependencies, and optimization opportunities.',
    relatedProjects: ['Loom', 'METAL'],
  },
  {
    label: 'Runtime Systems',
    weight: 7,
    x: 67,
    y: 23,
    cluster: 'Compilers',
    note: 'Execution-time systems that coordinate scheduling, synchronization, and adaptation.',
    relatedProjects: ['CATALYST', 'Range-Blocks'],
  },
  {
    label: 'Data-Intensive Systems',
    weight: 6,
    x: 82,
    y: 68,
    cluster: 'Applied Systems',
    note: 'System design for workloads dominated by data movement, indexing, and storage access.',
    relatedProjects: ['CATALYST', 'Loom'],
  },
  {
    label: 'System Reliability',
    weight: 6,
    x: 12,
    y: 67,
    cluster: 'Applied Systems',
    note: 'Fault tolerance, robustness, and predictable behavior under real deployment constraints.',
    relatedProjects: ['Range-Blocks', 'CATALYST'],
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