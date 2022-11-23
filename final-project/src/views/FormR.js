import React, { useContext } from "react";
import Header from "../components/Header";
import RegistrationForm from "../components/Registration";
import "bootstrap/dist/css/bootstrap.min.css";

function FormR() {
    return (
      <div className="">
        <Header />
        <RegistrationForm />
      </div>
    );
  }
  
  export default FormR;