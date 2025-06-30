'';

import AnimateOnScroll from './AnimateOnScroll';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <AnimateOnScroll animation="fadeUp">
      <section className="bg-white/95 dark:bg-dark-card/95 backdrop-blur-lg rounded-3xl p-10 mb-8 shadow-xl dark:shadow-black/30 transition-colors duration-300">
        <h2 className="text-3xl mb-6 text-slate-800 dark:text-dark-text border-b-3 border-primary-light dark:border-dark-accent pb-3">
          Key Projects
        </h2>
        {projectsData.map((project, index) => (
          <AnimateOnScroll 
            key={project.id} 
            className="mb-8 p-6 bg-slate-50 dark:bg-dark-highlight rounded-2xl border-l-4 border-primary-light dark:border-dark-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            animation="fadeUp" 
            threshold={0.1 + (index * 0.05)}
          >
            <div className="flex justify-between items-start flex-wrap mb-4">
              <div>
                <div className="text-xl font-bold text-slate-800 dark:text-dark-text">{project.title}</div>
                <div className="text-primary-light dark:text-dark-accent font-semibold my-1">{project.company}</div>
              </div>
              <div className="text-slate-500 dark:text-dark-muted text-sm whitespace-nowrap">{project.date}</div>
            </div>
            
            <div>
              <ul className="ml-5 mt-3">
                {project.details.map((detail, index) => (
                  <li key={index} className="mb-2 text-slate-600 dark:text-dark-muted">{detail}</li>
                ))}
              </ul>
            </div>
            
            {project.technologies && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-primary-light/15 dark:bg-dark-accent/25 text-primary-light dark:text-dark-accent text-xs px-3 py-1 rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </AnimateOnScroll>
        ))}
      </section>
    </AnimateOnScroll>
  );
}
