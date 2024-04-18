"use client";
import Slider from "./components/Slider";
import Link from "next/link";
import styles from "./page.module.scss";
import { Map } from "./components/Map";

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
      <section className="service">
        <div className="container">
          <div className={styles.serviceContainer}>
            <p>Наши услуги</p>
            <h2>Летний Сезон</h2>
            <div>
              <ul className={styles.services}>
                <li className={styles.serviceItems}>
                  <Link href="/bicycle">
                    <div className={`${styles.servicesLink} ${styles.imgOne}`}>
                      <p>Прокат </p>
                      <p>Велосипедов</p>
                    </div>
                  </Link>
                </li>
                <li className={styles.serviceItems}>
                  <Link href="/corporate">
                    <div className={`${styles.servicesLink} ${styles.imgTwo}`}>
                      <p>Корпоративным </p>
                      <p>клиентам</p>
                    </div>
                  </Link>
                </li>
                <li className={styles.serviceItems}>
                  <Link href="/sup">
                    <div
                      className={`${styles.servicesLink} ${styles.imgThree}`}
                    >
                      <p> Прокат</p>
                      <p> Сапов</p>
                    </div>
                  </Link>
                </li>
                <li className={styles.serviceItemsBottom}>
                  <Link href="/clothes">
                    <div
                      className={`${styles.servicesLinkBottom} ${styles.imgFour}`}
                    >
                      <p>Одежда </p>
                      <p>и Аксессуары</p>
                    </div>
                  </Link>
                </li>
                <li className={styles.serviceItemsBottom}>
                  <Link href="/repairBicycle">
                    <div
                      className={`${styles.servicesLinkBottom} ${styles.imgFive}`}
                    >
                      <p>Ремонт </p>
                      <p>Велосипедов</p>
                    </div>
                  </Link>
                </li>
                <li className={styles.serviceItemsBottom}>
                  <Link href="/skiservice">
                    <div
                      className={`${styles.servicesLinkBottom} ${styles.imgSix}`}
                    >
                      <p>Ski </p>
                      <p>Сервис</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="info">
        <div className="container">
          <div className={styles.infoContainer}>
            <h3>Прокат сноубордов и горных лыж в Санкт-Петербурге.</h3>
            <p>
              Комплект сноуборд с ботинками всего за 700 рублей на весь день.
              Скидки при длительной аренде, с ценами можно ознакомится
              здесь.Большой выбор качественного фирменного инвентаря как для
              начинающих так и для опытных пользователей. Также в линейке
              ассортимента есть детское снаряжение.В нашем прокате широкий
              ассортимент горнолыжных и сноубордических ботинок (есть половинки
              размеров – для более точного подбора). Аксессуары, одежда, защита,
              экшн-камеры все это можно взять в одном месте.
            </p>
            <p>
              Перед каждой арендой производим проверку и настройку снаряжения по
              индивидуальным параметрам.Простые условия залога: можно оставить
              денежный залог или документ на выбор (Заграничный/Российский
              паспорт, Водительское удостоверение.) Со всеми новыми клиентами
              заключается договор проката. Для оформления, необходим паспорт. 
            </p>
            <p>
              <b>Работаем без обеда и выходных</b>
            </p>
            <p>
              <b>Пн-Пт с 10.00 до 22.00</b>
            </p>
            <p>
              <b>Сб-Вс с 09.00 до 23.00</b>
            </p>
            <p>
              Адрес салона проката ул. Планерная 24.Б. В нашем прокате вы
              можете забронировать необходимое количество инвентаря на нужные
              вам даты
            </p>
            <h3>Прокат велосипедов</h3>
            <p>
              Новенькие велосипеды 2021-2022 года с колесами 27 радиуса и мягкой
              вилкой, сделают ваше катание комфортным, а дисковые тормоза
              позволят вам остановиться, даже в самых экстремальных ситуациях.
              Городские и горные велосипеды всего 300 рублей за час, 850 рублей
              за сутки! Для удобства наших клиентов, мы предоставляем большой
              выбор аксессуаров. Шлема, держатели для телефона, смягчающие
              накладные сидушки, детские кресла, вы можете взять с велосипедами
              совершенно бесплатно! Более подробно с ценами можно ознакомиться
              здесь.
            </p>
          </div>
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
