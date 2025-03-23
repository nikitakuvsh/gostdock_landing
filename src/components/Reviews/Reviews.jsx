import React from "react";
import "./Reviews.css";
import quotesImage from "../../images/icons/quotes.svg";
import arrowPrevImage from "../../images/icons/arrow-prev.svg";
import arrowNextImage from "../../images/icons/arrow-next.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} reviews__arrow reviews__arrow--next`}
      onClick={onClick}
    >
      <img src={arrowNextImage} alt="Следующий" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} reviews__arrow reviews__arrow--prev`}
      onClick={onClick}
    >
      <img src={arrowPrevImage} alt="Следующий" />
    </button>
  );
};

const reviews = [
  {
    text: '1 карточка "ГОСТДОК стал для нас настоящим открытием! Возможность использовать LaTeX прямо в платформе позволила мне создавать сложные отчёты с точными формулами и графиками. Никаких проблем с форматированием, всё выглядит профессионально. за автоматическое обновление компонентов — это экономит массу времени!"',
    author: "Имя",
  },
  {
    text: '"ГОСТДОК стал для нас настоящим открытием! Возможность использовать LaTeX прямо в платформе позволила мне создавать сложные отчёты с точными формулами и графиками. Никаких проблем с форматированием, всё выглядит профессионально. за автоматическое обновление компонентов — это экономит массу времени!"',
    author: "Имя",
  },
  {
    text: '"ГОСТДОК стал для нас настоящим открытием! Возможность использовать LaTeX прямо в платформе позволила мне создавать сложные отчёты с точными формулами и графиками. Никаких проблем с форматированием, всё выглядит профессионально. за автоматическое обновление компонентов — это экономит массу времени!"',
    author: "Имя",
  },
  {
    text: '"ГОСТДОК стал для нас настоящим открытием! Возможность использовать LaTeX прямо в платформе позволила мне создавать сложные отчёты с точными формулами и графиками. Никаких проблем с форматированием, всё выглядит профессионально. за автоматическое обновление компонентов — это экономит массу времени!"',
    author: "Имя",
  },
  {
    text: '"ГОСТДОК стал для нас настоящим открытием! Возможность использовать LaTeX прямо в платформе позволила мне создавать сложные отчёты с точными формулами и графиками. Никаких проблем с форматированием, всё выглядит профессионально. за автоматическое обновление компонентов — это экономит массу времени!"',
    author: "Имя",
  },
];

export function Reviews() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = React.useRef(null);
  return (
    <div className="reviews">
      <h2 className="reviews__title">Почему это работает?</h2>
      <div className="reviews__arrows">
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
      <div className="reviews__container">
        <Slider ref={sliderRef} {...settings}>
            {reviews.map((review, index) => (
                <div key={index} className="reviews__item">
                    <img src={quotesImage} alt="Кавычки" className="reviews__image" />
                    <p className="reviews__text">{review.text}</p>
                    <p className="reviews__author">{review.author}</p>
                </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
