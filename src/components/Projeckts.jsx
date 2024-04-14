import projecktImg from '../assets/Projeckts/projeckt.png';
export default function Projeckts() {
  return (
    <section>
      <h2 className="text-title  font-semibold text-5xl leading-12 w-1039 h-64 ml-left-5">
        Projeckts
      </h2>
      <div className="flex md:flex-row justify-around md:gap-20 ml-left-5 mr-right-5 text-title flex-col items-center gap-8 ">
        <div className="flex flex-col">
          <img
            className="md:w-300 md:h-180 w-full h-auto"
            src={projecktImg}
            alt="ProjecktC"
          />
          <h3 className="text-3xl text-customPurple1 font-medium py-2 items-center">
            Random Jokes
          </h3>
          <p className="text-sm font-normal text-customGray p-[5px] items-center">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible
          </p>
          <div className="flex md:flex-row p-[5px] gap-[5px] flex-col items-center">
            <p className="flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2">
              React
            </p>
            <p className="flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2">
              Redux
            </p>
            <p className="flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2">
              Axios
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <a
              className="text-base font-medium leading-6 text-customPurple  py-5 underline"
              href="https://github.com/Atilla-Koz"
            >
              GitHub
            </a>
            <a
              className="text-base font-medium leading-6 text-customPurple  py-5 underline"
              href="https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/"
            >
              linkedin
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            className="md:w-300 md:h-180 w-full h-auto"
            src={projecktImg}
            alt="ProjecktC"
          />
          <h3 className="text-3xl text-customPurple1 font-medium py-2 items-center">
            Random Jokes
          </h3>
          <p className="text-sm font-normal text-customGray">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible
          </p>
          <div className="flex md:flex-row p-[5px] gap-[5px] flex-col items-center">
            <p className="flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2">
              React
            </p>
            <p className="flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2">
              Redux
            </p>
            <p className="flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2">
              Axios
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <a
              className="text-base font-medium leading-6 text-customPurple  py-5 underline"
              href="https://github.com/Atilla-Koz"
            >
              GitHub
            </a>
            <a
              className="text-base font-medium leading-6 text-customPurple  py-5 underline"
              href="https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/"
            >
              linkedin
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            className="md:w-300 md:h-180 w-full h-auto"
            src={projecktImg}
            alt="ProjecktC"
          />
          <h3 className="text-3xl text-customPurple1 font-medium py-2 items-center">
            Random Jokes
          </h3>
          <p className="text-sm font-normal text-customGray">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible
          </p>
          <div className="flex md:flex-row p-[5px] gap-[5px] flex-col items-center">
            <p className="flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2">
              React
            </p>
            <p className="flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2">
              Redux
            </p>
            <p className="flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2">
              Axios
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <a
              className="text-base font-medium leading-6 text-customPurple  py-5 underline"
              href="https://github.com/Atilla-Koz"
            >
              GitHub
            </a>
            <a
              className="text-base font-medium leading-6 text-customPurple  py-5 underline"
              href="https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
