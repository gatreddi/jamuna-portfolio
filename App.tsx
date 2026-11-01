import React , {useState} from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X, Download, Mail, Phone, ExternalLink } from "lucide-react";

type Project = {
  number: string; title: string; kind: string; summary: string;
  technologies: string[]; contribution: string; details: string[];
};
const projects: Project[] = [
  {
    number: "01", title: "Breast Cancer Segmentation and Classification",
    kind: "Mini project · Machine learning",
    summary: "Explored an image-processing workflow combining Fuzzy C-Means (FCM) segmentation with deep-learning-based classification.",
    technologies: ["Python", "CNN models", "Image processing", "FCM"],
    contribution: "Worked on the segmentation and classification approach as an academic mini project.",
    details: [
      "Intended users: an academic audience exploring image-analysis methods; this project is not a clinical tool.",
      "Goal: investigate how image segmentation and CNN-based classification can be combined in a research workflow.",
      "Role: student project contributor, focusing on the segmentation and classification pipeline.",
      "Process: examine the problem, explore FCM for segmentation, and consider CNN models for classification.",
      "Tools: Python, image-processing methods, and CNN models.",
      "Key consideration: results depend on the dataset, preprocessing, model design, and evaluation. No clinical validation or performance claim is made here.",
      "Outcome: an academic mini project exploring a computer-vision approach."
    ]
  },
  {
    number: "02", title: "Vital Aid",
    kind: "Figma prototype · Emergency education",
    summary: "A concept for an emergency-education application that presents first-aid guidance through clear screens and guided user flows.",
    technologies: ["Figma", "UI/UX", "Prototyping", "User flows"],
    contribution: "Designed a prototype focused on accessible navigation and communicating emergency guidance clearly.",
    details: [
      "Intended users: people looking for basic first-aid education while seeking appropriate professional help.",
      "Goal: make emergency learning content easier to navigate and understand under pressure.",
      "Role: UI/UX design and prototype development in Figma.",
      "Process: map core journeys, organize guide categories, and design screen-to-screen interactions.",
      "Tools: Figma and interface-design methods.",
      "Key decision: keep the main guidance path clear and avoid presenting the prototype as a substitute for emergency services.",
      "Outcome: a design concept/prototype; it is not presented as a deployed application."
    ]
  },
  {
    number: "03", title: "Wealth Map",
    kind: "Hackathon concept · Finance dashboard",
    summary: "A financial-planning application concept for visualizing expenses, savings, and personal goals in one dashboard.",
    technologies: ["UI/UX", "Dashboard design", "Figma"],
    contribution: "Contributed to the Wealth Map concept and pitch-deck work; the team placed in the top six of Fueled Contest 2.0.",
    details: [
      "Intended users: people who want a simple overview of spending, savings, and financial goals.",
      "Goal: bring common personal-finance planning views into a coherent dashboard concept.",
      "Role: contributed to the concept and presentation work.",
      "Process: outline key dashboard needs such as expense tracking, savings progress, and goal tracking.",
      "Tools: interface-design and pitch-deck tools.",
      "Key consideration: the concept needs trustworthy data handling and clear financial disclaimers before any real-world release.",
      "Outcome: hackathon concept; not publicly launched."
    ]
  }
];
const skills = [
  { title: "Programming", items: "Python, Dart" },
  { title: "Web technologies", items: "HTML, CSS" },
  { title: "Mobile development", items: "Flutter" },
  { title: "Design", items: "Figma, UI/UX design" },
  { title: "Tools & platforms", items: "Git, GitHub" },
  { title: "Database", items: "MySQL" },
  { title: "Data analytics", items: "Microsoft Excel" }
];
const experience = [
  { role: "UI/UX Designer", org: "ElectraWireless", desc: "Designed mobile and desktop screens for a super-app concept based on provided requirements." },
  { role: "Associate Software Engineer Intern", org: "Krishnova LLP", desc: "Worked on mobile application interfaces using Flutter and contributed to UI design and user-friendly flows." },
  { role: "Python Programming Intern", org: "Oasis Infobyte", desc: "Developed Python programs for practical tasks and practised functions, conditionals, loops, and data handling." },
  { role: "Growth and Business Development Intern", org: "Student Tribe", desc: "Contributed to growth and student engagement, supported team coordination, and helped organize events." }
];
const leadership = [
  ["2025–2026", "Vice-President, Student Activity Cell", "Bhaskar Engineering College"],
  ["2025", "Media Coordinator", "Bhaskar Engineering College"],
  ["2025", "Google Gemini Student Ambassador", "Student engagement and campus activities"],
  ["2024–2026", "Student Tribe Campus Ambassador", "Campus engagement"],
  ["2025", "Duolingo English Test Promoter", "Student outreach"],
  ["2026", "Team Lead, E-Cell", "BEC · IIT Bombay tie-up"],
  ["2023–2026", "Club Member, JBIIAI Incubation Cell", "Innovation and entrepreneurship activities"]
];
const achievements = [
  ["Top 6", "Fueled hackathon"],
  ["Top 10", "Pitch deck · T-Hub Blitz Cohort 2"],
  ["Award", "Innovation Excellence Award · Blitz Cohort 2026, JBIIAI"],
  ["Recognition", "Token of appreciation from Google Gemini"]
];
const certifications = [
  "Python with GenAI — Student Tribe Summer School, 2025",
  "Corporate Training Program — Mahindra Classes / Naandi Foundation",
  "Hackwith Hyderabad 3.0 — participation certificate, 2026",
  "Google Gemini Student Ambassador — completion certificate, 2025",
  "Duolingo English Test Promoter — completion certificate"
];

function SectionHeading({ index, title, note }: { index: string; title: string; note?: string }) {
  return <div className="section-heading"><span className="mono">{index}</span><div><h2>{title}</h2>{note && <p>{note}</p>}</div></div>;
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([]);
  const toggleCase = (title: string) => setExpanded(old => old.includes(title) ? old.filter(x => x !== title) : [...old, title]);
  const closeMenu = () => setMenuOpen(false);
  const resumePath = "/resume.pdf";

  return <div className="site-shell">
    <header className="site-header">
      <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Jamuna Gatreddi, home">JG<span>.</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
        {[["Work", "#work"], ["About", "#about"], ["Experience", "#experience"], ["Achievements", "#achievements"], ["Contact", "#contact"]].map(([label, href]) =>
          <a key={label} href={href} onClick={closeMenu}>{label}</a>
        )}
        <a className="nav-resume" href={resumePath} download>Resume <Download size={14} /></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE ENGINEERING <span className="eyebrow-sep">·</span> CLASS OF 2027</p>
          <h1>Hi, I’m Jamuna <span>Gatreddi.</span></h1>
          <p className="hero-lede">I’m a CSE student at Bhaskar Engineering College exploring mobile application development, UI/UX design, and Python-powered projects. I like turning requirements into clear interfaces and useful, thoughtfully built products.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={16} /></a>
            <a className="button button-secondary" href={resumePath} download>View resume <Download size={15} /></a>
          </div>
          <div className="hero-meta"><span>Based in India</span><span className="meta-divider" /><span>B.Tech CSE · 2027</span><span className="meta-divider" /><span>CGPA 7.31 / 10</span></div>
        </div>
        <aside className="hero-index" aria-label="Portfolio introduction">
          <span className="mono">PORTFOLIO / 2026</span>
          <div className="index-line" />
          <p>Design-minded development<br />with a practical learning approach.</p>
          <span className="mono muted">01 — 07 / SECTIONS</span>
        </aside>
      </section>

      <section id="work" className="section-wrap section-block">
        <SectionHeading index="01" title="Selected work" note="A mix of academic implementation and early-stage product concepts." />
        <div className="project-grid">
          {projects.map(p => <article className="project-card" key={p.number}>
            <div className="project-preview"><span className="mono">PROJECT {p.number}</span><div className="preview-mark">{p.number}</div><span className="preview-caption">Project preview coming soon</span></div>
            <div className="project-body">
              <p className="project-kind">{p.kind}</p>
              <h3>{p.title}</h3>
              <p className="project-summary">{p.summary}</p>
              <div className="tag-list">{p.technologies.map(t => <span key={t}>{t}</span>)}</div>
              <p className="contribution"><strong>My contribution</strong>{p.contribution}</p>
              <button className="text-action" onClick={() => toggleCase(p.title)} aria-expanded={expanded.includes(p.title)}>
                {expanded.includes(p.title) ? "Close case study" : "Read case study"} <ArrowUpRight size={15} className={expanded.includes(p.title) ? "rotate-icon" : ""} />
              </button>
              {expanded.includes(p.title) && <div className="case-study"><h4>Case study notes</h4><ol>{p.details.map((d, i) => <li key={i}>{d}</li>)}</ol></div>}
            </div>
          </article>)}
        </div>
      </section>

      <section id="skills" className="section-wrap section-block">
        <SectionHeading index="02" title="Technical skills" note="Tools and technologies I have worked with or studied." />
        <div className="skills-table">{skills.map((s, i) => <div className="skill-row" key={s.title}><span className="mono skill-number">0{i + 1}</span><h3>{s.title}</h3><p>{s.items}</p></div>)}</div>
      </section>

      <section id="experience" className="section-wrap section-block">
        <SectionHeading index="03" title="Experience" note="Learning through design, software work, and student engagement." />
        <div className="experience-list">{experience.map((e, i) => <article className="experience-row" key={e.org}>
          <span className="mono experience-number">0{i + 1}</span><div><h3>{e.role}</h3><p className="experience-org">{e.org}</p></div><p className="experience-desc">{e.desc}</p>
        </article>)}</div>
      </section>

      <section id="about" className="section-wrap section-block about-section">
        <SectionHeading index="04" title="A little about me" />
        <div className="about-content">
          <p className="about-lede">I work at the intersection of interface design, software learning, and student-led initiatives.</p>
          <div><p>I’m pursuing a B.Tech in Computer Science and Engineering at Bhaskar Engineering College, graduating in 2027. My experience so far spans Flutter interfaces, Python exercises, Figma prototypes, and an academic computer-vision mini project.</p><p>Alongside technical work, I’ve taken on student leadership and event coordination roles. These experiences have helped me communicate clearly, organize people around shared tasks, and collaborate across different teams. I’m continuing to build my fundamentals while learning how to make applications more useful and accessible.</p><a className="inline-link" href="#contact">Let’s connect <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section id="achievements" className="section-wrap section-block">
        <SectionHeading index="05" title="Leadership & recognition" note="Roles, campus initiatives, and milestones." />
        <div className="leadership-list">{leadership.map(([date, role, org]) => <div className="leadership-row" key={role}><span className="mono">{date}</span><h3>{role}</h3><p>{org}</p></div>)}</div>
        <div className="achievement-grid">{achievements.map(([label, title]) => <div className="achievement" key={title}><span>{label}</span><p>{title}</p></div>)}</div>
      </section>

      <section id="certifications" className="section-wrap section-block">
        <SectionHeading index="06" title="Certifications" note="Training and participation records." />
        <ul className="cert-list">{certifications.map(c => <li key={c}><span>{c}</span><ExternalLink size={14} aria-hidden="true" /></li>)}</ul>
      </section>

      <section id="contact" className="section-wrap contact-section">
        <SectionHeading index="07" title="Contact" note="For opportunities, collaboration, or a conversation about a project." />
        <div className="contact-layout"><h2>Have something<br />in mind?</h2><div className="contact-details">
          <a href="mailto:jamuna.gatreddi2909@gmail.com"><Mail size={17} /> jamuna.gatreddi2909@gmail.com <ArrowUpRight size={15} /></a>
          <a href="tel:+917013348085"><Phone size={17} /> +91 70133 48085 <ArrowUpRight size={15} /></a>
          <p className="contact-note">GitHub and LinkedIn links can be added here once the correct profile URLs are available.</p>
        </div></div>
      </section>
    </main>

    <footer className="site-footer"><a className="wordmark" href="#top">JG<span>.</span></a><p>Designed and built with care by Jamuna Gatreddi.</p><span className="mono">© 2026</span></footer>
  </div>;
}
export default App;