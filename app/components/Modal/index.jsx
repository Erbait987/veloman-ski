import React from "react";
import styles from "./modal.module.scss";
import Image from "next/image";

export const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper} onClick={onClose}>
        <div className={styles.modalContent}>
          <button onClick={onClose} className={styles.modalCloseButton}>
            <Image
              src="/svg/close.svg"
              alt="close-button"
              width={25}
              height={25}
            />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
