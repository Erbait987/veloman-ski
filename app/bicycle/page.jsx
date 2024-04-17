import client from "@/app/contentful";
import styles from "./bicycle.module.scss";
import Image from "next/image";
import { Map } from "../components/Map";
import { ContactUs } from "../components/ContactUs";

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

const Bicycle = async () => {
  const items = await getData();

  return (
    <>
      <section>
        <div className="container">
          <div className={styles.bicycleContainer}>
            <h2>Прокат Велосипедов в Санкт-Петербурге</h2>
            <p>
              У нас в прокат большой выбор велосипедов различных типов и
              размеров. Наши опытные специалисты помогут подобрать велосипед под
              ваши потребности, что бы катание принесло максимальное
              удовольствие
            </p>
          </div>

          <table>
            <thead>
              <tr>
                <td>Время проката</td>
                <td>Цена</td>
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
                  item.fields.bike.map((bike, bikeIndex) => (
                    <tr key={bikeIndex}>
                      <td>{bike.duration}</td>
                      <td>{bike.price}</td>
                    </tr>
                  ))
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.drawUp}>
            <Image
              className={styles.drawUpImg}
              src="/svg/bicycle-4-svgrepo-com.svg"
              alt="BicycleImage"
              width={420}
              height={570}
            />
            <div className={styles.drawUpDocs}>
              <h3>Для аренды велосипедов потребуется</h3>
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
                    1. Документ (паспорт РФ, загранпаспорт, водительское
                    удостоверение, военный билет). На 1 документ можно взять 2
                    велосипеда
                  </p>
                  <p>2. Денежный залог: 10 000 рублей за велосипед</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ContactUs />
      </section>

      <section>
        <div className="container">
          <div className={styles.advantages}>
            <div className={styles.advantagesTop}>
              <div className={styles.advantagesTopInfo}>
                <h4>Отличия нашего проката</h4>
                <p>Только новый инвентарь 2022 года</p>
                <p>
                  При прокате работает специализированный сервис, что позволяет
                  поддерживать наш инвентарь в идеальном состоянии
                </p>
                <p>
                  При аренде велосипеда Вы можете взять детское кресло, шлем,
                  замок, мягкую накладку на сиденье - совершенно бесплатно!
                </p>
                <p>Мы не берем деньги, за мелкие поломки</p>
                <h6 className={styles.advantagesTopPromotion}>
                  Вы можете арендовать велосипед на любой срок. Хотите дешевле?
                  Ознакомьтесь с нашими акциями
                </h6>
              </div>
              <Image
                className={styles.advantagesImg}
                src="/images/bikeInPage.jpg"
                alt="bikeImage"
                width={555}
                height={370}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div style={{ marginBottom: "-10px" }}>
          <Map />
        </div>
      </section>
    </>
  );
};

export default Bicycle;
