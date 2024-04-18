import React from "react";
import styles from "./recep.module.scss";

export const Recep = () => {
  return (
    <>
      <div className={styles.receptUs}>
        <div className="container">
          <div className={styles.receptUsInfo}>
            <h4>Приемка инвентаря после проката</h4>
            <div className={styles.borderL}></div>
            <p>
              Для того, что бы защитить наших клиентов от бракованных досок, мы
              в присутствие арендующих, проверяем целостность конструкции, при
              приемке инвентаря. Пожалуйста, заложите дополнительные 10-15 минут
              на возврат досок в прокат.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
