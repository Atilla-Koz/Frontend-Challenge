import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mode from './components/Mode';
import Profile from './components/Profile';
import Projeckts from './components/Projeckts';
import Skill from './components/Skill';
import Footer from './components/footer';
import ContactForm from './components/ContactForm';

export default function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const profileRef = useRef(null); // Profile referansı

  return (
    <div className="bg-white dark:bg-dark">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <Mode />
        <Header
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          profileRef={profileRef} // Profile referansını gönder
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
