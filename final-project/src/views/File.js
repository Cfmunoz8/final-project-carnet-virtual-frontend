import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pathology from "../components/Pathology";
import Header from "../components/Header";
import NavbarProfessional from "../components/NavbarProfessional";
import ProfileView from "../components/ProfileView";

function File() {
  return (
      <div className="conianer-fuid">
       <Header />
      <NavbarProfessional /> 
      <div className="row">
      <div className="col-3">
      <ProfileView />
      </div>
      <div className="container fluid col-8">
      <Pathology />
      </div>
      </div>
      </div>
      
  );
}

 


export default File;