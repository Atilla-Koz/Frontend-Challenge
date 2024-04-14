export default function Profile() {
  return (
    <div>
      <h2 className="text-title  font-semibold text-5xl leading-12 w-1039 h-64 ml-left-5">
        Profile
      </h2>
      <section className="flex md:flex-row justify-around gap-4 pl-5 pr-5  text-title  flex-col ">
        <div className="flex flex-col">
          <h3 className="text-3xl text-customPurple1 font-medium pb-2">
            Profile
          </h3>
          <p className="flex md:flex-row flex-col items-center font-semibold">
            Doğum tarihi{' '}
            <span className="font-normal ">&nbsp;&nbsp;&nbsp;20.10.1998</span>
          </p>
          <p className="flex md:flex-row flex-col items-center font-semibold">
            İkamet Şehir{' '}
            <span className="font-normal ">
              &nbsp;&nbsp;&nbsp;&nbsp;Istanbul
            </span>
          </p>
          <p className="flex md:flex-row flex-col items-center font-semibold">
            Eğitim Durumu
            <span className="font-normal ">Istanbul Kultur University</span>
          </p>
          <p className="flex md:flex-row flex-col items-center font-semibold">
            Tercih Ettiği Rol <span className="font-normal ">Frontend</span>
          </p>
        </div>
        <div className="aboutMe">
          <h2 className="text-3xl text-customPurple1 font-medium pb-2">
            About Me
          </h2>
          <span className="flex flex-col justify-around items-center">
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
      <hr className="m-20 border border-line" />
    </div>
  );
}
