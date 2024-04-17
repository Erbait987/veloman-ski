import React from "react";
import BicyclesCarts from "../components/BicyclesCarts";
import client from "@/app/contentful";

export const getData = async () => {
  try {
    const res = await client.getEntries({
      content_type: "bicycleTovar",
      "sys.id": process.env.NEXT_PUBLIC_ENTRY_ID_BIKE,
    });
    const items = res.items;
    return items;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return [];
  }
};

const Bicycles = async () => {
  const items = await getData();

  return (
    <section>
      <div className="container">
        <div style={{ margin: "100px 0px" }}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "80px",
              }}
            >
              {item.fields.bicycles.map((item, id) =>
                item.bike.map((bike, bikeId) => (
                  <BicyclesCarts
                    bike={bike}
                    key={id.toString() + "-" + bikeId.toString()}
                  />
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bicycles;
