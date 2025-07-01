import AnimateOnScroll from './AnimateOnScroll';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const getTechColor = (tech) => {
    const colors = {
      'React.js': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'JavaScript': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'PHP': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'MySQL': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'HTML': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'CSS': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Tailwind CSS': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
      'Research Methodology': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Data Analysis': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    };
    return colors[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  return (
    <AnimateOnScroll animation="fadeUp">
      <section className="bg-white/95 dark:bg-dark-card/95 backdrop-blur-lg rounded-3xl p-10 mb-8 shadow-xl dark:shadow-black/30 transition-colors duration-300">
        <div className="text-center mb-10">
          <h2 className="text-4xl mb-4 font-bold text-slate-800 dark:text-dark-text">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-dark-muted max-w-2xl mx-auto">
            Explore my recent projects showcasing web development, research, and technical skills
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {projectsData.map((project, index) => (
            <AnimateOnScroll 
              key={project.id} 
              animation="fadeUp" 
              threshold={0.1 + (index * 0.1)}
            >
              <div className="bg-white dark:bg-dark-highlight rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-dark-highlight">
                
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {project.status}
                    </span>
                    <span className="bg-white/90 dark:bg-dark-card/90 text-slate-700 dark:text-dark-text px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-dark-text mb-2">
                        {project.title}
                      </h3>
                      <p className="text-primary-light dark:text-dark-accent font-semibold">
                        {project.company}
                      </p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-dark-muted whitespace-nowrap">
                      {project.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-dark-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-700 dark:text-dark-text mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.details.slice(0, 4).map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-dark-muted">
                          <span className="text-primary-light dark:text-dark-accent mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-700 dark:text-dark-text mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-dark-muted/20">
                    {project.liveLink && project.liveLink !== '#' && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-light dark:bg-dark-accent text-white rounded-lg hover:bg-primary-dark dark:hover:bg-dark-accent/80 transition-colors duration-300 font-medium"
                      >
                        <span>🚀</span>
                        Live Demo
                      </a>
                    )}
            
                    {project.githubLink && project.githubLink !== 'https://github.com/itzpy' && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-dark-muted text-slate-700 dark:text-dark-text rounded-lg hover:bg-slate-50 dark:hover:bg-dark-highlight transition-colors duration-300 font-medium"
                      >
                        <span>📂</span>
                        View Code
                      </a>
                    )}
                    <button className="flex items-center gap-2 px-4 py-2 text-primary-light dark:text-dark-accent hover:bg-primary-light/10 dark:hover:bg-dark-accent/10 rounded-lg transition-colors duration-300 font-medium">
                      <span>📖</span>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/itzpy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-light to-primary-dark dark:from-dark-accent dark:to-primary-dark text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>🔗</span>
            View All Projects on GitHub
          </a>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
