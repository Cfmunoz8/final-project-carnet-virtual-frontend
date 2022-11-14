import React, { useContext } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PatientList from "../components/PatientList";
import { CgProfile } from "react-icons/cg";

function PatientListProfessional() {
  return (
    <div className="patient-list">
      <Header />
      <Navbar
        item1="Pacientes"
        link1="/patient-list"
        item2="Ficha"
        link2="/"
        item3="Nueva Atención"
        link3="/"
        dropdown= {<CgProfile />}
        dropdownItem1 = "Mi Perfil"
        dropdownLink1 = "/"
        dropdownItem2 = "Cerrar Sesión"
        dropdownLink2 = "/"
      />
      <PatientList />
    </div>
  );
}

export default PatientListProfessional;
