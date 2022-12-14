import React, { useContext } from "react";
import Header from "../components/Header";
import NavbarPresentation from "../components/NavbarPresentation";
import "bootstrap/dist/css/bootstrap.min.css";
import FormProfessional from "../components/FormProfessional";
import Footer from "../components/Footer";


function RegistrationProfessional() {
    return (
      <div className="">
        <Header />
        <NavbarPresentation />
        <FormProfessional />
        <Footer/>
      </div>
    );
  }
  
  export default RegistrationProfessional;