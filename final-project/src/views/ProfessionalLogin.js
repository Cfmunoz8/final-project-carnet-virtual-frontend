import React, { useContext } from "react";
import Header from "../components/Header";
import Login from "../components/LoginProfessional";
import NavbarPresentation from "../components/NavbarPresentation";
import Footer from "../components/Footer";

function ProfessionalLogin() {
  return (
    <div className=" ">
      <Header />
      <NavbarPresentation />
      <div className="d-flex container container-fluid">
        <Login />
        <img
          className="img img-fluid m-5"
          style={{width: "700px"}}
          src="https://img.freepik.com/vector-gratis/dibujos-animados-medicos-enfermeras-equipo_23-2148911253.jpg?w=2000"
        ></img>
      </div>

      <Footer />
    </div>
  );
}

export default ProfessionalLogin;
