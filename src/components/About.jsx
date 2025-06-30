
import AnimateOnScroll from './AnimateOnScroll';

export default function About() {
  return (
    <AnimateOnScroll animation="fadeUp">
      <section className="bg-white/95 dark:bg-dark-card/95 backdrop-blur-lg rounded-3xl p-10 mb-8 shadow-xl dark:shadow-black/30 transition-colors duration-300">
        <h2 className="text-3xl mb-8 text-slate-800 dark:text-dark-text border-b-3 border-primary-light dark:border-dark-accent pb-3">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Story */}
          <div>
            <h3 className="text-xl font-semibold text-slate-700 dark:text-dark-text mb-4">My Journey</h3>
            <p className="text-base text-slate-600 dark:text-dark-muted leading-relaxed mb-4">
              I'm a passionate Computer Science student at Ashesi University, currently in my third year. 
              My journey in technology began with a curiosity about how systems work and has evolved into 
              a deep commitment to creating solutions that make a difference.
            </p>
            <p className="text-base text-slate-600 dark:text-dark-muted leading-relaxed">
              Beyond coding, I serve as a Mathematics Tutor, helping over 100 students excel in their 
              studies. This role has strengthened my communication skills and ability to break down 
              complex concepts into understandable parts.
            </p>
          </div>

          {/* What I Do */}
          <div>
            <h3 className="text-xl font-semibold text-slate-700 dark:text-dark-text mb-4">What I Do</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary-light dark:text-dark-accent text-xl">💻</span>
                <div>
                  <h4 className="font-medium text-slate-700 dark:text-dark-text">Web Development</h4>
                  <p className="text-sm text-slate-600 dark:text-dark-muted">Creating responsive, user-friendly web applications using modern technologies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-primary-light dark:text-dark-accent text-xl">🗄️</span>
                <div>
                  <h4 className="font-medium text-slate-700 dark:text-dark-text">Database Management</h4>
                  <p className="text-sm text-slate-600 dark:text-dark-muted">Designing and managing efficient database systems for optimal performance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-primary-light dark:text-dark-accent text-xl">🎓</span>
                <div>
                  <h4 className="font-medium text-slate-700 dark:text-dark-text">Mathematics Tutoring</h4>
                  <p className="text-sm text-slate-600 dark:text-dark-muted">Teaching and mentoring students to achieve academic excellence</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-primary-light dark:text-dark-accent text-xl">🏆</span>
                <div>
                  <h4 className="font-medium text-slate-700 dark:text-dark-text">Leadership</h4>
                  <p className="text-sm text-slate-600 dark:text-dark-muted">Leading initiatives and managing teams in various academic and professional settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goals and Aspirations */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary-light/10 to-primary-dark/10 dark:from-dark-accent/20 dark:to-primary-dark/20 rounded-2xl">
          <h3 className="text-xl font-semibold text-slate-700 dark:text-dark-text mb-3">Looking Forward</h3>
          <p className="text-base text-slate-600 dark:text-dark-muted leading-relaxed">
            I'm actively seeking internship opportunities where I can contribute my technical skills, 
            learn from experienced professionals, and work on meaningful projects that create real-world impact. 
            My goal is to combine my technical expertise with my passion for problem-solving to build 
            innovative solutions in the tech industry.
          </p>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
