import React from "react";
import { Data } from "../helpers/Data";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

export const Menu = () => {
  return (
    <div className="Menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              content={menuItem.content}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};
