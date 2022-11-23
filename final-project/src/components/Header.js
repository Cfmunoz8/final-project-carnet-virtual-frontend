import React from "react";
import { FaUserNurse } from "react-icons/fa";

function Header() {
  return (
    <div className="d-flex posicion-relative" style={{ background: "rgb(85, 186, 212)" }}>
      <h1>
        <FaUserNurse />
      </h1>
      <h2 className="position-absolute top-0 start-50 translate-middle-x pt-2">Carnet Virtual</h2>
    </div>
  );
}

export default Header;
