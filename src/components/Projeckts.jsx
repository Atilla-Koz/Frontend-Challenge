import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data.jsx';
import AnimatedSection from './AnimatedSection';

const techColors = {
  React: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  'Next.js': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  TypeScript: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Node.js': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  MongoDB: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Redux: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'Tailwind': 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
  'Tailwind CSS': 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
  'Material-UI': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
  Express: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
  Axios: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  'AI/ML': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
};

function TechBadge({ tech }) {
  const cls = techColors[tech] || 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300';
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${cls}`}>
      {tech}
    </span>
  );
}

export default function Projeckts() {
  const { language } = useContext(LanguageContext);
  const projects = data[language].projecktsData;

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-dark">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-violet-100 dark:bg-violet-900/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 dark:bg-amber-900/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-4">
              {language === 'tr' ? 'Neler yaptım?' : 'What I built'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple dark:text-white">
              {data[language].projectTitle}
            </h2>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-violet-600 to-amber-500 rounded-full mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 80} direction="up">
              <div className="group relative flex flex-col h-full rounded-3xl overflow-hidden
                bg-white dark:bg-gray-800/60
                border border-gray-100 dark:border-violet-500/20
                shadow-sm hover:shadow-2xl hover:shadow-violet-500/15
                transition-all duration-400 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass text-white text-sm font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </a>
                  </div>

                  {/* Top gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent group-hover:from-violet-900/10 transition-all duration-300 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <TechBadge key={i} tech={tech} />
                    ))}
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="mt-20 h-px bg-gradient-to-r from-transparent via-violet-200 dark:via-violet-800/30 to-transparent" />
    </section>
  );
}
