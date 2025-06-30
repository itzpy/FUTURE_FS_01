import { config } from '../config';

export default function Header() {
  const { name, title, contacts } = config;
  
  // Get initials for the profile image
  const initials = name.split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2);
    
  return (
    <header className="bg-white/95 dark:bg-dark-card/95 backdrop-blur-lg rounded-3xl p-10 text-center mb-8 shadow-xl dark:shadow-black/30 transition-colors duration-300">
      <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-br from-primary-light to-primary-dark dark:from-dark-accent dark:to-primary-dark mx-auto mb-5 flex items-center justify-center text-5xl font-bold text-white">
        {initials}
      </div>
      <h1 className="text-4xl mb-2 font-bold bg-gradient-to-r from-primary-light to-primary-dark dark:from-dark-accent dark:to-primary-dark bg-clip-text text-transparent">
        {name}
      </h1>
      <p className="text-lg mb-6 text-slate-600 dark:text-dark-muted">
        {title}
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a 
          href={`tel:${contacts.phone}`} 
          className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-dark-highlight rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          <span role="img" aria-label="phone">📞</span> {contacts.phone}
        </a>
        <a 
          href={`mailto:${contacts.email}`} 
          className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-dark-highlight rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          <span role="img" aria-label="email">✉️</span> {contacts.email}
        </a>
        <a 
          href={contacts.linkedin} 
          className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-dark-highlight rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="linkedin">🔗</span> LinkedIn Profile
        </a>
      </div>
    </header>  );
}
