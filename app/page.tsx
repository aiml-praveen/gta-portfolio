"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", value: 85 },
  { name: "Data Structures & Algorithms", value: 70 },
  { name: "Machine Learning", value: 80 },
  { name: "Deep Learning", value: 75 },
  { name: "SQL", value: 78 },
  { name: "Power BI", value: 70 },
  { name: "Cloud Computing", value: 65 },
];

const projects = [
  {
    title: "🔥 Fire & Smoke Detection System",
    description:
      "Real-time computer vision system for detecting fire and smoke from images and video with alert generation.",
    tech: "Python • OpenCV • Machine Learning",
    border: "border-red-500",
    titleColor: "text-red-400",
    shadow: "hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]",
  },
  {
    title: "📈 Tesla Stock Prediction",
    description:
      "Machine learning project for analyzing historical Tesla stock data and predicting future stock trends.",
    tech: "Python • Pandas • Machine Learning • Data Analysis",
    border: "border-green-500",
    titleColor: "text-green-400",
    shadow: "hover:shadow-[0_0_30px_rgba(0,255,0,0.5)]",
  },
  {
    title: "🤖 AI Interview Preparation Portal",
    description:
      "AI-powered interview platform that generates questions, evaluates student answers and provides feedback.",
    tech: "Python • AI • NLP • Streamlit",
    border: "border-yellow-500",
    titleColor: "text-yellow-400",
    shadow: "hover:shadow-[0_0_30px_rgba(255,255,0,0.5)]",
  },
  {
    title: "🚀 Agentic AI Chatbot",
    description:
      "Intelligent chatbot using Agentic AI concepts for decision-making, task handling and automation.",
    tech: "Python • GenAI • Agentic AI",
    border: "border-purple-500",
    titleColor: "text-purple-400",
    shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]",
  },
];

export default function Home() {
  return (
    <>
      {/* GTA LOADING INTRO */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-black"
      >
        <div className="text-center">
          <motion.h1
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-red-500 drop-shadow-[0_0_20px_red] sm:text-7xl"
          >
            D PRAVEEN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-4 text-lg font-bold tracking-[0.3em] text-green-400"
          >
            INITIALIZING PLAYER PROFILE...
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mx-auto mt-6 h-2 max-w-xs rounded-full bg-red-500 shadow-[0_0_15px_red]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="mt-4 text-sm text-gray-400"
          >
            PORTFOLIO LOADING...
          </motion.p>
        </div>
      </motion.div>

      {/* EXISTING PORTFOLIO */}
      <main className="min-h-screen scroll-smooth bg-black text-white">

   

    {/* Sidebar */}
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-72 overflow-y-auto border-r border-red-500 bg-black/95 p-6 backdrop-blur-md lg:block">
        <h1 className="mb-10 text-4xl font-bold text-red-500 drop-shadow-[0_0_20px_red]">
          PLAYER MENU
        </h1>

        <nav aria-label="Main navigation">
          <ul className="space-y-5 text-xl">
            {[
              ["HOME", "home"],
              ["ABOUT", "about"],
              ["SKILLS", "skills"],
              ["PROJECTS", "projects"],
              ["EXPERIENCE", "experience"],
              ["CONTACT", "contact"],
            ].map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="transition-colors hover:text-red-400"
                >
                  ▶ {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 rounded-xl border border-red-500 p-4 shadow-[0_0_20px_rgba(255,0,0,0.5)]">
          <h2 className="mb-4 text-2xl font-bold text-red-400">
            PLAYER INFO
          </h2>

          <p className="mb-2">👤 Name: D Praveen</p>
          <p className="mb-2">⭐ Level: 03</p>
          <p className="mb-3">🎯 XP: 4500 / 5000</p>

          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-800">
            <div className="h-3 w-[90%] rounded-full bg-green-500" />
          </div>

          <p className="mt-2 text-sm text-green-400">
            Mission Progress: 90%
          </p>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-72">
        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black px-6 py-20 md:px-10"
        >
        {/* Cinematic Background Glow */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.15, 0.3, 0.15],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-600 blur-[120px]"
  />

  <motion.div
    animate={{
      scale: [1.1, 1, 1.1],
      opacity: [0.08, 0.2, 0.08],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500 blur-[100px]"
  />
</div> 
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="mb-6">
                <Image
                  src="/gta1.png"
                  alt="GTA Logo"
                  width={300}
                  height={130}
                  priority
                  className="object-contain drop-shadow-[0_0_25px_rgba(255,0,0,0.8)]"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-4 text-lg font-semibold tracking-[0.3em] text-green-400"
              >
                PLAYER PROFILE
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl font-extrabold text-red-500 drop-shadow-[0_0_25px_red] sm:text-7xl md:text-8xl"
              >
                D PRAVEEN
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-4 text-2xl font-bold sm:text-3xl"
              >
                AI &amp; ML STUDENT
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-6 max-w-xl text-lg leading-8 text-gray-400"
              >
                Building AI, Machine Learning and Agentic AI solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="mt-8 max-w-md rounded-xl border border-green-500 bg-green-500/10 p-5 shadow-[0_0_25px_rgba(0,255,0,0.35)]"
              >
                <h3 className="text-2xl font-bold text-green-400">
                  MISSION PASSED
                </h3>

                <p>+ Portfolio Unlocked</p>
                <p>+100 XP</p>
            </motion.div> 
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-10 -z-10 rounded-full bg-red-500/20 blur-3xl" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/praveen-gta.png"
                alt="D Praveen GTA portfolio image"
                width={700}
                height={700}
                priority
                className="relative w-full max-w-xl rounded-2xl border-2 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.8)] transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="min-h-screen px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-10 text-4xl font-bold text-red-500 sm:text-5xl"
            >
              ABOUT ME
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-red-500 bg-zinc-900 p-8 shadow-[0_0_25px_rgba(255,0,0,0.25)]"
            >
              <p className="text-lg leading-9 text-gray-200 sm:text-xl">
                I am D Praveen, a B.Sc Artificial Intelligence and Machine
                Learning student from Sri Krishna Adithya College of Arts and
                Science under Bharathiar University. Passionate about AI,
                Machine Learning, Deep Learning and Agentic AI applications.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-green-500 p-4"
                >
                  🎓 Degree: B.Sc AI &amp; ML
                </motion.div>
                

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-blue-500 p-4"
                >
                  🏫 Sri Krishna Adithya College Of Arts and Science
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-red-500 p-4"
                >
                  💻 Python &amp; ML Developer
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-yellow-500 p-4"
                >
                  🚀 Agentic AI Enthusiast
                </motion.div>

              </div>
            </motion.div>

        </div>
      </section>

        {/* SKILLS */}
        <section id="skills" className="min-h-screen px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-10 text-4xl font-bold text-red-500 sm:text-5xl"
            >
              PLAYER SKILLS
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-7 rounded-2xl border border-red-500 bg-zinc-900 p-8 shadow-[0_0_30px_rgba(255,0,0,0.25)]"
            >
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between gap-4">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>

                  <div className="h-4 w-full overflow-hidden rounded-full bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-4 rounded-full bg-red-500 shadow-[0_0_12px_rgba(255,0,0,0.8)]"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="min-h-screen px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl rounded-2xl border border-cyan-500 bg-black/60 p-8 backdrop-blur-sm">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-8 text-4xl font-bold text-cyan-400 sm:text-5xl"
            >
              GTA MISSIONS
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={`rounded-xl border ${project.border} bg-zinc-900 p-6 transition-all duration-300 hover:border-yellow-400 ${project.shadow}`}
                >
                  <h3
                    className={`mb-4 text-2xl font-bold ${project.titleColor}`}
                  >
                    {project.title}
                  </h3>

                  <p className="mb-5 leading-7 text-gray-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-bold text-green-400">
                      🟢 COMPLETED
                    </span>

                    <a
                      href="#"
                      className="rounded-lg bg-red-500 px-4 py-2 text-sm font-bold transition hover:bg-red-600"
                    >
                      VIEW PROJECT
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="min-h-screen px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">
            <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-4xl font-bold text-red-500 sm:text-5xl"
        >
          CAREER MISSIONS
        </motion.h2>

            <div className="space-y-8">

  <motion.article
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    whileHover={{ scale: 1.02, x: 5 }}
    className="rounded-2xl border-l-8 border-green-500 bg-zinc-900 p-8 shadow-lg"
  >
    <h3 className="text-2xl font-bold text-green-400 sm:text-3xl">
      🏭 SAP AI Manufacturing
    </h3>

    <p className="mt-2 text-gray-400">
      GEM Equipment Pvt Ltd
    </p>

    <p className="mt-4 text-gray-200">
      Worked on AI applications in manufacturing, production
      planning and optimization.
    </p>
  </motion.article>

  <motion.article
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  whileHover={{ scale: 1.02, x: -5 }}
  className="rounded-2xl border-l-8 border-blue-500 bg-zinc-900 p-8 shadow-lg"
>
  <h3 className="text-2xl font-bold text-blue-400 sm:text-3xl">
    📊 SAP Data Analytics
  </h3>

  <p className="mt-2 text-gray-400">
    7Eleven Technologies
  </p>

  <p className="mt-4 text-gray-200">
    Worked with data models, analytical reporting and SAP Fiori
    Analytical Apps.
  </p>
</motion.article>

            </div>
          </div>
        </section>

        {/* CONTACT */}
<section id="contact" className="min-h-screen px-6 py-20 md:px-16">
  <div className="mx-auto max-w-6xl">

    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-10 text-4xl font-bold text-red-500 sm:text-5xl"
    >
      FINAL MISSION
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl border border-red-500 bg-zinc-900 p-8 shadow-[0_0_30px_rgba(255,0,0,0.3)] sm:p-10"
    >

      <motion.h3
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 text-3xl font-bold text-green-400"
      >
        📞 CONTACT DETAILS
      </motion.h3>

      <div className="space-y-4 text-lg sm:text-xl">

        <p>👤 D Praveen</p>

        <p>
          🎓 B.Sc Artificial Intelligence &amp; Machine Learning
        </p>

        <p>
          🏫 Sri Krishna Adithya College of Arts and Science
        </p>

        <a
          href="https://www.linkedin.com/in/praveen49aiml"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-400 transition hover:text-blue-300"
        >
          🔗 LinkedIn: linkedin.com/in/praveen49aiml
        </a>

        <a
          href="mailto:praveen49aiml@gmail.com"
          className="block text-yellow-400 transition hover:text-yellow-300"
        >
          📧 Email: praveen49aiml@gmail.com
        </a>
        <a
  href="tel:+91XXXXXXXXXX"
  className="block text-green-400 transition hover:text-green-300"
>
  📱 Phone: +91 79818 35421
</a>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <motion.a
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="inline-block rounded-lg bg-red-500 px-6 py-3 font-bold transition hover:bg-red-600"
                >
                  VIEW PROJECTS
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download
                  className="inline-block rounded-lg bg-green-500 px-6 py-3 font-bold transition hover:bg-green-600"
                >
                  DOWNLOAD RESUME
                </motion.a>

              </div>
            </motion.div>

            <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-20 text-center text-gray-400"
          >
            <p>🎮 GTA Portfolio - D Praveen</p>
            <p>Built with Next.js, Tailwind CSS &amp; Framer Motion</p>
            <p className="mt-2 font-bold text-red-400">
              MISSION COMPLETE ✓
            </p>
          </motion.footer>

          </div>
        </section>
      </div>
    </main>
    </>
  );
}