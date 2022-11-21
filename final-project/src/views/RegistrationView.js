import React, { useContext } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";


function RegistrationView() {
  return (
    <div className="">
      <Header />
      <div className="container">
      <RegistrationForm />
      </div>
      <div className="">
        <Link to='/' >
            <button className="btn btn-primary my-5 mx-auto"> Volver al Home </button>
        </Link>
      </div>
    </div>
  )
};

export default RegistrationView;