import React from "react";
import "../styles/Contact.css";
import banner from "../assets/banner.png";

export const Contact = () => {
  return (
    <div className="Contact">
      <div
        className="imageDiv"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="FormDiv">
        <h1
          style={{
            textAlign: "start",
            fontSize: "50px",
            fontFamily: "monospace",
          }}
        >
          Bizimle İletişime Geçin
        </h1>
        <form className="Form">
          <label style={{ textAlign: "start", marginBottom: "20px" }}>
            Ad Soyad
          </label>
          <input
            className="input"
            style={{ marginBottom: "20px", padding: "5px" }}
            type="text"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          ></input>
          <label style={{ textAlign: "start", marginBottom: "20px" }}>
            E-mail
          </label>
          <input
            className="input"
            style={{ marginBottom: "20px" }}
            type="text"
            placeholder="Lütfen e-mailinizi giriniz..."
          ></input>
          <label style={{ textAlign: "start", marginBottom: "20px" }}>
            Mesajınız
          </label>
          <textarea
            className="input"
            rows={5}
            placeholder="Lütfen mesajınızı giriniz..."
          ></textarea>
          <button className="button">Gönder</button>
        </form>
      </div>
    </div>
  );
};
