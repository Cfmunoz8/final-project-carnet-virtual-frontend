import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pathology from "../components/Pathology";
import Drugs from "../components/Drugs";
import { Link } from "react-router-dom";
import ControlHistory from "./ControlHistory";

function ScrollClinicalRecord() {
  return (
    <div className="container-fuid bg-light mt-5">
      <nav id="navbar-example2" className="navbar bg-light pe-5 ps-5 border">
        <a className="navbar-brand" href="#">
          Ficha Clínica
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#background">
              Antecedentes Mórbidos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#controls">
              Historial de Controles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#drugs">
              Tratamiento Farmacológico
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-light p-2 rounded-2 "
        tabindex="0"
      ></div>
      <h4 id="background" className="ms-5">Antecedentes Mórbidos</h4>
      <Pathology />
      <h4 id="controls" className="ms-5">Historial de Controles</h4> <ControlHistory />
      <h4 id="drugs" className="ms-5">Tratamiento Farmacológico</h4>
      <Drugs />
    </div>
  );
}

export default ScrollClinicalRecord;
