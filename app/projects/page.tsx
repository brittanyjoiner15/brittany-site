import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "Project One",
    description: "A brief description of what this project does and the problem it solves. Highlight key features and technologies used.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Two",
    description: "Another exciting project showcasing your skills. Describe the impact, the challenges you faced, and what you learned.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
    link: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Three",
    description: "A third amazing project that demonstrates your expertise. Include metrics or results if available.",
    tech: ["Python", "FastAPI", "React", "AWS"],
    link: "https://github.com",
    demo: null,
  },
  {
    title: "Project Four",
    description: "Yet another impressive project in your portfolio. Focus on what makes this project unique or interesting.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "https://github.com",
    demo: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation />

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            A showcase of my work and the things I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Code →
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Want to Collaborate?</h2>
          <p className="mb-6 opacity-90">
            I'm always interested in working on exciting new projects.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-lg"
          >
            Let's Talk
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
