import React, { useContext } from "react";
import Header from "../components/Header";
import NavbarProfessional from "../components/NavbarProfessional";
import PatientList from "../components/PatientList";
import { CgProfile } from "react-icons/cg";

function PatientListProfessional() {
  return (
    <div className="patient-list">
      <Header />
      <NavbarProfessional />
      <PatientList />
    </div>
  );
}

export default PatientListProfessional;
