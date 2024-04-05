import Footer from './components/Foother';
import Header from './components/Header';
import SectionBot from './components/SectionBot';
import SectionMid from './components/SectionMid';
import SectionTop from './components/SectionTop';

export default function App() {
  return (
    <div>
      <Header />
      <SectionTop />
      <SectionMid />
      <SectionBot />
      <Footer />
    </div>
  );
}
