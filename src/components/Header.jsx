import { config } from '../config';

export default function Header() {
  const { name, title, contacts } = config;
  
  // Get initials for fallback if image doesn't load
  const initials = name.split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2);
    
  return (
    <header className="bg-white/95 dark:bg-dark-card/95 backdrop-blur-lg rounded-3xl p-10 text-center mb-8 shadow-xl dark:shadow-black/30 transition-colors duration-300">
      {/* Professional Photo */}
      <div className="w-[180px] h-[180px] rounded-full mx-auto mb-8 overflow-hidden shadow-2xl border-4 border-white dark:border-dark-highlight">
        <img 
          src="/profile-photo.jpg" 
          alt="Papa Yaw Badu - Professional Photo"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            // Fallback to initials if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div 
          className="w-full h-full bg-gradient-to-br from-primary-light to-primary-dark dark:from-dark-accent dark:to-primary-dark flex items-center justify-center text-5xl font-bold text-white"
          style={{ display: 'none' }}
        >
          {initials}
        </div>
      </div>

      {/* Name and Title */}
      <h1 className="text-4xl mb-3 font-bold bg-gradient-to-r from-primary-light to-primary-dark dark:from-dark-accent dark:to-primary-dark bg-clip-text text-transparent">
        {name}
      </h1>
      <p className="text-xl mb-6 text-slate-600 dark:text-dark-muted font-medium">
        {title}
      </p>

      {/* Personal Introduction */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-lg text-slate-700 dark:text-dark-text leading-relaxed mb-4">
          Welcome to my professional portfolio! I'm a passionate Computer Science student at Ashesi University 
          with a strong foundation in software development and problem-solving. Currently seeking internship 
          opportunities to apply my technical skills and contribute to innovative projects.
        </p>
        <p className="text-base text-slate-600 dark:text-dark-muted">
          I specialize in web development, database management, and have experience in tutoring mathematics. 
          I'm excited to bring my technical expertise and leadership experience to your team.
        </p>
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a 
          href={`tel:${contacts.phone}`} 
          className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-light dark:bg-dark-accent text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
        >
          <span role="img" aria-label="phone">📞</span> Call Me
        </a>
        <a 
          href={`mailto:${contacts.email}`} 
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-dark-highlight text-primary-light dark:text-dark-accent border-2 border-primary-light dark:border-dark-accent rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
        >
          <span role="img" aria-label="email">✉️</span> Email Me
        </a>
        <a 
          href={contacts.linkedin} 
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="linkedin">�</span> LinkedIn
        </a>
      </div>
    </header>
  );
}
