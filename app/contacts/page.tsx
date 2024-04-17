import React from "react";
import { FormTelegram } from "../components/FormTelegram";
import { Notifications } from "@mantine/notifications";
import { Map } from "../components/Map";

const Contacts = () => {
  return (
    <>
      <Notifications />
      <FormTelegram />
      <section className="map">
        <div style={{ marginBottom: "-10px" }}>
          <Map />
        </div>
      </section>
    </>
  );
};

export default Contacts;
