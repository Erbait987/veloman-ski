"use client";
import React from "react";
import styles from "./recep.module.scss";
import { motion } from "framer-motion";

const textAnimationXm = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const textAnimationX = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const Recep = () => {
  return (
    <>
      <div className={styles.receptUs}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={styles.receptUsInfo}
          >
            <motion.h4 custom={1} variants={textAnimationXm}>
              Приемка инвентаря после проката
            </motion.h4>
            <div className={styles.borderL}></div>
            <motion.p custom={2} variants={textAnimationX}>
              Для того, что бы защитить наших клиентов от бракованных досок, мы
              в присутствие арендующих, проверяем целостность конструкции, при
              приемке инвентаря. Пожалуйста, заложите дополнительные 10-15 минут
              на возврат досок в прокат.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
