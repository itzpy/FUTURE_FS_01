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
      <div className="App">
        <ThemeToggle />
        <main className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <Header />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Leadership />
            <CallToAction />
            <footer className="text-center py-6 text-slate-500 dark:text-dark-muted text-sm">
              <p>&copy; {new Date().getFullYear()} - Created by Papa Yaw Badu with React and Tailwind CSS</p>
            </footer>
            <ScrollToTop />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
