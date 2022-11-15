import React, { useContext } from "react";
import Navbar from "./Navbar";
import { CgProfile } from "react-icons/cg";

function NavbarPatient() {
  return (
    <div className="navbar-professional">
      <Navbar
        item1="Resumen y Controles"
        link1="/"
        item2="Antecedentes Ficha Clínica"
        link2="/"
        item3="Medicamentos"
        link3="/"
        dropdown= {<CgProfile />}
        dropdownItem1 = "Mi Perfil"
        dropdownLink1 = "/"
        dropdownItem2 = "Cerrar Sesión"
        dropdownLink2 = "/"
      />
    </div>
  );
}

export default NavbarPatient;
