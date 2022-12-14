import React from "react";
import { Context } from "../store/context";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProfileView from "../components/ProfileView";
import PatientResume from "../components/PatientResume";
import { CgProfile } from "react-icons/cg";
import DrugList from "../components/DrugList";
import Footer from "../components/Footer";


function PatientHome() {
  return (
    <div>
      <Header />
      <Navbar
        header="Bienvenido/a,"
        dropdown= {<CgProfile />}
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
          <DrugList />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PatientHome;
