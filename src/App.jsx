import { useEffect, useMemo, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
  contactLinks,
  focusAreas,
  heroHighlights,
  navigation,
  personalSnapshot,
  publications,
  projects,
  researchWordCloud,
  skills,
  stats,
  timeline,
} from './data';

const pageMeta = {
  '/': {
    eyebrow: 'Systems research portfolio',
    title: 'Building locality-aware compiler and architecture ideas.',
    intro:
      'Aditya Prasanna is a PhD student at Simon Fraser University researching sparse traversals, memory systems, and compiler primitives for data-intensive workloads.',
  },
  '/research': {
    eyebrow: 'Research focus',
    title: 'Structural locality, traversal reuse, and domain-specific acceleration.',
    intro:
      'The current thread runs through cache behavior, graph-like traversals, and abstractions that let compilers and runtimes reason about memory locality.',
  },
  '/projects': {
    eyebrow: 'Selected projects',
    title: 'Research artifacts that connect simulations, runtimes, and compiler analysis.',
    intro:
      'These projects capture the progression from ideas about locality to published systems and accepted conference work.',
  },
  '/resume': {
    eyebrow: 'Resume snapshot',
    title: 'Experience across SFU, Huawei, Cisco, and IISc.',
    intro:
      'A concise view of education, skills, and past roles, with a direct resume download for the complete version.',
  },
  '/contact': {
    eyebrow: 'Contact',
    title: 'Best reached by email for research or collaboration inquiries.',
    intro:
      'Use the resume link for a detailed PDF or reach out directly if you are looking for systems, compiler, or architecture collaboration.',
  },
};

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem('portfolio-theme');
    if (stored) {
      return stored;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <SiteHeader theme={theme} setTheme={setTheme} />
      <main id="content" className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>Built for GitHub Pages with React and Vite.</p>
        <p>Current focus: compilers, memory systems, and locality-aware acceleration.</p>
      </footer>
    </div>
  );
}

function SiteHeader({ theme, setTheme }) {
  return (
    <header className="topbar">
      <div>
        <p className="brand-mark">AP</p>
        <p className="brand-copy">Aditya Prasanna</p>
      </div>
      <nav className="nav">
        {navigation.map((item) => (
          <NavLink key={item.path} to={item.path} end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>
    </header>
  );
}

function PageHero() {
  const meta = pageMeta[window.location.hash.replace('#', '') || '/'] || pageMeta['/'];

  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">{meta.eyebrow}</span>
        <h1>{meta.title}</h1>
        <p className="lede">{meta.intro}</p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-copy">
          <span className="eyebrow">Systems research portfolio</span>
          <h1>Aditya Prasanna</h1>
          <p className="lede">
            PhD student at Simon Fraser University researching structural locality, sparse traversals, and compiler support for
            memory-intensive workloads.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#/projects">
              View selected work
            </a>
            <a className="secondary-button" href="./resume.pdf" target="_blank" rel="noreferrer">
              Download resume
            </a>
          </div>
          <ul className="highlights" aria-label="Core highlights">
            {heroHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="personal-note">
            I care about making complex architecture and compiler ideas useful in practice, especially for workloads where memory
            movement matters more than raw compute.
          </p>
        </div>
        <div className="hero-panel">
          <div className="stat-grid">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
          <div className="focus-card">
            <p className="card-label">Current focus</p>
            <ul>
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <SectionHeading title="Research trajectory" description="A compressed view of the work that led to this portfolio." />
      <TimelinePreview />
      <SectionHeading title="Beyond the CV" description="A more personal view of how I approach systems research." />
      <div className="personal-grid">
        {personalSnapshot.map((item) => (
          <article className="personal-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function ResearchPage() {
  const [activeTerm, setActiveTerm] = useState(researchWordCloud[0]);
  const [activeCluster, setActiveCluster] = useState('All');
  const clusters = ['All', ...new Set(researchWordCloud.map((term) => term.cluster))];
  const visibleTerms =
    activeCluster === 'All' ? researchWordCloud : researchWordCloud.filter((term) => term.cluster === activeCluster);
  const projectByName = useMemo(() => new Map(projects.map((project) => [project.name, project])), []);
  const activeRelatedProjects = useMemo(
    () => (activeTerm.relatedProjects || []).map((name) => projectByName.get(name)).filter(Boolean),
    [activeTerm, projectByName],
  );

  const sizeMap = useMemo(() => {
    const weights = researchWordCloud.map((term) => term.weight);
    const min = Math.min(...weights);
    const max = Math.max(...weights);
    const map = {};

    researchWordCloud.forEach((term) => {
      const normalized = (term.weight - min) / (max - min || 1);
      map[term.label] = 0.88 + normalized * 0.92;
    });

    return map;
  }, []);

  return (
    <>
      <PageHero />
      <SectionHeading title="Interactive research map" description="Hover or click terms to inspect what each thread represents." />
      <section className="wordcloud-shell">
        <div className="cluster-filter" role="tablist" aria-label="Research clusters">
          {clusters.map((cluster) => (
            <button
              key={cluster}
              type="button"
              className={cluster === activeCluster ? 'filter-button active' : 'filter-button'}
              onClick={() => setActiveCluster(cluster)}
            >
              {cluster}
            </button>
          ))}
        </div>
        <div className="wordcloud-canvas" role="list" aria-label="Interactive research word cloud">
          {visibleTerms.map((term) => (
            <button
              key={term.label}
              type="button"
              role="listitem"
              className={term.label === activeTerm.label ? 'word-node active' : 'word-node'}
              style={{
                '--x': `${term.x}%`,
                '--y': `${term.y}%`,
                '--scale': sizeMap[term.label],
              }}
              onMouseEnter={() => setActiveTerm(term)}
              onFocus={() => setActiveTerm(term)}
              onClick={() => setActiveTerm(term)}
            >
              {term.label}
            </button>
          ))}
        </div>
        <article className="wordcloud-detail">
          <span className="project-tag">{activeTerm.cluster}</span>
          <h3>{activeTerm.label}</h3>
          <p>{activeTerm.note}</p>
          <div className="related-project-section">
            <h4>Relevant Projects</h4>
            <div className="related-project-list">
              {activeRelatedProjects.map((project) => (
                <article key={project.name} className="related-project-card">
                  <span className="project-tag">{project.tag}</span>
                  <h5>{project.name}</h5>
                  <p>{project.summary}</p>
                  <a href="#/projects" className="related-project-link">
                    Open projects page
                  </a>
                </article>
              ))}
            </div>
          </div>
        </article>
      </section>
      <SectionHeading title="Research themes" description="What the portfolio is organized around." />
      <div className="theme-grid">
        {focusAreas.map((item, index) => (
          <article className="theme-card" key={item}>
            <span className="theme-index">0{index + 1}</span>
            <h3>{item}</h3>
            <p>
              {index === 0 && 'Measuring how structural patterns in linked structures can be turned into useful predictions.'}
              {index === 1 && 'Studying locality in far-memory and accelerator-style settings where latency dominates.'}
              {index === 2 && 'Designing higher-level abstractions that help compilers preserve data access structure.'}
              {index === 3 && 'Using simulation to understand how caches, pointer chasing, and reuse interact.'}
            </p>
          </article>
        ))}
      </div>
      <SectionHeading title="Experience timeline" description="Roles that shaped the current research direction." />
      <TimelinePreview />
      <SectionHeading title="Publications" description="Accepted papers from the resume." />
      <div className="publication-grid">
        {publications.map((publication) => (
          <article className="publication-card" key={publication.title}>
            <span className="project-tag">{publication.venue}</span>
            <h3>{publication.title}</h3>
            <p>{publication.note}</p>
            <a className="related-project-link" href={publication.url} target="_blank" rel="noreferrer">
              Read paper
            </a>
          </article>
        ))}
      </div>
    </>
  );
}

function ProjectsPage() {
  const [activeTag, setActiveTag] = useState('All');
  const tags = ['All', ...new Set(projects.map((project) => project.tag))];

  const filteredProjects = useMemo(
    () => (activeTag === 'All' ? projects : projects.filter((project) => project.tag === activeTag)),
    [activeTag],
  );

  return (
    <>
      <PageHero />
      <div className="filter-bar" role="tablist" aria-label="Project filters">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={tag === activeTag ? 'filter-button active' : 'filter-button'}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.name}>
            <span className="project-tag">{project.tag}</span>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <strong>{project.impact}</strong>
          </article>
        ))}
      </div>
    </>
  );
}

function ResumePage() {
  return (
    <>
      <PageHero />
      <section className="resume-banner">
        <div>
          <h2>Education</h2>
          <div className="resume-list">
            <article>
              <h3>Simon Fraser University</h3>
              <p>PhD Computing Science, 2024 - Present. GPA: 3.84/4.33.</p>
            </article>
            <article>
              <h3>Simon Fraser University</h3>
              <p>M.Sc. (Thesis) Computing Science, 2021 - 2024. GPA: 3.61/4.33.</p>
            </article>
            <article>
              <h3>PES University</h3>
              <p>B.Tech Computer Science, 2017 - 2021. GPA: 8.09/10.00.</p>
            </article>
          </div>
        </div>
        <a className="primary-button" href="./resume.pdf" target="_blank" rel="noreferrer">
          Open resume PDF
        </a>
      </section>
      <SectionHeading title="Skills" description="Primary tools and environments from research, teaching, and internships." />
      <div className="skill-cloud">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
      <SectionHeading title="Experience" description="Selected roles from the resume." />
      <div className="resume-list resume-list-wide">
        {timeline.map((entry) => (
          <article key={entry.title}>
            <h3>{entry.title}</h3>
            <span>{entry.period}</span>
            <p>{entry.detail}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero />
      <section className="contact-grid">
        {contactLinks.map((item) => (
          <article className="contact-card" key={item.label}>
            <span className="card-label">{item.label}</span>
            <a href={item.href} target={item.href.startsWith('mailto:') ? '_self' : '_blank'} rel="noreferrer">
              {item.value}
            </a>
          </article>
        ))}
        <article className="contact-card">
          <span className="card-label">Location</span>
          <p>Burnaby, Canada</p>
        </article>
      </section>
    </>
  );
}

function SectionHeading({ title, description }) {
  return (
    <header className="section-heading">
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

function TimelinePreview() {
  return (
    <div className="timeline">
      {timeline.map((entry) => (
        <article key={entry.title} className="timeline-item">
          <span>{entry.period}</span>
          <div>
            <h3>{entry.title}</h3>
            <p>{entry.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectGrid({ limit }) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="project-grid">
      {visibleProjects.map((project) => (
        <article className="project-card" key={project.name}>
          <span className="project-tag">{project.tag}</span>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
          <strong>{project.impact}</strong>
        </article>
      ))}
    </div>
  );
}

export default App;