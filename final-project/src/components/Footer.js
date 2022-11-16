import React from "react";
import { FaUserNurse } from "react-icons/fa";

function Footer() {
  return (
    <div className="d-flex posicion-relative" style={{ background: "rgb(85, 186, 212)" }}>
      <h1>
        <FaUserNurse />
      </h1>
      <h3 className="position-absolute start-50 translate-middle-x pt-2">Cesfam blabla</h3>
    </div>
  );
}

export default Footer;
