import Text from '../assets/header/A.png';
import Logo from '../assets/header/Ellipse 9.png';
import '../App.css';
export default function Header() {
  return (
    <header className="headerHeader">
      <section className="logoContainer">
        <img className="hLogo" src={Logo} alt="Logo" />
        <img className="hText" src={Text} alt="Text" />
      </section>
      <section className="hNav">
        <p>Skills</p>
        <p>Projeckts</p>
        <p>Hire me</p>
      </section>
    </header>
  );
}
