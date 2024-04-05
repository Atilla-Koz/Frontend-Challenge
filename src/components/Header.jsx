import Logo from '../assets/header/Ellipse 9.png';
import '../App.css';
export default function Header() {
  return (
    <div className="headerContainer">
      <img src={Logo} alt="Logo" />
      <p>Skills</p>
      <p>Projeckts</p>
      <p>Hire me</p>
    </div>
  );
}
