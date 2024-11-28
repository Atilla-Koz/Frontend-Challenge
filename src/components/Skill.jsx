import { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Skill() {
  const { language } = useContext(LanguageContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Tablet ve küçük cihazlar
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Mobil cihazlar
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white dark:bg-dark pt-16">
      <h2 className="dark:text-darkSubTitle text-title font-semibold text-5xl leading-12 mb-8">
        {data[language].skillData.title}
      </h2>
      <Slider {...settings}>
        {data[language].skillData.skills.map((skill, index) => (
          <div key={index} className="p-4">
            <div className="skillsCard w-72 h-auto bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="dark:text-darkSubTitle font-medium text-customPurple1 text-2xl py-2">
                {skill.title}
              </h3>
              <p className="dark:text-darkFont text-gray-700 font-normal text-base">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <hr className="m-20 border border-line" />
    </section>
  );
}
