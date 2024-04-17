"use client";
import React, { useState } from "react";
import { Modal } from "../Modal";
import Image from "next/image";
import styles from "./BicyclesCarts.module.scss";

const BicyclesCarts = ({ bike }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={styles.cartItems}>
        <h2 style={{ width: "250px", fontSize: "20px" }}>{bike.name}</h2>
        <Image
          style={{ objectFit: "contain" }}
          src={bike.image}
          alt="image"
          width={300}
          height={300}
        />
        <p>
          <strong>Цена: {bike.price} ₽</strong>
        </p>
        <p>{bike.stock}</p>
        <button className={styles.cartBtn} onClick={openModal}>
          Подробнее
        </button>
        {showModal && (
          <Modal onClose={closeModal}>
            <h2>{bike.name}</h2>
            <iframe
              src={bike.video}
              width="auto"
              height="auto"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <h3>Описание: </h3>
            <ul className={styles.cartItemsUl}>
              {bike.desc.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{bike.weight}</p>
            <p>Цвет: {bike.color}</p>
            <p>
              <b>Цена: {bike.price} ₽</b>
            </p>
            <a className={styles.cartItemsOrder} href="tel:+79959887760">
              Заказать
            </a>
          </Modal>
        )}
      </div>
    </>
  );
};

export default BicyclesCarts;
