import React, { useContext } from "react";
import Header from "../components/Header";
import NavbarProfessional from "../components/NavbarProfessional";
import ProfileView from "../components/ProfileView";
import NewControlRegistration from "../components/NewControlRegistration";

function NewControl() {
  return (
    <div className="patient-list">
      <Header />
      <NavbarProfessional />
      <div className="row">
        <div className="col-3">
          <ProfileView />
        </div>
        <div className="col-8">
          <NewControlRegistration />
        </div>
      </div>
    </div>
  );
}

export default NewControl;
