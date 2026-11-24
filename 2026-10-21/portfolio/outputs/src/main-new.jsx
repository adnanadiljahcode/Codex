
import { createRoot } from "react-dom/client";

import "./style-dev.css";

function App() {
  return ( 
    <div> 
      <Hero></Hero> 
      <About></About> 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">

        <ProjectCard
          title="Little Fern's Cozy Corner"
          contribution="Frontend Engineering"
          pitch="A website for Little Fern, a neighborhood cafe."
          highlight="Built using Lovable.dev"
          techStack={["React", "TypeScript", "Tailwind CSS"]}
          previewUrl="./cafe.png"
          previewAlt="Little Fern's Cozy Corner"
          demoUrl="https://cozy-fern-menu.lovable.app/"
          githubUrl="https://github.com/adnanadiljahcode/little-fern-s-cozy-corner"
        />

        <ProjectCard
          title="Easy Bookings"
          contribution="Database Engineering"
          pitch="A booking app for a photography studio"
          highlight="Built using Supabase.com"
          techStack={["React", "Tailwind CSS", "Supabase"]}
          previewUrl="./bookings.png"
          previewAlt="Easy Bookings"
          demoUrl="https://portrait-time-picker.lovable.app/"
          githubUrl="https://github.com/adnanadiljahcode/easy-bookings"
          supabaseUrl="https://supabase.com/dashboard/project/geefjxbwcaonibgnwmcs"
        />

      </div>

      <br /><br />

    </div> 
  );
}

createRoot(document.getElementById("root")).render(<App />);

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-start max-w-4xl mx-auto px-6 py-20">
      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Entry-Level Roles
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl tracking-tight text-neutral-900 dark:text-neutral-50 mb-6 leading-[1.1]">
        ADNAN ADIL <br />
        <span className="text-neutral-500 dark:text-neutral-400 font-extrabold">
          Frontend Developer & UI Designer
        </span>
      </h1>

      {/* Subheading / Value Proposition */}
      <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mb-8 leading-relaxed">
        Currently at <strong className="text-neutral-900 dark:text-white font-medium">EUSOPHT</strong>
        <br />I craft clean, responsive interfaces using &nbsp;
        <span className="font-medium text-neutral-900 dark:text-white">
          TypeScript, React, Vite, Tailwind CSS, Lucide, shadcn/ui
        </span>
      </p>

      {/* Primary & Secondary Call to Actions */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity"
        >
          View Portfolio ↓
        </a>
        <a
          href="https://adnan-designs-showcase.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          Lovable.dev (https://adnan-designs-showcase.lovable.app) ↗
        </a>
      </div>

      {/* Direct Social / Contact Links */}
      <div className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
        <a href="https://github.com/adnanadiljahcode" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
          GitHub
        </a>
        <span>•</span>
        <a href="https://supabase.com/dashboard/project/geefjxbwcaonibgnwmcs" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
          Supabase
        </a>
        <span>•</span>
        <a href="mailto:[your.email@example.com]" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
          [adnan.adil.jah+portfolio@gmail.com]
        </a>
      </div>
    </section>
  );
}

export function About() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend & Data",
      skills: ["Node.js", "Express", "Supabase", "PostgreSQL"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Currently Learning",
      skills: [ "Vite", "Lovable"],
    },
  ];

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      {/* Section Header */}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-8">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Narrative Bio */}
        <div className="md:col-span-2 space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base">
          <p>
            I'm pursuing <strong className="text-neutral-900 dark:text-neutral-100 font-medium">web developement & design</strong>. 
            I got started @ EUSOPHT. I built my portfolio web app here.
          </p>

          <p>
            My main focus is on building clean, accessible user interfaces and reliable web applications. 
          </p>

          <p>
            I prioritize performance, intuitive UX, and maintainable code architecture across projects I work on.
          </p>

          {/* Quick Academic Details */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">GitHub: </span>
            https://github.com/adnanadiljahcode
          </div>
        </div>

        {/* Structured Skills Sidebar */}
        <div className="space-y-6">
          <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 dark:text-neutral-500">
            Skills & Technologies
          </h3>

          <div className="space-y-4">
            {skillCategories.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProjectCard({
  title,
  contribution,
  pitch,
  highlight,
  techStack,
  previewUrl,
  previewAlt,
  demoUrl,
  githubUrl,
  supabaseUrl,
}) {
  return (
    <article className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Visual Preview Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-800">
        <img
          src={previewUrl}
          alt={previewAlt}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Contribution / Role Tag */}
          <div className="mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
              {contribution}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">
            {title}
          </h3>

          {/* Value Pitch */}
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            {pitch}
          </p>

          {/* Engineering Highlight (Optional) */}
          {highlight && (
            <div className="mb-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 p-3 border border-neutral-100 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300">
              <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">Key Challenge: </strong>
              {highlight}
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 text-sm font-medium">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-900 dark:text-neutral-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
          {supabaseUrl && (
            <a
              href={supabaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Supabase <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
