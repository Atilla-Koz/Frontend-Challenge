import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mode from './components/Mode';
import Profile from './components/Profile';
import Projeckts from './components/Projeckts';
import Skill from './components/Skill';
import Footer from './components/footer';

export default function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="bg-white dark:bg-dark">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <Mode />
        <Header skillsRef={skillsRef} projectsRef={projectsRef} />
        <Hero />
        <div ref={skillsRef}>
          <Skill />
        </div>
        <Profile />
        <div ref={projectsRef}>
          <Projeckts />
        </div>
        <Footer />
      </div>
    </div>
  );
}
