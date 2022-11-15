import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pathology from "../components/Pathology";

function File() {
  return (
      <div className="conianer-fuid">
      <Pathology name="Patologias"/>
      <Pathology name="Cirugias"/>
      <Pathology name="Alergias"/>
      <Pathology name="Habitos"/>
      </div>
      
  );
}
 


export default File;