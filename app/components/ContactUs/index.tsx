import React from "react";
import styles from "./contactUs.module.scss";

export const ContactUs = () => {
  return (
    <>
      <div className={styles.contactUs}>
        <div className="container">
          <div className={styles.contactUsInfo}>
            <h4>
              В нашем прокате вы можете забронировать необходимый вам инвентарь:
            </h4>
            <div className={styles.borderL}></div>
            <a href="tel:+79959887760">Забронировать</a>
          </div>
        </div>
      </div>
    </>
  );
};
