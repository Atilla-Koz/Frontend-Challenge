import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Projeckts from '../components/Projeckts';
import Skill from '../components/Skill';
import Footer from '../components/footer';
import ContactForm from '../components/ContactForm';

export default function SoftwarePortfolio() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const profileRef = useRef(null);

  return (
    <div className="bg-white dark:bg-[#0f0c1a]">
      {/* Back to home pill */}
      <Link
        to="/"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 glass-dark border border-violet-500/30 text-violet-300 hover:text-white hover:border-violet-400/60 rounded-full text-xs font-medium tracking-wide transition-all duration-300 hover:scale-105 shadow-lg"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Ana Sayfa
      </Link>

      <div className="container mx-auto max-w-screen-2xl px-4">
        <Header
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          profileRef={profileRef}
        />
        <Hero />
        <div ref={skillsRef}>
          <Skill />
        </div>
        <div ref={profileRef}>
          <Profile />
        </div>
        <div ref={projectsRef}>
          <Projeckts />
        </div>
        <div ref={contactRef}>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
