"use client";
import React from "react";
import styles from "./contactUs.module.scss";
import { motion } from "framer-motion";

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

export const ContactUs = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        className={styles.contactUs}
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className="container">
          <div className={styles.contactUsInfo}>
            <motion.h4 variants={textAnimationXm}>
              В нашем прокате вы можете забронировать необходимый вам инвентарь:
            </motion.h4>
            <div className={styles.borderL}></div>
            <motion.a
              custom={1}
              variants={textAnimationX}
              href="tel:+79959887760"
            >
              Забронировать
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
