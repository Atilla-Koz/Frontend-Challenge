import img from '../assets/hero/image 1.png';
import git from '../assets/hero/github.png';
import linkedin from '../assets/hero/LinkedIn.png';

export default function Hero() {
  return (
    <div className="heroContainer">
      <section className="heroBot">
        <div className="heroText">
          <section className="heroContainerTitle">
            <h2 className="heroName">Atilla Köz</h2>
            <h1 className="heroTitle">Frontend Developer</h1>
          </section>
          <p className="heroP">
            Hi, I'm Almila. I'm a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let's shake hands with me.
          </p>
          <section className="heroButtonsContainer">
            <button className="heroButtonsHere">Hire Me</button>
            <a href="https://github.com/Atilla-Koz">
              <button className="heroButtons">
                <img className="gitIcon" src={git}></img>GitHub
              </button>
            </a>
            <a href="https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/">
              <button className="heroButtons">
                <img className="gitIcon" src={linkedin}></img>Linkdin
              </button>
            </a>
          </section>
        </div>
        <div className="heroImgContainer">
          <img className="heroImg" src={img} alt="hero" />
        </div>
      </section>
    </div>
  );
}
