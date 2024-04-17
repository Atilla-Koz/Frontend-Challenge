import Header from './components/Header';
import Hero from './components/Hero';
import Mode from './components/Mode';
import Profile from './components/Profile';
import Projeckts from './components/Projeckts';
import Skill from './components/Skill';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-black  ">
      <Mode />
      <Header />
      <Hero />
      <Skill />
      <Profile />
      <Projeckts />
      <Footer />
    </div>
  );
}
