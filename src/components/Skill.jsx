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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="custom-dots-container">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="bg-white dark:bg-dark pt-16 overflow-hidden">
      <h2 className="dark:text-darkSubTitle text-title font-semibold text-5xl leading-12 mb-8 text-center">
        {data[language].skillData.title}
      </h2>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {data[language].skillData.skills.map((skill, index) => (
            <div key={index} className="p-4">
              <div className="skillsCard mx-auto h-auto bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
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
      </div>
      <hr className="my-16 border-t border-line" />
    </section>
  );
}
