"use client";
import client from "@/app/contentful";
import Link from "next/link";
import Image from "next/image";
import { ContactUs } from "../components/ContactUs";
import { Map } from "../components/Map";

import styles from "../styles/styles.module.scss";

export const getData = async () => {
  try {
    const res = await client.getEntries({
      content_type: "products",
      "sys.id": process.env.NEXT_PUBLIC_ENTRY_ID,
    });
    const items = res.items;
    return items;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return [];
  }
};

const Clothes = async () => {
  const items = await getData();

  return (
    <>
      <section>
        <div className="container">
          <div>
            <div className={styles.bicycleContainer}>
              <h2>Прокат одежды и аксессуаров</h2>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.winter} border="1">
                <thead>
                  <tr>
                    <th>Сутки</th>
                    <th>12ч</th>
                    <th>1 сутки</th>
                    <th>2 суток</th>
                    <th>3 суток</th>
                    <th>7 суток</th>
                    <th>30 суток</th>
                    <th>120 суток</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length === 0 ? (
                    <tr>
                      <td>Loading...</td>
                      <td>Loading...</td>
                    </tr>
                  ) : (
                    items.map((item, index) =>
                      item.fields.clothes.map((cloth, indexd) => (
                        <tr key={indexd}>
                          <td>{cloth.category}</td>
                          {cloth.prices.map((price, idx) => (
                            <td key={idx}>{price} ₽</td>
                          ))}
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
            <p className={styles.toAccs}>
              Также в нашем прокате есть вся необходимая амуниция и защита для
              катания
              <span>
                <Link href="/#"> Подробнее</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.drawUp}>
            <Image
              className={styles.drawUpImg}
              src="/svg/jacket-clothes-winter-svgrepo-com.svg"
              alt="Tubing"
              width={420}
              height={570}
            />
            <div className={styles.drawUpDocs}>
              <h3>Для аренды беговых лыж потребуется</h3>
              <div className={styles.drawUpFlex}>
                <Image
                  src="/svg/id-svgrepo-com.svg"
                  alt="IdImage"
                  width={105}
                  height={110}
                />
                <div>
                  <h4>Паспорт</h4>
                  <p>
                    Для составления договора проката нам будет нужен ваш паспорт
                  </p>
                </div>
              </div>
              <div className={styles.drawUpFlex}>
                <Image
                  src="/svg/wallet-svgrepo-com.svg"
                  alt="WalletImage"
                  width={105}
                  height={110}
                />
                <div>
                  <h4>Залог (1 из 2-ух вариантов)</h4>
                  <p>
                    Документ (паспорт РФ, загранпаспорт, водительское
                    удостоверение, военный билет)
                  </p>
                  <p>
                    Денежный залог (размер залога варьируется в зависимости от
                    арендуемого снаряжения)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ContactUs />
      </section>
      <section className="map">
        <div style={{ marginBottom: "-10px" }}>
          <Map />
        </div>
      </section>
    </>
  );
};

export default Clothes;
