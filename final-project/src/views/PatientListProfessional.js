import React, { useContext } from "react";
import Header from "../components/Header";
import NavbarProfessional from "../components/NavbarProfessional";
import PatientList from "../components/PatientList";
import Footer from "../components/Footer";


function PatientListProfessional() {
  return (
    <div className="patient-list">
      <Header />
      <NavbarProfessional />
      <PatientList />
      <Footer/>
    </div>
  );
}

export default PatientListProfessional;

