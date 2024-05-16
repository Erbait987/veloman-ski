"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isSummerDropdownOpen, setIsSummerDropdownOpen] = useState(false);
  const [isWinterDropdownOpen, setIsWinterDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const togleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      menuRef.current &&
      !(menuRef.current as Node).contains(event.target as Node)
    ) {
      setIsOpen(false);
      document.body.classList.remove("menu-open");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <ul className={styles.headerInfo}>
          <li className={styles.headerInfoIcon}>
            <Image
              src="/svg/telephone-signal-svgrepo-com.svg"
              alt="icon"
              width={20}
              height={20}
            ></Image>
            <a href="tel:+79959887760">+7 (995) 988-77-60</a>
          </li>
          <li className={styles.headerInfoIcon}>
            <Image
              src="/svg/telephone-signal-svgrepo-com.svg"
              alt="icon"
              width={20}
              height={20}
            ></Image>
            <a href="tel:+79118159974">+7 (911) 815-99-74</a>
          </li>
          <li className={styles.headerInfoIcon}>
            <Image
              src="/svg/time-svgrepo-com.svg"
              alt="icon"
              width={20}
              height={20}
            ></Image>
            пн-пт: 10:00 - 22:00
          </li>
          <li className={styles.headerInfoIcon}>
            <Image
              src="/svg/time-svgrepo-com.svg"
              alt="icon"
              width={20}
              height={20}
            ></Image>
            сб-вс: 09:00 - 23:00
          </li>
          <li className={styles.headerInfoIcon}>
            <Image
              src="/svg/map-pin-alt-svgrepo-com.svg"
              alt="icon"
              width={20}
              height={20}
            ></Image>
            <a href="https://yandex.ru/maps/-/CDbgiJ4c" target="blank">
              Адрес: УЛ. Планерная 24.Б
            </a>
          </li>
        </ul>
      </div>

      <div className="container">
        <nav className={styles.nav} ref={menuRef}>
          <ul>
            <li>
              <Link href="/">
                <Image src="/newlogo.png" alt="icon" width={180} height={90} />
              </Link>
            </li>
          </ul>
          <ul className={`${styles.navItems} ${isOpen ? styles.active : ""}`}>
            <li
              className={styles.dropdownContainer}
              onMouseEnter={() => setIsSummerDropdownOpen(true)}
              onMouseLeave={() => setIsSummerDropdownOpen(false)}
            >
              Летний сезон &#9660;
              {isSummerDropdownOpen && (
                <ul className={styles.dropdownContent}>
                  <li>
                    <Image
                      className={styles.dropdownImage}
                      src="/svg/bicycle-4-svgrepo-com.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link
                      className={styles.dropdownLink}
                      href="/bicycle"
                      onClick={togleOpen}
                    >
                      Прокат велосипедов
                    </Link>
                  </li>
                  <li>
                    <Image
                      className={styles.dropdownImage}
                      src="/svg/bicycle-4-svgrepo-com.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link
                      className={styles.dropdownLink}
                      href="/bicycles"
                      onClick={togleOpen}
                    >
                      Покупка велосипедов
                    </Link>
                  </li>
                  <li>
                    <Image
                      className={styles.dropdownImage}
                      src="/svg/supboard.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link
                      className={styles.dropdownLink}
                      href="/sup"
                      onClick={togleOpen}
                    >
                      Прокат SUP-бордов
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={styles.dropdownContainer}
              onMouseEnter={() => setIsWinterDropdownOpen(true)}
              onMouseLeave={() => setIsWinterDropdownOpen(false)}
            >
              Зимний сезон &#9660;
              {isWinterDropdownOpen && (
                <ul className={styles.dropdownContent}>
                  <li>
                    <Image
                      className={styles.dropdownImage}
                      src="/svg/ski-stick-man-svgrepo-com.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link
                      className={styles.dropdownLink}
                      href="/skiing"
                      onClick={togleOpen}
                    >
                      Прокат горных лыж
                    </Link>
                  </li>
                  <li>
                    <Image
                      className={styles.dropdownImage}
                      src="/svg/ski-svgrepo-com.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link
                      className={styles.dropdownLink}
                      href="/skicross"
                      onClick={togleOpen}
                    >
                      Прокат беговых лыж
                    </Link>
                  </li>
                  <li>
                    <Image
                      className={styles.dropdownImage}
                      src="/svg/snowboard-silhouette-svgrepo-com.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link
                      className={styles.dropdownLink}
                      href="/snowboard"
                      onClick={togleOpen}
                    >
                      Прокат сноубордов
                    </Link>
                  </li>
                  <li>
                    <Image
                      className={styles.dropdownImage}
                      src="/svg/tubing-svgrepo-com.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link
                      className={styles.dropdownLink}
                      href="/tubing"
                      onClick={togleOpen}
                    >
                      Прокат тюбингов
                    </Link>
                  </li>
                  <li>
                    <Image
                      className={styles.dropdownImage}
                      src="/svg/jacket-clothes-winter-svgrepo-com.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link
                      className={styles.dropdownLink}
                      href="/clothes"
                      onClick={togleOpen}
                    >
                      Одежда и аксессуары
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                className={styles.navLink}
                href="/skiservice"
                onClick={togleOpen}
              >
                SkiСервис
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                href="/repairBicycle"
                onClick={togleOpen}
              >
                Ремонт велосипедов
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                href="/contacts"
                onClick={togleOpen}
              >
                Контакты
              </Link>
            </li>
          </ul>
          <div className={styles.burgerMenu}>
            <button onClick={togleOpen} className={styles.burgerButton}>
              <span className={isOpen ? styles.lineOpen : styles.line}></span>
              <span className={isOpen ? styles.lineOpen : styles.line}></span>
              <span className={isOpen ? styles.lineOpen : styles.line}></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
