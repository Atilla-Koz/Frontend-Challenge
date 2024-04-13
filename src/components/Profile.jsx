export default function Profile() {
  return (
    <div>
      <h2 className="profileTitle">Profile</h2>
      <section className="ProfileContainer">
        <div className="personInfo">
          <h3 className="InfoTitle">Profile</h3>
          <p className="InfoText">
            Doğum tarihi <p className="InfoTextData">20.10.1998</p>
          </p>
          <p className="InfoText">
            İkamet Şehir
            <p className="InfoTextData">Istanbul</p>
          </p>
          <p className="InfoText">
            Eğitim Durumu
            <p className="InfoTextData"> Istanbul Kultur University</p>
          </p>
          <p className="InfoText">
            Tercih Ettiği Rol <p className="InfoTextData">Frontend</p>
          </p>
        </div>
      </section>
    </div>
  );
}
