import React from "react";
import icono1 from "../images/icono1.png";
import icono2 from "../images/icono2.png";
import icono3 from "../images/icono3.png";

function Header() {
  return (
    <div className="p-2 border"
      style={{ background: "#e3f2fd" }}
    >
      <h1 className="text-center">
        <img src={icono3}></img>
      </h1>
    </div>
  );
}

export default Header;
