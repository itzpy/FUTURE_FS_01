import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import CallToAction from './components/CallToAction';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="App bg-dark-950 text-dark-300 min-h-screen">
        <ThemeToggle />
        
        {/* Fixed Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-effect">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold gradient-text">PYB</div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="nav-link text-dark-400 hover:text-white font-medium">Home</a>
                <a href="#about" className="nav-link text-dark-400 hover:text-white font-medium">About</a>
                <a href="#education" className="nav-link text-dark-400 hover:text-white font-medium">Education</a>
                <a href="#experience" className="nav-link text-dark-400 hover:text-white font-medium">Experience</a>
                <a href="#projects" className="nav-link text-dark-400 hover:text-white font-medium">Projects</a>
                <a href="#skills" className="nav-link text-dark-400 hover:text-white font-medium">Skills</a>
                <a href="#contact" className="nav-link text-dark-400 hover:text-white font-medium">Contact</a>
              </div>
              <button className="md:hidden">
                <i className="fas fa-bars text-dark-400"></i>
              </button>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          <div className="max-w-7xl mx-auto">
            <section id="home">
              <Header />
            </section>
            <section id="about" className="py-20 px-6 bg-dark-900">
              <About />
            </section>
            <section id="education" className="py-20 px-6 bg-dark-950">
              <Education />
            </section>
            <section id="experience" className="py-20 px-6 bg-dark-900">
              <Experience />
            </section>
            <section id="projects" className="py-20 px-6 bg-dark-950">
              <Projects />
            </section>
            <section id="skills" className="py-20 px-6 bg-dark-900">
              <Skills />
            </section>
            <section id="leadership" className="py-20 px-6 bg-dark-950">
              <Leadership />
            </section>
            <section id="contact" className="py-20 px-6 bg-dark-900">
              <CallToAction />
            </section>
            
            <footer className="bg-dark-950 text-white py-12 px-6 border-t border-dark-800">
              <div className="max-w-6xl mx-auto text-center">
                <div className="text-3xl font-bold gradient-text mb-4">Papa Yaw Badu</div>
                <p className="text-dark-400 mb-8">Building digital experiences that matter</p>
                
                <div className="flex justify-center space-x-6 mb-8">
                  <a href="#" className="w-10 h-10 bg-dark-850 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 border border-dark-750">
                    <i className="fab fa-linkedin-in text-accent-cyan"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-dark-850 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 border border-dark-750">
                    <i className="fab fa-github text-dark-300"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-dark-850 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 border border-dark-750">
                    <i className="fas fa-envelope text-accent-rose"></i>
                  </a>
                </div>
                
                <div className="border-t border-dark-800 pt-8">
                  <p className="text-dark-400">&copy; {new Date().getFullYear()} - Created by Papa Yaw Badu with React and Tailwind CSS</p>
                </div>
              </div>
            </footer>
            
            <ScrollToTop />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
