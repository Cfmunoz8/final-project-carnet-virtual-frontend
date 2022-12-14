import React from "react";
import icono2 from "../images/icono2.png";


function Footer() {
  return (
    <div className="p-3 border"
      style={{ background: "#e3f2fd" }}
    >
      <h1 className="text-center">
        <img className="text-center" src={icono2} alt="logo"/>
      </h1>
      <p className="text-center">Teléfono: +56984132713 - Email: info.micarnetvirtual@gmail.com
      </p>
    </div>
  );
}

export default Footer;
