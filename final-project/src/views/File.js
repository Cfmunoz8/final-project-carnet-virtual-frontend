import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pathology from "../components/Pathology";
import Header from "../components/Header";
import NavbarProfessional from "../components/NavbarProfessional";

function File() {
  return (
      <div className="conianer-fuid">
       <Header />
      <NavbarProfessional /> 
      <Pathology />
      </div>
      
  );
}

 


export default File;