import { config } from '../config';

export default function Header() {
  const { name, title, contacts } = config;
  
  // Get initials for fallback if image doesn't load
  const initials = name.split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2);
    
  return (
    <header className="section-container text-center">
      {/* Floating Profile Image */}
      <div className="relative mb-8 inline-block animate-float">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-cyan-500/30 relative z-10">
          <img 
            src="/profile-photo.JPEG" 
            alt="Papa Yaw Badu - Professional Photo"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Fallback to initials if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div 
            className="w-full h-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-4xl font-bold text-white"
            style={{ display: 'none' }}
          >
            {initials}
          </div>
        </div>
        {/* Glowing ring effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-rose-500 blur-md opacity-30 animate-pulse"></div>
      </div>

      {/* Name and Title with Gradient */}
      <h1 className="gradient-text text-6xl font-bold mb-4 animate-fade-in">
        {name}
      </h1>
      <p className="text-2xl text-dark-300 mb-8 font-light animate-fade-in-delay">
        {title}
      </p>

      {/* Personal Introduction */}
      <div className="max-w-4xl mx-auto mb-12 animate-fade-in-delay-2">
        <p className="text-lg text-dark-300 leading-relaxed mb-6">
          Welcome to my professional portfolio! I'm a passionate Computer Science student at Ashesi University 
          with a strong foundation in software development, problem-solving, and ethical leadership. Currently seeking internship 
          opportunities to apply my technical skills and contribute to innovative projects.
        </p>
        <p className="text-base text-dark-400">
          I specialize in web development and database management. 
          I'm excited to bring my technical expertise and leadership experience to your team.
        </p>
      </div>

      {/* Modern Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-3">
        <a 
          href={`tel:${contacts.phone}`} 
          className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-2xl font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
        >
          <span className="flex items-center gap-3">
            <span className="text-xl">📞</span> Call Me
          </span>
        </a>
        <a 
          href={`mailto:${contacts.email}`} 
          className="group px-8 py-4 glass-effect border border-cyan-500/30 text-cyan-400 rounded-2xl font-medium hover:scale-105 transition-all duration-300 hover:bg-cyan-500/10"
        >
          <span className="flex items-center gap-3">
            <span className="text-xl">✉️</span> Email Me
          </span>
        </a>
        <a 
          href={contacts.linkedin} 
          className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-violet-600 text-white rounded-2xl font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span className="flex items-center gap-3">
            <span className="text-xl">💼</span> LinkedIn
          </span>
        </a>
      </div>
    </header>
  );
}
