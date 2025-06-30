'';

import AnimateOnScroll from './AnimateOnScroll';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <AnimateOnScroll animation="fadeUp">
      <section className="bg-white/95 dark:bg-dark-card/95 backdrop-blur-lg rounded-3xl p-10 mb-8 shadow-xl dark:shadow-black/30 transition-colors duration-300">
        <h2 className="text-3xl mb-6 text-slate-800 dark:text-dark-text border-b-3 border-primary-light dark:border-dark-accent pb-3">
          Professional Experience
        </h2>
        {experienceData.map((item, index) => (
          <AnimateOnScroll 
            key={item.id} 
            className="mb-8 p-6 bg-slate-50 dark:bg-dark-highlight rounded-2xl border-l-4 border-primary-light dark:border-dark-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            animation="fadeUp"
            threshold={0.1 + (index * 0.05)}
          >
            <div className="flex justify-between items-start flex-wrap mb-4">
              <div>
                <div className="text-xl font-bold text-slate-800 dark:text-dark-text">{item.title}</div>
                <div className="text-primary-light dark:text-dark-accent font-semibold my-1">{item.company}</div>
              </div>
              <div className="text-slate-500 dark:text-dark-muted text-sm whitespace-nowrap">{item.date}</div>
            </div>
            <div>
              <ul className="ml-5 mt-3">
                {item.responsibilities.map((responsibility, index) => (
                  <li key={index} className="mb-2 text-slate-600 dark:text-dark-muted">{responsibility}</li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </section>
    </AnimateOnScroll>
  );
}
