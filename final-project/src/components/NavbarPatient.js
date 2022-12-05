import React, { useContext } from "react";
import Navbar from "./Navbar";
import { CgProfile } from "react-icons/cg";

function NavbarPatient() {
  return (
    <div className="navbar-professional mb-1">
      <Navbar
        item1="Resumen y Controles"
        link1="/patient-home"
        item2="Antecedentes"
        link2="/background"
        item3="Medicamentos"
        link3="/drugs"
        dropdown= "Mis controles"
        dropdownItem1 = "01/05/2022"
        dropdownLink1 = "/"
        dropdownItem2 = "02/04/2022"
        dropdownLink2 = "/"
      />
    </div>
  );
}

export default NavbarPatient;
