import React, { useContext } from "react";
import Header from "../components/Header";
import NavbarProfessional from "../components/NavbarProfessional";


function NewControl() {
  return (
    <div className="patient-list">
      <Header />
      <NavbarProfessional />
  <ProfileView />
  <NewControlRegistration />
    </div>
  );
}

export default NewControl;
