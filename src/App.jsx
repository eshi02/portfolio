import { useEffect, useRef, useState } from 'react'
import './App.css'

const PROJECTS = [
  {
    key: 'sketchmind',
    year: '2026',
    name: 'SketchMind',
    badge: 'Featured',
    blurb:
      'AI-powered platform that turns any topic into animated educational videos. A multi-agent pipeline researches, writes the script, and Manim renders it frame by frame.',
    tags: ['Python', 'Multi-Agent AI', 'Manim', 'EdTech'],
    href: 'https://github.com/eshi02/sketch-mind',
    accent: 'violet',
  },
  {
    key: 'landingcheck',
    year: '2026',
    name: 'LandingCheck',
    badge: 'Live',
    blurb:
      'AI-graded landing page audits in 30 seconds. Paste a URL, get a 0–100 score plus a prioritized list of conversion fixes. Full SaaS — auth, billing, rate limiting, PDF exports — deployed on Firebase App Hosting.',
    tags: ['Next.js 16', 'Supabase', 'Drizzle', 'Gemini', 'Dodo Payments', 'Firebase'],
    href: 'https://landingcheck--landingcheck.asia-east1.hosted.app',
    accent: 'emerald',
  },
  {
    key: 'election',
    year: '2026',
    name: 'Election Assistant India',
    badge: 'Hack2Skill PromptWars',
    blurb:
      'AI assistant for first-time Indian voters — eligibility, polling booths, and fact-checks in any Indian language with voice support. Built on Gemini, Cloud Run, Firebase, Maps, Translate, and Text-to-Speech.',
    tags: ['Gemini', 'Cloud Run', 'Firebase', 'Translate', 'TTS', 'Maps'],
    href: 'https://github.com/eshi02/election-assistant-india',
    accent: 'orange',
  },
  {
    key: 'github',
    year: 'Live',
    name: 'More on GitHub',
    blurb:
      'The rest of my experiments, contributions, and works-in-progress live on my GitHub. New things land regularly.',
    tags: ['Open Source', 'Side Projects'],
    href: 'https://github.com/eshi02',
    accent: 'blue',
  },
]

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Vite', 'Next.js', 'Tailwind', 'Redux'],
  },
  {
    label: 'Backend',
    items: ['Spring Boot', 'Spring', 'Hibernate', 'JPA', 'Node.js', 'REST APIs', 'Microservices'],
  },
  {
    label: 'Integrations & Analytics',
    items: ['Qrvey', 'Stripe', 'Twilio', 'Webhooks', 'OAuth', '3rd-party APIs'],
  },
  {
    label: 'AI & Cloud',
    items: ['AWS', 'GCP', 'Firebase', 'Claude Code', 'Gemini'],
  },
  {
    label: 'Data & Infra',
    items: ['MySQL', 'PostgreSQL', 'Docker', 'Git', 'Maven', 'Linux'],
  },
]

const EXPERIENCE = [
  {
    when: 'Jan 2025 — Present',
    role: 'Software Engineer',
    place: '24/7 Software',
    desc:
      'Full-stack development across Java (Spring Boot) and React. Designing REST APIs, integrating third-party platforms — Qrvey for embedded analytics & dashboards, plus other vendors — and shipping features end-to-end on AWS / GCP.',
  },
  {
    when: 'Apr 2023 — Jan 2025',
    role: 'Associate Software Engineer',
    place: '24/7 Software',
    desc:
      'Promoted from intern. Owned modules across the stack — React on the front, Spring Boot on the back — and integrated multiple third-party services into the product.',
  },
  {
    when: 'Nov 2022 — Apr 2023',
    role: 'Associate Software Engineer · Intern',
    place: '24/7 Software',
    desc:
      'Started my career as an intern at 24/7 Software — picked up Advanced Java, IoT, and the team’s codebase, then converted to a full-time role.',
  },
]

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useGradientBlob() {
  const ref = useRef(null)
  useEffect(() => {
    const blob = ref.current
    if (!blob) return
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    let raf
    const tick = () => {
      x += (tx - x) * 0.06
      y += (ty - y) * 0.06
      blob.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove)
    tick()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])
  return ref
}

function Clock() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const ist = time.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
  return <span>{ist} IST</span>
}

function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="brand">
        eshika<span>.dev</span>
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map((l, i) => (
          <li key={l.id}>
            <a href={`#${l.id}`}>
              <em>{String(i + 1).padStart(2, '0')}</em>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-status">
        <span className="dot" />
        Open to opportunities
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-meta">
        <div>
          <span className="k">Now</span>
          <span className="v">Software Engineer @ 24/7 Software</span>
        </div>
        <div>
          <span className="k">Local time</span>
          <span className="v">
            <Clock />
          </span>
        </div>
        <div>
          <span className="k">Stack</span>
          <span className="v">Full-stack · Java · React · Integrations</span>
        </div>
      </div>

      <h1 className="hero-title">
        <span className="line">
          <span className="word">Hi, I'm</span>{' '}
          <span className="word accent">Eshika</span>
          <span className="caret" />
        </span>
        <span className="line">
          <span className="word">a full-stack engineer</span>
        </span>
        <span className="line">
          <span className="word italic">who ships things.</span>
        </span>
      </h1>

      <div className="hero-bottom">
        <p className="lead">
          I build full-stack web apps end-to-end — clean React frontends,
          solid Spring Boot backends, and the messy bits in between
          (third-party integrations, dashboards, analytics) on AWS &amp; GCP.
          <br />
          <span className="muted">Currently shipping with Claude Code, Antigravity, Qrvey, Gemini, and a lot of REST.</span>
        </p>
        <div className="cta">
          <a href="#work" className="btn primary">
            See my work
            <span className="arr">→</span>
          </a>
          <a href="#contact" className="btn ghost">
            Say hi
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <span className="line-v" />
        scroll
      </div>
    </section>
  )
}

function Marquee() {
  const items = [
    'Full-stack',
    'Java',
    'Spring Boot',
    'React',
    'REST APIs',
    'Qrvey',
    'Dashboards',
    'Analytics',
    '3rd-party integrations',
    'AWS',
    'GCP',
    'Claude Code',
    'Gemini',
    'Clean code',
  ]
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span className="m-item" key={i}>
            {t}
            <span className="m-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-head reveal">
        <span className="num">01 / About</span>
        <h2>
          A developer with a soft spot for{' '}
          <em>elegant systems</em> and weird side projects.
        </h2>
      </div>

      <div className="bento reveal">
        <div className="card big">
          <span className="card-label">Profile</span>
          <p>
            I'm <strong>Eshika Singha</strong> — a full-stack engineer at{' '}
            <strong>24/7 Software</strong>. I build product features end-to-end:
            React on the front, Java &amp; Spring Boot on the back, and a lot
            of third-party glue in between — <strong>Qrvey</strong> for
            embedded dashboards &amp; analytics, plus other integrations,
            running on AWS &amp; GCP.
          </p>
          <p>
            I care about the boring details that make software actually feel
            good — predictable APIs, fast endpoints, and UIs that don't fight
            the user.
          </p>
        </div>
        <div className="card">
          <span className="card-label">Currently</span>
          <ul className="dot-list">
            <li>Backend at 24/7 Software</li>
            <li>Building with Gemini & GCP</li>
            <li>Exploring system design</li>
          </ul>
        </div>
        <div className="card">
          <span className="card-label">Based in</span>
          <p className="big-text">Pune, IN</p>
          <p className="muted">UTC +5:30 · Open to remote</p>
        </div>
        <div className="card lime">
          <span className="card-label">Looking for</span>
          <p className="big-text">Hard problems</p>
          <p className="muted">Backend · AI · Infra</p>
        </div>
      </div>
    </section>
  )
}

function ProjectPreview({ keyName }) {
  if (keyName === 'sketchmind') {
    return (
      <div className="preview sketchmind">
        <div className="sm-brand">
          <span className="sm-logo">S</span>
          SketchMind
        </div>
        <div className="sm-headline">Learn anything visually</div>
        <div className="sm-input">Bubble Sort vs Quick Sort</div>
        <div className="sm-steps">
          <span className="sm-step on">
            <em>1</em> Researching
          </span>
          <span className="sm-step">
            <em>2</em> Scripting
          </span>
          <span className="sm-step">
            <em>3</em> Rendering
          </span>
        </div>
      </div>
    )
  }
  if (keyName === 'landingcheck') {
    return (
      <div className="preview landingcheck">
        <div className="lc-pill">
          <span className="lc-pill-dot" />
          AI-GRADED · 30+ HEURISTICS · ~5S
        </div>
        <h4 className="lc-headline">
          Your landing page,{' '}
          <span className="lc-headline-grad">graded honestly</span>{' '}
          in 30 seconds.
        </h4>
        <div className="lc-card">
          <div className="lc-card-head">
            <span className="lc-card-label">Sample audit</span>
            <span className="lc-card-host">stripe.com</span>
          </div>
          <div className="lc-score">
            <span className="lc-num">93</span>
            <span className="lc-denom">/100</span>
          </div>
          <p className="lc-card-desc">
            Excellent — clear value prop, prominent CTAs, strong social proof.
          </p>
          <div className="lc-tags">
            <span className="lc-tag good">
              <span className="lc-tag-dot good" />
              hero clarity
            </span>
            <span className="lc-tag good">
              <span className="lc-tag-dot good" />
              CTA placement
            </span>
            <span className="lc-tag good">
              <span className="lc-tag-dot good" />
              social proof
            </span>
            <span className="lc-tag warn">
              <span className="lc-tag-dot warn" />
              pricing transparency
            </span>
          </div>
        </div>
      </div>
    )
  }
  if (keyName === 'election') {
    return (
      <div className="preview election">
        <div className="el-brand">
          <span className="el-logo">✓</span>
          Election Assistant
        </div>
        <div className="el-chips">
          <span>Am I eligible?</span>
          <span>I moved cities</span>
          <span>Fact-check</span>
          <span>Polling booth</span>
        </div>
        <div className="el-bubble">
          <span className="el-avatar" />
          <span className="el-text">
            Hi! 👋 I'm here to help you understand voting in India.
          </span>
        </div>
      </div>
    )
  }
  return (
    <div className="preview github">
      <div className="gh-line">
        <span className="gh-tag">repo</span>
        <span className="gh-name">eshi02/sketch-mind</span>
      </div>
      <div className="gh-line">
        <span className="gh-tag">repo</span>
        <span className="gh-name">eshi02/landingcheck</span>
      </div>
      <div className="gh-line">
        <span className="gh-tag">repo</span>
        <span className="gh-name">eshi02/election-assistant-india</span>
      </div>
      <div className="gh-line">
        <span className="gh-tag dim">+ more</span>
        <span className="gh-name dim">on github.com/eshi02</span>
      </div>
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="section">
      <div className="section-head reveal">
        <span className="num">02 / Selected Work</span>
        <h2>
          A few things I've <em>built</em>.
        </h2>
      </div>

      <div className="projects">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            className={`project reveal accent-${p.accent}`}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-mock">
              <div className="mock-bar">
                <div className="dots">
                  <span /> <span /> <span />
                </div>
                {p.badge && <span className="mock-badge">{p.badge}</span>}
              </div>
              <ProjectPreview keyName={p.key} />
            </div>
            <div className="project-info">
              <div className="project-top">
                <span className="project-year">{p.year}</span>
                <span className="project-arrow">↗</span>
              </div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-blurb">{p.blurb}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-head reveal">
        <span className="num">03 / Toolkit</span>
        <h2>
          The <em>stack</em> I reach for.
        </h2>
      </div>

      <div className="skill-grid">
        {SKILL_GROUPS.map((g) => (
          <div className="skill-group reveal" key={g.label}>
            <div className="skill-label">— {g.label}</div>
            <div className="chips">
              {g.items.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head reveal">
        <span className="num">04 / Experience</span>
        <h2>
          What I've been <em>up to</em>.
        </h2>
      </div>

      <ol className="timeline">
        {EXPERIENCE.map((e, i) => (
          <li className="t-item reveal" key={i}>
            <div className="t-when">{e.when}</div>
            <div className="t-content">
              <h3>
                {e.role} <span>· {e.place}</span>
              </h3>
              <p>{e.desc}</p>
            </div>
            <span className="t-dot" />
          </li>
        ))}
      </ol>

    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <span className="num reveal">05 / Contact</span>
      <h2 className="contact-title reveal">
        Let's build<br />
        something <span className="outlined">good.</span>
      </h2>

      <a href="mailto:singhaeshika4@gmail.com" className="big-mail reveal">
        singhaeshika4@gmail.com
        <span className="arr">↗</span>
      </a>

      <div className="contact-grid reveal">
        <div>
          <div className="k">Elsewhere</div>
          <a href="https://github.com/eshi02" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/eshikasingha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:singhaeshika4@gmail.com">Email ↗</a>
        </div>
        <div>
          <div className="k">Currently</div>
          <span>Software Engineer</span>
          <span>@ 24/7 Software</span>
          <span>Open to chats</span>
        </div>
        <div>
          <div className="k">Based in</div>
          <span>Pune, India</span>
          <span>UTC +5:30 (IST)</span>
          <span>Remote-friendly</span>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Eshika Singha</div>
      <div>
        Built with React · <span className="lime">Vite</span> · plenty of chai
      </div>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}

export default function App() {
  useScrollReveal()
  const blobRef = useGradientBlob()

  return (
    <>
      <div className="blob" ref={blobRef} aria-hidden />
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
