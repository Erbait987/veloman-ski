"use client";
import client from "@/app/contentful";
import styles from "./repair.module.scss";

import { Map } from "../components/Map";
import { FormTelegram } from "../components/FormTelegram";
import { Notifications } from "@mantine/notifications";

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

const RepairBicycle = async () => {
  const items = await getData();
  return (
    <>
      <Notifications />
      <section>
        <div className="container">
          <div
            style={{
              margin: "40px 0 20px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
              }}
            >
              Ремонт велосипедов
            </h2>
            <p>КАЧЕСТВЕННО И БЕРЕЖНО ОБСЛУЖИМ ВАШ ВЕЛОСИПЕД!</p>
          </div>
          <div className={styles.price}>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>ВИЛКА</td>
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
                      item.fields.repairFork.map((fork, forkIndex) => (
                        <tr key={forkIndex}>
                          <td>{fork.name}</td>
                          <td>{fork.price}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>

            <div>
              <table>
                <thead>
                  <tr>
                    <td>КОЛЕСА</td>
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
                      item.fields.wheels.map((wheel, wheelIndex) => (
                        <tr key={wheelIndex}>
                          <td>{wheel.name}</td>
                          <td>{wheel.price}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>КОМПЛЕКСНЫЕ РАБОТЫ</td>
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
                      item.fields.complex.map((complex, complexIndex) => (
                        <tr key={complexIndex}>
                          <td>{complex.name}</td>
                          <td>{complex.price}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>МОЙКА ВЕЛОСИПЕДОВ/ ЧИСТКА КОМПОНЕНТОВ</td>
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
                      item.fields.washing.map((washing, washingIndex) => (
                        <tr key={washingIndex}>
                          <td>{washing.name}</td>
                          <td>{washing.price}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>РУЛЕВАЯ КОЛОНКА,РУЛЬ, СЕДЛО</td>
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
                      item.fields.steering.map((steering, steeringIndex) => (
                        <tr key={steeringIndex}>
                          <td>{steering.name}</td>
                          <td>{steering.price}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>СИСТЕМА ПЕРЕКЛЮЧЕНИЯ ПЕРЕДАЧ</td>
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
                      item.fields.gearShift.map((gearShift, gearShiftIndex) => (
                        <tr key={gearShiftIndex}>
                          <td>{gearShift.name}</td>
                          <td>{gearShift.price}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>СИСТЕМА ШАТУНОВ, КАРЕТКА, ПЕДАЛИ, ЦЕПЬ</td>
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
                      item.fields.rodSystem.map((rodSystem, rodSystemIndex) => (
                        <tr key={rodSystemIndex}>
                          <td>{rodSystem.name}</td>
                          <td>{rodSystem.price}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>ТОРМОЗНАЯ СИСТЕМА</td>
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
                      item.fields.brakeSystem.map(
                        (brakeSystem, brakeSystemIndex) => (
                          <tr key={brakeSystemIndex}>
                            <td>{brakeSystem.name}</td>
                            <td>{brakeSystem.price}</td>
                          </tr>
                        )
                      )
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>УСТАНОВКА ВЕЛОАКСЕССУАРОВ</td>
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
                      item.fields.bikeAcs.map((bikeAcs, bikeAcsIndex) => (
                        <tr key={bikeAcsIndex}>
                          <td>{bikeAcs.name}</td>
                          <td>{bikeAcs.price}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>ПРОЧИЕ РАБОТЫ</td>
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
                      item.fields.other.map((other, otherIndex) => (
                        <tr key={otherIndex}>
                          <td>{other.name}</td>
                          <td>{other.price}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section>
        <FormTelegram />
      </section>
      <section className="map">
        <div style={{ marginBottom: "-10px" }}>
          <Map />
        </div>
      </section>
    </>
  );
};

export default RepairBicycle;
