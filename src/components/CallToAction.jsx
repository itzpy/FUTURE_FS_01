import { config } from '../config';

export default function CallToAction() {
  const { contacts } = config;
  
  return (
    <section className="bg-gradient-to-r from-primary-light to-primary-dark dark:from-dark-accent dark:to-primary-dark text-white text-center p-10 rounded-3xl mt-10 mb-10">
      <h2 className="text-3xl mb-6 text-white">Let's Connect & Collaborate</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        I'm actively seeking internship opportunities where I can contribute my technical skills and continue learning. 
        Ready to bring fresh perspectives and dedication to your team!
      </p>
      
      <div className="flex justify-center gap-4 flex-wrap">
        {/* Download Resume */}
        <a 
          href="/Papa_Yaw_Badu_Resume.pdf" 
          download="Papa_Yaw_Badu_Resume.pdf"
          className="flex items-center gap-2 px-8 py-3 bg-white text-primary-light rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <span role="img" aria-label="download">📄</span>
          Download Resume
        </a>
        
        {/* Email */}
        <a 
          href={`mailto:${contacts.email}`} 
          className="flex items-center gap-2 px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-primary-light"
        >
          <span role="img" aria-label="email">✉️</span>
          Email Me
        </a>
        
        {/* LinkedIn */}
        <a 
          href={contacts.linkedin}
          className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white border-2 border-blue-600 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-blue-700" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="linkedin">💼</span>
          LinkedIn
        </a>
      </div>
      
      {/* Quick Stats */}
      <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-white/20">
        <div className="text-center">
          <div className="text-2xl font-bold">100+</div>
          <div className="text-sm opacity-90">Students Tutored</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">3+</div>
          <div className="text-sm opacity-90">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">5+</div>
          <div className="text-sm opacity-90">Technologies</div>
        </div>
      </div>
    </section>
  );
}
