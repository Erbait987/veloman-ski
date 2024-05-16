import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <Link href="/">
            <Image src="/newlogo.png" width={180} height={90} alt="logo" />
          </Link>
          <div className={styles.footerItems}>
            <ul>
              <li>Прокат летнего инвентаря</li>
              <li>
                <Link className={styles.footerLink} href="/bicycle">
                  Велосипеды
                </Link>
              </li>
              <li>
                <Link className={styles.footerLink} href="/sup">
                  SUP-board
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerItems}>
            <ul>
              <li className={styles.footerItemsName}>
                Прокат зимнего инвентаря
              </li>
              <li>
                <Link className={styles.footerLink} href="/snowboard">
                  Сноуборды
                </Link>
              </li>
              <li>
                <Link className={styles.footerLink} href="/skiing">
                  Горные лыжи
                </Link>
              </li>
              <li>
                <Link className={styles.footerLink} href="/skicross">
                  Беговые лыжи
                </Link>
              </li>
              <li>
                <Link className={styles.footerLink} href="/clothes">
                  Одежда и аксессуары в прокат
                </Link>
              </li>
              <li>
                <Link className={styles.footerLink} href="/tubing">
                  Тюбинги
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerItems}>
            <ul>
              <li>
                <Link className={styles.footerLink} href="/skiservice">
                  Ski-service
                </Link>
              </li>
              <li>
                <Link className={styles.footerLink} href="/contacts">
                  Контакты
                </Link>
              </li>
              <li>
                <Link className={styles.footerLink} href="/repairBicycle">
                  Ремонт велосипедов
                </Link>
              </li>
              <li>
                <Link className={styles.footerLink} href="/sale">
                  Акции и скидки
                </Link>
              </li>
              <li>
                <Link className={styles.footerLink} href="/corporate">
                  Корпоративным клиентам
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerItems}>
            <ul>
              <li>
                <a className={styles.flex} href="tel:+79959887760">
                  <Image
                    src="/svg/telephone-signal-svgrepo-com.svg"
                    alt="Icon number"
                    width={20}
                    height={20}
                  />
                  +7 (995) 988-77-60
                </a>
              </li>
              <li>
                <a className={styles.flex} href="tel:+79118159974">
                  <Image
                    src="/svg/telephone-signal-svgrepo-com.svg"
                    alt="Icon number"
                    width={20}
                    height={20}
                  />
                  +7 (911) 815-99-74
                </a>
              </li>
              <li className={styles.flex}>
                <Image
                  src="/svg/map-pin-alt-svgrepo-com.svg"
                  alt="Map Icon"
                  width={20}
                  height={20}
                />
                <a href="https://yandex.ru/maps/-/CDbgiJ4c" target="blank">
                  Адрес: УЛ. Планерная 24.Б
                </a>
              </li>
              <li className={styles.flex}>
                <Image
                  src="/svg/time-svgrepo-com.svg"
                  alt="Icon clock"
                  width={20}
                  height={20}
                />
                пн-пт: 10:00 - 22:00
              </li>
              <li className={styles.flex}>
                <Image
                  src="/svg/time-svgrepo-com.svg"
                  alt="Icon clock"
                  width={20}
                  height={20}
                />
                сб-вс: 09:00 - 23:00
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerU}>
        <div className="container">
          <div className={styles.underFooter}>
            <span>© Все права защищены | Санкт-Петербург 2024 г.</span>
            <ul>
              <li>
                <a href="https://web.telegram.org/a/#2001557129" target="blank">
                  <Image
                    src="/svg/telegram.svg"
                    alt="Telegram icon"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li>
                <a href="https://wa.me/79959887760" target="blank">
                  <Image
                    src="/svg/whatsapp.svg"
                    alt="Whatsapp icon"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li>
                <a href="https://vk.com/id856406759" target="blank">
                  <Image
                    src="/svg/vk.svg"
                    alt="Vk icon"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
