"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.scss";
import Link from "next/link";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",

        right: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",

        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

interface SliderProps {
  scrollToService: () => void; // Определение типа пропса для функции scrollToService
}

function MainSlider(props: SliderProps) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          bottom: "20px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        <div className={`${styles.PageSlider} ${styles.mainPageSliderOne}`}>
          <div className="container">
            <div className={styles.slider}>
              <p className={styles.sliderSubTitle}>
                Прокат спортивного инвентаря
              </p>
              <h1 className={styles.sliderTitle}>Веломан Ski</h1>
              <div>
                <a className={styles.sliderBtn} onClick={props.scrollToService}>
                  Наши услуги
                </a>
              </div>

              <p className={styles.desc}>
                Вам больше не придется раздумывать о том, как провести свои
                каникулы или выходные, потому что, попробовав один раз, вы не
                забудете это никогда!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.PageSlider} ${styles.mainPageSliderTwo}`}>
          <div className="container">
            <div className={styles.slider}>
              <p className={styles.sliderSubTitle}>
                Качественно и бережно обслужим ваш инвентарь
              </p>
              <h1 className={styles.sliderTitle}>Ремонт велосипедов</h1>
              <div>
                <p className={styles.desc}> - Cборка и исправление колес</p>
                <p className={styles.desc}> - Любая работа с трансмиссией</p>
                <p className={styles.desc}> - Настроим и обслужим тормоза</p>
                <p className={styles.desc}> - Обслужим подвеску</p>
                <p className={styles.desc}> - Любвые профилактические работы</p>
                <p className={styles.desc}> - Сборка кастомных проектов</p>
                <p className={styles.desc}> - и многое другое</p>
              </div>

              <div>
                <Link href="/repairBicycle" className={styles.sliderBtn}>
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.PageSlider} ${styles.mainPageSliderThree}`}>
          <div className="container">
            <div className={styles.slider}>
              <p className={styles.sliderSubTitle}>
                Мы подготовили для вас несколько интересных предложений
              </p>
              <h1 className={styles.sliderTitle}>АКЦИИ И СКИДКИ</h1>
              <div>
                <Link href="/sale" className={styles.sliderBtn}>
                  Подробнее
                </Link>
              </div>

              <p className={styles.desc}>
                Оставьте отзыв о работе нашей организации на яндекс.картах,
                google.maps или в сервисе 2ГИС и получите скидку 10 процентов
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default MainSlider;
