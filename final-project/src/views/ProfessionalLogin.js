import React, { useContext } from "react";
import Header from "../components/Header";
import Login from "../components/LoginProfessional";
import NavbarPresentation from "../components/NavbarPresentation";

function ProfessionalLogin() {
  return (
    <div className=" ">
     <Header />
     <NavbarPresentation/>
     <Login />
    </div>
  );
}

export default ProfessionalLogin;