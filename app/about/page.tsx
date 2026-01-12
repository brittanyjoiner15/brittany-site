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
                Hi! I'm Britt, a developer and technology enthusiast passionate about
                building things that make a difference. I love exploring new technologies,
                solving complex problems, and sharing what I learn along the way.
              </p>
              <p>
                When I'm not building something or trying products, you can find me taking care of my camper, cuddling my cats, or playing games.
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
                I build custom automation solutions and consult with product training and best practices for tools in my Stack.
              </p>
              <p>
                I'm constantly trying out new productivity and automation tools to help me and others work smarter, not harder.
                Check out my <a href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">projects</a> and my <a href="/tools" className="text-blue-600 dark:text-blue-400 hover:underline">toolbox</a> to
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
                I'm a serial builder and lifelong learner. My journey in tech started with my first role out of college in Marketing Analytics where I learned product and marketing growth strategies with data driven appraoches.
              </p>
              <p>
                I got the itch to code when I started building my own automations in Zapier and other low code tools, which led to me becoming a developer and building tools with actual code.
              </p>
              <p>
                These days I bring it all together by creating solutions and solving business (and personal) problems with a mix of code, no-code, and low-code tools, and helping users effectively use and build their own solutions.
              </p>
            </div>
          </section>

          {/* Skills & Expertise
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              🎯 Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Development
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• React & Next.js</li>
                  <li>• TypeScript/Javascript</li>
                  <li>• Tailwind CSS</li>

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
          </section> */}

          {/* Let's Connect */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
            <p className="mb-6 opacity-90">
              I'm always open to interesting projects and collaborations.
            </p>
            <a
              href="mailto:brittanyjoiner15@gmail.com"
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
