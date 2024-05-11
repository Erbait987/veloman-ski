import React from "react";
import styles from "../styles/styles.module.scss";

const Sale = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Акции и скидки</h2>
            <div className={styles.choiceTop}>
              <div>
                <p>Мы подготовили для вас несколько интересных предложений</p>
                <p>Дети - наше все!</p>
                <p>
                  Ежедневная скидка на прокат инвентаря 10%. В акции участвуют
                  дети ростом до 140 см включительно
                </p>
                <p>Скидка распространяется на прокат не превышающих 2 суток</p>
                <p>
                  Студенческие будни С пн-пт арендуйте инвентарь со скидкой 15%.
                  Акция действует при предъявлении действующего студенческого
                  билета. Согласно с условиями, инвентарь можно взять не более
                  чем на сутки
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sale;
