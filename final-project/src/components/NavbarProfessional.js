import React, { useContext } from "react";
import Navbar from "./Navbar";
import { CgProfile } from "react-icons/cg";

function NavbarProfessional() {
  return (
    <div className="navbar-professional">
      <Navbar
        item1="Pacientes"
        link1="/patient-list"
        item2="Ficha"
        link2="/"
        item3="Nueva Atención"
        link3="/Pathology"
        dropdown= {<CgProfile />}
        dropdownItem1 = "Mi Perfil"
        dropdownLink1 = "/"
        dropdownItem2 = "Cerrar Sesión"
        dropdownLink2 = "/"
      />
    </div>
  );
}

export default NavbarProfessional;
