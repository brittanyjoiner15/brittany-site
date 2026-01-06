import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Get to know me a little better
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Who I Am */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              👋 Who I Am
            </h2>
            <div className="text-slate-600 dark:text-slate-300 space-y-4">
              <p>
                Hi! I'm Brittany, a developer and technology enthusiast passionate about
                building things that make a difference. I love exploring new technologies,
                solving complex problems, and sharing what I learn along the way.
              </p>
              <p>
                When I'm not coding, you can find me [add your interests here - reading,
                hiking, contributing to open source, etc.].
              </p>
            </div>
          </section>

          {/* What I Do */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              💼 What I Do
            </h2>
            <div className="text-slate-600 dark:text-slate-300 space-y-4">
              <p>
                I specialize in [your area of expertise - e.g., web development, full-stack
                engineering, frontend architecture]. My work focuses on creating intuitive,
                performant applications that users love.
              </p>
              <p>
                I'm experienced with modern technologies like React, Next.js, TypeScript,
                and more. Check out my <a href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">projects</a> to
                see what I've been working on.
              </p>
            </div>
          </section>

          {/* My Journey */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              🚀 My Journey
            </h2>
            <div className="text-slate-600 dark:text-slate-300 space-y-4">
              <p>
                [Share your story - how you got into tech, key milestones in your career,
                what drives you, memorable projects or experiences]
              </p>
              <p>
                My journey has taught me the importance of [values you hold - e.g.,
                continuous learning, collaboration, user-centered design, etc.].
              </p>
            </div>
          </section>

          {/* Skills & Expertise */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              🎯 Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Frontend
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Modern CSS & Animation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Tools & Practices
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Git & GitHub</li>
                  <li>• Agile Development</li>
                  <li>• Testing & QA</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Let's Connect */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
            <p className="mb-6 opacity-90">
              I'm always open to interesting projects and collaborations.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
