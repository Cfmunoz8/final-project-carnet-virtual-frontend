import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pathology from "../components/Pathology";
import Drugs from "../components/Drugs";
import { Link } from "react-router-dom";
import NewControlModal from "./NewControlModal";
import ControlHistory from "./ControlHistory";

function ScrollClinicalRecord() {
  return (
    <div className="container-fuid bg-light">
      <nav id="navbar-example2" className="navbar bg-light px-3 mb-3 mt-5">
        <a className="navbar-brand" href="#">
          Ficha Clínica
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              Antecedentes Mórbidos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Historial de Controles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading3">
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
        className="scrollspy-example bg-light p-3 rounded-2"
        tabindex="0"
      ></div>
      <h4 id="scrollspyHeading1">Antecedentes Mórbidos</h4>
      <Pathology />
      <h4 id="scrollspyHeading2">Historial de Controles</h4> <ControlHistory />
      <h4 id="scrollspyHeading3">Tratamiento Farmacológico</h4>
      <Drugs />
    </div>
  );
}

export default ScrollClinicalRecord;
