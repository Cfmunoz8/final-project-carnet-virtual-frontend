import React, { useContext } from "react";
import Header from "../components/Header";
import NavbarProfessional from "../components/NavbarProfessional";
import ProfileView from "../components/ProfileView";


function NewControl() {
  return (
    <div className="patient-list">
      <Header />
      <NavbarProfessional />
      <ProfileView />
    </div>
  );
}

export default NewControl;
