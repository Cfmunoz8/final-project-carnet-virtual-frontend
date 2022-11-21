import React, { useContext } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import { Link, useParams } from "react-router-dom";


function LoginView() {
  return (
    <div className="patient-list">
      <Header />
      <Login />

      <div className="container">
        <div className="text-center">
          <Link to='/' >
            <button className="btn btn-primary my-5 "> Volver al Home </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default LoginView;