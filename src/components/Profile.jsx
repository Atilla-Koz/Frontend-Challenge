export default function Profile() {
  return (
    <div>
      <h2 className="profileTitle">Profile</h2>
      <section className="ProfileContainer">
        <div className="personInfo">
          <h3 className="InfoTitle">Profile</h3>
          <p className="InfoText">
            Doğum tarihi{' '}
            <span className="InfoTextData">&nbsp;&nbsp;&nbsp;20.10.1998</span>
          </p>
          <p className="InfoText">
            İkamet Şehir{' '}
            <span className="InfoTextData">
              &nbsp;&nbsp;&nbsp;&nbsp;Istanbul
            </span>
          </p>
          <p className="InfoText">
            Eğitim Durumu
            <span className="InfoTextData">Istanbul Kultur University</span>
          </p>
          <p className="InfoText">
            Tercih Ettiği Rol <span className="InfoTextData">Frontend</span>
          </p>
        </div>
        <div className="aboutMe">
          <h2 className="aboutTitle">About Me</h2>
          <span className="aboutMeTexts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </span>
        </div>
      </section>
      <hr className="skillsHr" />
    </div>
  );
}
