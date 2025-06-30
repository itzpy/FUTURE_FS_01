'';

import { config } from '../config';

export default function CallToAction() {
  const { contacts } = config;
  
  return (
    <section className="bg-gradient-to-r from-primary-light to-primary-dark dark:from-dark-accent dark:to-primary-dark text-white text-center p-10 rounded-3xl mt-10 mb-10">
      <h2 className="text-3xl mb-6 text-white">Let's Connect</h2>
      <p className="text-lg mb-6">
        I'm actively seeking internship opportunities where I can contribute my technical skills and continue learning. Let's discuss how I can add value to your team!
      </p>
      <div className="flex justify-center gap-5 flex-wrap">
        <a 
          href={`mailto:${contacts.email}`} 
          className="px-8 py-3 bg-white text-primary-light rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          Email Me
        </a>
        <a 
          href={contacts.linkedin}
          className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View LinkedIn
        </a>
      </div>
    </section>
  );
}
