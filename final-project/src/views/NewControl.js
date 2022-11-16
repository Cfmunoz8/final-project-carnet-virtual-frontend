import React, { useContext } from "react";
import Header from "../components/Header";
import NavbarProfessional from "../components/NavbarProfessional";
import NewControlRegistration from "../components/NewControlRegistration";


function NewControl() {
  return (
    <div className="patient-list">
      <Header />
      <NavbarProfessional />
      <NewControlRegistration />
    </div>
  );
}

export default NewControl;
