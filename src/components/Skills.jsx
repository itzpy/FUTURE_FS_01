'';

import AnimateOnScroll from './AnimateOnScroll';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <AnimateOnScroll animation="fadeUp">
      <section className="bg-white/95 dark:bg-dark-card/95 backdrop-blur-lg rounded-3xl p-10 mb-8 shadow-xl dark:shadow-black/30 transition-colors duration-300">
        <h2 className="text-3xl mb-6 text-slate-800 dark:text-dark-text border-b-3 border-primary-light dark:border-dark-accent pb-3">
          Technical Skills & Competencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((category, index) => (
            <AnimateOnScroll 
              key={category.id} 
              className="bg-slate-50 dark:bg-dark-highlight p-6 rounded-2xl border-l-4 border-primary-light dark:border-dark-accent"
              animation="fadeUp"
              threshold={0.1 + (index * 0.05)}
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-dark-text mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-gradient-to-r from-primary-light to-primary-dark dark:from-dark-accent dark:to-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </AnimateOnScroll>
  );
}
