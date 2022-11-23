import React, { useContext } from "react";
import Header from "../components/Header";
import NavbarProfessional from "../components/NavbarProfessional";
import PatientList from "../components/PatientList";

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

