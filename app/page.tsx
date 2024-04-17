"use client";
import Slider from "./components/Slider";
import Link from "next/link";
import styles from "./page.module.scss";
import { Map } from "./components/Map";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const verticalAnimation = {
  hidden: {
    y: 70,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Home = () => {
  const scrollToService = () => {
    const serviceElement = document.querySelector(".service");
    if (serviceElement) {
      serviceElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main>
      <Slider scrollToService={scrollToService} />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="service"
      >
        <div className="container">
          <div className={styles.serviceContainer}>
            <motion.p custom={1} variants={textAnimation}>
              Наши услуги
            </motion.p>
            <motion.h2 custom={2} variants={textAnimation}>
              Летний Сезон
            </motion.h2>
            <div>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className={styles.services}
              >
                <motion.li
                  custom={1}
                  variants={verticalAnimation}
                  className={styles.serviceItems}
                >
                  <Link href="/bicycle">
                    <div className={`${styles.servicesLink} ${styles.imgOne}`}>
                      <p>Прокат Велосипедов</p>
                    </div>
                  </Link>
                </motion.li>
                <motion.li
                  custom={2}
                  variants={verticalAnimation}
                  className={styles.serviceItems}
                >
                  <Link href="/corporate">
                    <div className={`${styles.servicesLink} ${styles.imgTwo}`}>
                      <p>Корпоративным клиентам</p>
                    </div>
                  </Link>
                </motion.li>
                <motion.li
                  custom={3}
                  variants={verticalAnimation}
                  className={styles.serviceItems}
                >
                  <Link href="/sup">
                    <div
                      className={`${styles.servicesLink} ${styles.imgThree}`}
                    >
                      <p> Прокат Сапов</p>
                    </div>
                  </Link>
                </motion.li>
                <motion.li className={styles.serviceItemsBottom}>
                  <Link href="/clothes">
                    <div
                      className={`${styles.servicesLinkBottom} ${styles.imgFour}`}
                    >
                      <p>Одежда и Аксессуары</p>
                    </div>
                  </Link>
                </motion.li>
                <motion.li className={styles.serviceItemsBottom}>
                  <Link href="/repairBicycle">
                    <div
                      className={`${styles.servicesLinkBottom} ${styles.imgFive}`}
                    >
                      <p>Ремонт Велосипедов</p>
                    </div>
                  </Link>
                </motion.li>
                <motion.li className={styles.serviceItemsBottom}>
                  <Link href="/skiservice">
                    <div
                      className={`${styles.servicesLinkBottom} ${styles.imgSix}`}
                    >
                      <p>Ski Сервис</p>
                    </div>
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="info">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={styles.infoContainer}
          >
            <motion.h3 custom={1} variants={textAnimation}>
              Прокат сноубордов и горных лыж в Санкт-Петербурге.
            </motion.h3>
            <motion.p custom={2} variants={textAnimation}>
              Комплект сноуборд с ботинками всего за 700 рублей на весь день.
              Скидки при длительной аренде, с ценами можно ознакомится
              здесь.Большой выбор качественного фирменного инвентаря как для
              начинающих так и для опытных пользователей. Также в линейке
              ассортимента есть детское снаряжение.В нашем прокате широкий
              ассортимент горнолыжных и сноубордических ботинок (есть половинки
              размеров – для более точного подбора). Аксессуары, одежда, защита,
              экшн-камеры все это можно взять в одном месте.
            </motion.p>
            <motion.p custom={3} variants={textAnimation}>
              Перед каждой арендой производим проверку и настройку снаряжения по
              индивидуальным параметрам.Простые условия залога: можно оставить
              денежный залог или документ на выбор (Заграничный/Российский
              паспорт, Водительское удостоверение.) Со всеми новыми клиентами
              заключается договор проката. Для оформления, необходим паспорт. 
            </motion.p>
            <motion.p custom={4} variants={textAnimation}>
              <b>Работаем без обеда и выходных</b>
            </motion.p>
            <motion.p custom={5} variants={textAnimation}>
              <b>Пн-Пт с 10.00 до 22.00</b>
            </motion.p>
            <motion.p custom={6} variants={textAnimation}>
              <b>Сб-Вс с 09.00 до 23.00</b>
            </motion.p>
            <motion.p custom={7} variants={textAnimation}>
              Адрес салона проката ул. Планерная 24.Б. В нашем прокате вы
              можете забронировать необходимое количество инвентаря на нужные
              вам даты
            </motion.p>
            <motion.h3 custom={7} variants={textAnimation}>
              Прокат велосипедов
            </motion.h3>
            <motion.p custom={7} variants={textAnimation}>
              Новенькие велосипеды 2021-2022 года с колесами 27 радиуса и мягкой
              вилкой, сделают ваше катание комфортным, а дисковые тормоза
              позволят вам остановиться, даже в самых экстремальных ситуациях.
              Городские и горные велосипеды всего 300 рублей за час, 850 рублей
              за сутки! Для удобства наших клиентов, мы предоставляем большой
              выбор аксессуаров. Шлема, держатели для телефона, смягчающие
              накладные сидушки, детские кресла, вы можете взять с велосипедами
              совершенно бесплатно! Более подробно с ценами можно ознакомиться
              здесь.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <section className="map">
        <div style={{ marginBottom: "-10px" }}>
          <Map />
        </div>
      </section>
    </main>
  );
};

export default Home;
