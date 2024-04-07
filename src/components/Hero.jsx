import img from '../assets/hero/image 1.png';

export default function Hero() {
  return (
    <div className="heroContainer">
      <section className="heroContainerTitle">
        <h2 className="heroName">Atilla Köz</h2>
        <h1>Frontend Developer</h1>
      </section>
      <section className="heroBot">
        <div className="heroText">
          <p>
            Hi, I'm Almila. I'm a full-stack developer. If you are looking for a
          </p>
          <p>
            Developer who to craft solid and scalable frontend products with
          </p>
          <p>great user experiences. Let's shake hands with me.</p>
          <section className="heroButtons">
            <button>Hire Me</button>
            <button>Git Hub</button>
            <button>Linkdin</button>
          </section>
        </div>
        <div className="heroImg">
          # <img src={img} alt="hero" />
        </div>
      </section>
    </div>
  );
}
