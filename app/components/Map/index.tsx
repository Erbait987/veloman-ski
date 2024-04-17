export const Map = () => {
  return (
    <>
      <div
        style={{ textAlign: "center", marginTop: "80px", marginBottom: "40px" }}
        className="container"
      >
        <h2 style={{ fontSize: "50px", fontWeight: "bold", color: "#3D3D3D" }}>
          Адрес
        </h2>
        <p
          style={{
            fontSize: "20px",
            marginTop: "20px",
            color: "#595959",
            letterSpacing: "3.5px",
          }}
        >
          Где нас найти?
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124.65442181499276!2d30.235450317459076!3d60.007269500123016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469635035e0d74cf%3A0xce181f759cec272c!2z0JLQtdC70L7QvNCw0L0uINCf0YDQvtC60LDRgiDQuCDRgdC10YDQstC40YEg0YHQvdC-0YPQsdC-0YDQtNC-0LIv0LPQvtGA0L3Ri9GFINC70YvQti_QstC10LvQvtGB0LjQv9C10LTQvtCyINCyINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz0LUuINCg0LXQvNC-0L3RgiDQstC10LvQvtGB0LjQv9C10LTQvtCyLg!5e0!3m2!1sru!2skg!4v1711969509291!5m2!1sru!2skg"
        width="100%"
        height="600"
        loading="lazy"
        style={{ border: "0", margin: "0", padding: "0" }}
      ></iframe>
    </>
  );
};
