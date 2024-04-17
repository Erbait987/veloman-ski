import React from "react";
import client from "@/app/contentful";

export const getData = async () => {
  try {
    const res = await client.getEntries({
      content_type: "skiservice",
      "sys.id": process.env.NEXT_PUBLIC_ENTRY_ID_SKI,
    });
    const items = res.items;
    return items;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return [];
  }
};

const Skiservice = async () => {
  const items = await getData();

  return (
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
          Ski-service
        </h2>
        <p>КАЧЕСТВЕННО И БЕРЕЖНО ОБСЛУЖИМ ВАШ ИНВЕРТАРЬ!</p>
      </div>
      <table>
        <thead>
          <tr>
            <td>Плановое обслуживание лыж</td>
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
              item.fields.plan.map((plans, Index) => (
                <tr key={Index}>
                  <td>{plans.services}</td>
                  <td>{plans.price} ₽</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <td>Комплексное обслуживание​</td>
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
              item.fields.complex.map((complex, Index) => (
                <tr key={Index}>
                  <td>{complex.services}</td>
                  <td>{complex.price} ₽</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <td>Заточка</td>
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
              item.fields.sharpening.map((sharp, Index) => (
                <tr key={Index}>
                  <td>{sharp.services}</td>
                  <td>{sharp.price} ₽</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <td>Ремонт лыж и сноубордов</td>
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
              item.fields.repairSkiBoard.map((repair, Index) => (
                <tr key={Index}>
                  <td>{repair.services}</td>
                  <td>{repair.price} ₽</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <td>Дополнительно</td>
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
              item.fields.extra.map((extra, Index) => (
                <tr key={Index}>
                  <td>{extra.services}</td>
                  <td>{extra.price} ₽</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <td>Установка креплений на сноуборд</td>
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
              item.fields.InstallingBoard.map((board, Index) => (
                <tr key={Index}>
                  <td>{board.services}</td>
                  <td>{board.price} ₽</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <td>Установка креплений на лыжи</td>
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
              item.fields.InstallingSki.map((ski, Index) => (
                <tr key={Index}>
                  <td>{ski.services}</td>
                  <td>{ski.price} ₽</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Skiservice;
