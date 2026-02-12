import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedThemeToggle } from "@/components/magicui/animated-theme-toggle";
import { IconCloudTheme } from "@/components/icon-cloud-theme";
import { MorphingText } from "@/components/magicui/morphing-text";
import { MorphingImage } from "@/components/magicui/morphing-image";
import { Particles } from "@/components/magicui/particles";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Spotlight } from "@/components/magicui/spotlight";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SkillIcon } from "@/components/skill-icon";

const contact = {
  address: "Ubung Kaja, Denpasar Utara, Denpasar, Bali, Indonesia",
  phone: "+62 822-9013-9151",
  email: "rizkkyaf@gmail.com"
};

const experiences = [
  {
    role: "Frontend Developer",
    company: "Palm Code, Bali",
    period: "May 2023 - Present",
    highlights: [
      "Implemented UI/UX designs into fully functional web applications, reviewing and validating designs prior to development.",
      "Collaborated with backend engineers to integrate RESTful APIs and align technical implementation with project documentation.",
      "Initiated and structured scalable frontend codebases using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Implemented AI integrations by consuming LLM-based APIs, handling prompt engineering, response parsing, and workflow automation to enhance product functionality."
    ]
  },
  {
    role: "Freelance Frontend Web Developer",
    company: "Airestate, USA (Remote)",
    period: "March 2024 - June 2024",
    highlights: [
      "Built a real estate platform similar to Airbnb.",
      "Initiated codebase using React.js, Tailwind CSS, Next.js, TypeScript, and Zustand.",
      "Integrated Webflow component library into the Next.js app.",
      "Integrated Google Maps API and Airtable API."
    ]
  },
  {
    role: "Freelance Frontend Web Developer",
    company: "Kangean Energy Indonesia Ltd., Jakarta (Remote)",
    period: "August 2023 - March 2024",
    highlights: [
      "Implemented ERP design into a working app and reviewed it before implementation.",
      "Initiated codebase using React.js, Tailwind CSS, Next.js, and TypeScript."
    ]
  },
  {
    role: "Frontend Web Developer",
    company: "Accelego Kreasi Digital, Jakarta (Remote)",
    period: "March 2023 - April 2023",
    highlights: [
      "Built an ERP inventory system for their product.",
      "Implemented inventory management interfaces and workflows."
    ]
  },
  {
    role: "Frontend Web Developer",
    company: "PT. Integrasi Inti Sinergi, Jakarta (Remote)",
    period: "",
    highlights: [
      "Implemented designs into working apps and reviewed them before implementation.",
      "Collaborated with backend to integrate APIs based on project documents.",
      "Initiated codebase using React.js, Sass, and Next.js for future use.",
      "Maintained the finished product and prioritized work efficiently.",
      "Worked independently and within a team to solve problems."
    ]
  }
];

const teaching = {
  role: "React.js Instructor",
  company: "Superprof.co.id (Remote)",
  period: "2022 - 2024",
  highlights: [
    "Taught fundamentals of React.js.",
    "Provided tasks and guidance to clients.",
    "Explained how to start a React.js project.",
    "Helped clients solve task problems."
  ]
};

const internship = {
  role: "Software Engineer Intern",
  company: "Dinas Pendidikan Sulawesi Selatan, Makassar",
  highlights: [
    "Designed software device solutions to solve client problems.",
    "Checked eligibility software prototypes.",
    "Modified existing codebases.",
    "Developed a mobile presence app.",
    "Initiated codebase using Kotlin and Firebase."
  ]
};

const education = [
  {
    degree: "Bachelor",
    school: "Hasanuddin University, Makassar"
  }
];

const projects = [
  {
    name: "Portfolio",
    description: "Personal portfolio showcasing responsive UI and frontend craft."
  }
];

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "tailwindcss",
  "sass",
  "zustand",
  "tanstack",
  "tanstackquery",
  "tanstackform",
  "googlemaps",
  "airtable",
  "webflow",
  "kotlin"
];

const slugSet = new Set(slugs);

const primarySkills = [
  { name: "HTML", slug: "html5", fallbackLabel: "HT" },
  { name: "CSS", slug: "css3", fallbackLabel: "CSS" },
  { name: "JavaScript", slug: "javascript" },
  { name: "React.js", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" }
].map((item) => ({ ...item, slug: slugSet.has(item.slug) ? item.slug : null }));

const secondarySkills = [
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Sass", slug: "sass" },
  { name: "Zustand", slug: "zustand", fallbackLabel: "Z" },
  { name: "TanStack Query", slug: "tanstack" },
  { name: "TanStack Form", slug: "tanstack" },
  { name: "REST API Integration", slug: null },
  { name: "Google Maps API", slug: "googlemaps" },
  { name: "Airtable API", slug: "airtable" },
  { name: "Webflow Components", slug: "webflow" },
  { name: "Kotlin", slug: "kotlin" },
  { name: "Firebase", slug: "firebase" }
].map((item) => (item.slug && !slugSet.has(item.slug) ? { ...item, slug: null } : item));

const iconCloudSlugs = Array.from(
  new Set(
    [...primarySkills, ...secondarySkills]
      .map((item) => item.slug)
      .filter((slug): slug is string => Boolean(slug))
  )
);


const typingTexts = [
  "Frontend - React & Next",
  "Responsive web UI"
];

const nameMorphs = ["Rizky Alfiansyah", "Frontend Developer"];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden px-6 pb-24 pt-10 lg:px-16">
      <Particles className="dark:opacity-40" />
      <Spotlight />
      <div className="mx-auto flex max-w-5xl flex-col md:gap-16 gap-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              <MorphingText
                texts={nameMorphs}
                className="whitespace-nowrap"
                intervalMs={4200}
                morphMs={5000}
                pauseMs={1000}
              />
            </h1>
            <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
              Denpasar, Bali - Available for remote collaborations
            </p>
          </div>
          <AnimatedThemeToggle />
        </header>

        <section className="grid md:gap-10 gap-6 max-md:flex flex-col-reverse md:grid-cols-[1.1fr_0.9fr]">
          <BlurFade>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                Building responsive, user-friendly web experiences with modern front-end stacks.
              </h2>
              <p className="max-w-[90vw] overflow-hidden text-[10px] uppercase tracking-[0.12em] text-muted-light dark:text-muted-dark sm:max-w-full sm:text-sm sm:tracking-[0.35em]">
                <TypingAnimation
                  texts={typingTexts}
                  className="whitespace-nowrap"
                  durationMs={2600}
                  pauseMs={1800}
                />
              </p>
              <p className="text-base leading-relaxed text-muted-light dark:text-muted-dark">
                A dedicated web developer specializing in interactive and responsive web applications using modern frontend technologies. Skilled in HTML, CSS, JavaScript, and React, I create user-friendly, visually appealing interfaces. Focused on efficiency and design, I deliver innovative solutions aligned with client needs and industry trends.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className="link"
                  href="/cv-rizky-alfiansyah.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={120}>
            <div className="relative max-lg:max-w-sm mx-auto">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-accent-light/15 via-transparent to-accent-light/10 blur-3xl dark:from-accent-dark/10 dark:to-accent-dark/10" />
              <div className="relative overflow-hidden aspect-[520/640] rounded-[32px] shadow-glow">
                <MorphingImage
                  sources={["/hero-portraits.png", "/hero-portraits-illustrations.png"]}
                  alt="Rizky Alfiansyah portrait"
                />
              </div>
            </div>
          </BlurFade>
        </section>

        <section className="section-grid" id="experience">
          <div>
            <p className="badge">Experience</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <BlurFade key={experience.company} delay={index * 80}>
                <div className="card space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-muted-light dark:text-muted-dark">
                      {experience.period || "Date not specified"}
                    </p>
                    <h4 className="mt-2 font-display text-xl font-semibold">
                      {experience.role}
                    </h4>
                    <p className="text-sm text-muted-light dark:text-muted-dark">
                      {experience.company}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-light dark:text-muted-dark">
                    {experience.highlights.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        <section className="section-grid" id="teaching">
          <div>
            <p className="badge">Teaching</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Instructor Role</h3>
          </div>
          <div className="card space-y-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-muted-light dark:text-muted-dark">
                {teaching.period}
              </p>
              <h4 className="mt-2 font-display text-xl font-semibold">
                {teaching.role}
              </h4>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                {teaching.company}
              </p>
            </div>
            <ul className="space-y-2 text-sm text-muted-light dark:text-muted-dark">
              {teaching.highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-grid" id="internship">
          <div>
            <p className="badge">Internship</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Professional Internship</h3>
          </div>
          <div className="card space-y-4">
            <div>
              <h4 className="font-display text-xl font-semibold">{internship.role}</h4>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                {internship.company}
              </p>
            </div>
            <ul className="space-y-2 text-sm text-muted-light dark:text-muted-dark">
              {internship.highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-grid" id="education">
          <div>
            <p className="badge">Education</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Academic Background</h3>
          </div>
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.school} className="card">
                <h4 className="font-display text-xl font-semibold">{item.degree}</h4>
                <p className="text-sm text-muted-light dark:text-muted-dark">
                  {item.school}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-grid" id="skills">
          <div>
            <p className="badge">Skills</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Core Stack</h3>
          </div>
          <div className="space-y-6">
            <div className="card space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-light dark:text-muted-dark">
                Core Stack
              </p>
              <div className="flex items-center justify-center rounded-2xl border border-line-light bg-white/60 p-6 shadow-sm dark:border-line-dark dark:bg-[#101312]/70">
                <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square">
                  <IconCloudTheme slugs={iconCloudSlugs} className="h-full w-full" />
                </div>
              </div>
            </div>
            <div className="card space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-light dark:text-muted-dark">
                Supporting
              </p>
              <div className="flex flex-wrap gap-2">
                {secondarySkills.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-full border border-line-light px-3 py-1 text-xs text-muted-light dark:border-line-dark dark:text-muted-dark"
                  >
                    <SkillIcon
                      name={item.name}
                      slug={item.slug}
                      size={16}
                      className="h-4 w-4"
                      fallbackLabel={item.fallbackLabel}
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-grid" id="projects">
          <div>
            <p className="badge">Projects</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Selected Work</h3>
          </div>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.name} className="card flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="font-display text-xl font-semibold">{project.name}</h4>
                  <p className="text-sm text-muted-light dark:text-muted-dark">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-grid" id="contact">
          <div>
            <p className="badge">Contact</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Let's Connect</h3>
          </div>
          <div>
            <ShineBorder>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-light dark:text-muted-dark">
                  Contact
                </p>
                <div className="space-y-3 text-sm">
                  <p className="font-medium">{contact.address}</p>
                  <p className="text-muted-light dark:text-muted-dark">{contact.phone}</p>
                  <p>
                    <a className="link" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </ShineBorder>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line-light pt-8 text-xs text-muted-light dark:border-line-dark dark:text-muted-dark">
          <p>(c) {new Date().getFullYear()} Rizky Alfiansyah. Crafted with Next.js.</p>
        </footer>
      </div>
    </main>
  );
}
