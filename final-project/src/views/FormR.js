import React, { useContext } from "react";
import Header from "../components/Header";
import RegistrationForm from "../components/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPresentation from "../components/NavbarPresentation";

function FormR() {
    return (
      <div className="">
        <Header />
        <NavbarPresentation/>
        <RegistrationForm />
      </div>
    );
  }
  
  export default FormR;