import React from "react";
import styles from "../styles/styles.module.scss";
import { FormTelegram } from "../components/FormTelegram";

const Corporate = () => {
  return (
    <>
      <section style={{ marginBottom: 90 }}>
        <div className="container">
          <div className={styles.choice}>
            <h2>Корпоративные клиенты</h2>
            <p style={{ textAlign: "center" }}>ОРГАНИЗОВАТЬ КОРПОРАТИВ</p>
            <div className={styles.choiceTop}>
              <div>
                <p>Планируете корпоратив? Мы поможем его организовать.</p>
                <p>
                  Массовые катания на горных лыжах, сноубордах, велосипедах и
                  многое другое, все это у нас есть!
                </p>
                <h5>Мы предоставляем следующие услуги:</h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>Доставка инвентаря до места катания</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Новый инвентарь, подобранные по вашим пожеланиям
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Возможность расчетов по безналу</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Опытные инструктора</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Бесплатный запасной инвентарь, на случай непредвиденных
                      ситуаций
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Несем ответственность за предоставляемые услуги точно в
                      срок
                    </span>
                  </li>
                </ul>
                <p>
                  Из года в год, мы участвуем в массовых мероприятиях (Лыжня
                  России, велозаезды, открытие и закрытие зимнего горнолыжного
                  сезона)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Почему выбирают нас?</h2>
            <div className={styles.choiceTop}>
              <div>
                <ul>
                  <li>
                    <span>&#9989;</span>
                    <span>Большой выбор инвентаря</span>
                  </li>
                  <li>
                    <span>&#9989;</span>
                    <span>Специальные оптовые цены</span>
                  </li>
                  <li>
                    <span>&#9989;</span>
                    <span>Надежность и пунктуальность</span>
                  </li>
                  <li>
                    <span>&#9989;</span>
                    <span>Только проверенные бренды</span>
                  </li>
                  <li>
                    <span>&#9989;</span>
                    <span>Максимально подстраиваемся под ваши пожелания</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ marginBottom: 80 }}>
        <FormTelegram />
      </section>
    </>
  );
};

export default Corporate;
