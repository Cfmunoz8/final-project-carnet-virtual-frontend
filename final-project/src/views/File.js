import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pathology from "../components/Pathology";
import Header from "../components/Header";
import NavbarProfessional from "../components/NavbarProfessional";
import ProfileView from "../components/ProfileView";
import ScrollClinicalRecord from "../components/ScrollClinicalRecord";
import ProfileViewFromProfessional from "../components/ProfileViewFromProfessional";

function File() {
  return (
    <div className="container-fuid">
      <Header />
      <NavbarProfessional />
      <div className="row">
        <div className="col-3">
          <ProfileViewFromProfessional />
        </div>
        <div className="container fluid col-8">
          <ScrollClinicalRecord />
        </div>
      </div>
    </div>
  );
}

export default File;
