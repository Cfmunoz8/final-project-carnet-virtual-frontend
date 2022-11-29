import React from "react";
import { Context } from "../store/context";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProfileView from "../components/ProfileView";
import PatientResume from "../components/PatientResume";
import { CgProfile } from "react-icons/cg";

function PatientHome() {
  return (
    <div>
      <Header />
      <Navbar
        header="Bienvenido, nombre apellido"
        dropdown={<CgProfile />}
        dropdownItem1="Mi Perfil"
        dropdownLink1="/"
        dropdownItem2="Cerrar Sesión"
        dropdownLink2="/"
      />
      <div className="row">
        <div className="col-3">
          <ProfileView />
        </div>
        <div className="col-9">
          <PatientResume 
          h1="Última Atención"
          div1="Fecha"
          text1="text 1"
          div2="Profesional"
          text2="text 2"
          div3="Indicaciones"
          text3="text 3"
          div4="Próximo Control"
          text4="text 4"
          />
        </div>
      </div>
    </div>
  );
}

export default PatientHome;
