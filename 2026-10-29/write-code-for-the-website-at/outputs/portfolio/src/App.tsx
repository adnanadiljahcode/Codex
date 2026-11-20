import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import forest from "./hero-forest.jpg";

type Project = { name: string; detail: string; url: string };

const experience: Project[] = [
  { name: "EUSOPHT", detail: "Intern · Present–2026", url: "https://adnan-designs-showcase.lovable.app/" },
  { name: "SSUET", detail: "Java (TA) · 2001–2000", url: "https://adnan-designs-showcase.lovable.app/" },
];
const projects: Project[] = [
  { name: "Easy Bookings", detail: "Appointment scheduling", url: "https://portrait-time-picker.lovable.app/" },
  { name: "Little Fern’s Cozy Corner", detail: "A neighborhood café", url: "https://cozy-fern-menu.lovable.app/" },
];

function ProjectRow({ project, number }: { project: Project; number: string }) {
  return (
    <a className="project-row group" href={project.url} target="_blank" rel="noreferrer">
      <span className="project-number">{number}</span>
      <span className="project-name">{project.name}</span>
      <span className="project-detail">{project.detail}</span>
      <ArrowUpRight aria-hidden="true" className="project-arrow" size={19} strokeWidth={1.5} />
    </a>
  );
}

function App() {
  const [karachiTime, setKarachiTime] = useState("");
  useEffect(() => {
    const update = () => setKarachiTime(new Intl.DateTimeFormat("en", {
      timeZone: "Asia/Karachi", hour: "numeric", minute: "2-digit", hour12: true,
    }).format(new Date()));
    update();
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="monogram" href="#home" aria-label="Adnan Adil, home">A</a>
        <a className="home-link" href="#home"><span className="home-index">01</span>Home</a>
        <a className="contact-link" href="mailto:adnan.adil.jah@gmail.com">Let’s talk <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-heading">
            <p className="eyebrow hero-kicker">Independent developer · Karachi, PK</p>
            <h1>ADNAN<br /><span>ADIL</span></h1>
            <p className="role">Web developer</p>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src={forest} alt="Quiet, misty forest in the mountains" />
            <span className="image-caption">A little room to think.</span>
          </div>
          <div className="hero-bottom">
            <p>Building clean, fast and modern<br className="desktop-break" /> web experiences.</p>
            <a className="scroll-cue" href="#work"><span>Scroll to explore</span><ArrowDown size={16} /></a>
          </div>
        </section>

        <section className="section-wrap work-section" id="work">
          <div className="section-title"><span className="eyebrow">01 / Selected work</span><span className="title-rule" /></div>
          <div className="list-heading"><h2>Experience</h2><span>2020 — Now</span></div>
          <div className="project-list">{experience.map((item, i) => <ProjectRow key={item.name} project={item} number={`0${i + 1}`} />)}</div>
          <div className="list-heading personal-heading"><h2>Personal projects</h2><span>Made with care</span></div>
          <div className="project-list">{projects.map((item, i) => <ProjectRow key={item.name} project={item} number={`0${i + 3}`} />)}</div>
        </section>

        <section className="section-wrap education-section" id="education">
          <div className="section-title"><span className="eyebrow">02 / Education</span><span className="title-rule" /></div>
          <div className="education-list">
            <article className="education-row"><span className="education-number">01</span><div><h2>Master of Science</h2><p>San Diego State University</p></div><span className="education-date">2002 — 2004</span></article>
            <article className="education-row"><span className="education-number">02</span><div><h2>Bachelor of Science</h2><p>Sir Syed University of Engineering &amp; Technology</p></div><span className="education-date">1998 — 2001</span></article>
          </div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-title"><span className="eyebrow">03 / A little about me</span><span className="title-rule" /></div>
          <div className="about-copy">
            <h2>I build websites and web applications that are <em>fast, reliable and easy to use.</em></h2>
            <div className="about-notes"><p>My focus is turning ideas into working products — from clean interfaces and responsive layouts to solid, maintainable code.</p><p>I care about the details: performance, accessibility, and experiences that just work on any device.</p><p className="signoff">Curious and optimistic.</p></div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <span className="eyebrow">Have a good idea?</span>
          <a className="contact-title" href="mailto:adnan.adil.jah@gmail.com">Let’s make it<br /><em>work.</em><ArrowUpRight className="contact-arrow" size={38} strokeWidth={1.2} /></a>
          <a className="email-link" href="mailto:adnan.adil.jah@gmail.com"><Mail size={16} /> adnan.adil.jah@gmail.com</a>
        </section>
      </main>

      <footer className="footer section-wrap"><span>© Adnan Adil 2026</span><a href="mailto:adnan.adil.jah@gmail.com">Say hello <ArrowUpRight size={14} /></a><span>Karachi, PK <i /> {karachiTime}</span></footer>
    </div>
  );
}

export default App;
