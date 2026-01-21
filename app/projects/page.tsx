import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "Developer Relations | PixieBrix",
    description: "A platform that empowers users to customize their web experience by building and sharing browser extensions without code. I contributed to developer relations, creating resources and engaging with the community to foster growth.",
    tech: ["React", "Javascript", "Browser Extensions", "No-Code"],
    link: "https://www.pixiebrix.com/",
  },
  {
    title: "Founder | How I Trello",
    description: "Trello content and community management. I create engaging content, tutorials, and manage community interactions to enhance user experience and promote Trello's features, as well as support and promote developer ecosystem.",
    tech: ["Trello", "Express", "PostgreSQL", "Docker"],
    link: "https://trello.substack.com/",
  },
  {
    title: "Boreganizer",
    description: "An app for tracking chores and organizing household tasks. Built with a focus on simplicity and usability.",
    tech: ["Zite", "FastAPI", "React", "AWS"],
    link: "https://boreganizer.zite.so/",
  },
  {
    title: "Rate My Product",
    description: "Service for providing quality user feedback on your product. Helps businesses gather insights and improve their offerings with quick real product feedback.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "https://ratemyprod.com/",
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

              {/* Tech Stack Tags
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  See More →
                </a>
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
