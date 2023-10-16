import "../styles/Menu.css";

function MenuItem({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div
        style={{ backgroundImage: `url(${image})`, marginTop: "30px" }}
      ></div>
      <h1 style={{ marginTop: "30px" }}>{name}</h1>
      <h6 style={{ marginTop: "30px", fontSize: "17px" }}>{content}</h6>
      <p style={{ color: "red", marginTop: "30px" }}>{price} TL</p>
    </div>
  );
}

export default MenuItem;
