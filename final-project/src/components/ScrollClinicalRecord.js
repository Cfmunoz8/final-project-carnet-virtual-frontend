import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pathology from "../components/Pathology";
import Drugs from "../components/Drugs";
import { Link } from "react-router-dom";
import NewControlModal from "./NewControlModal";

function ScrollClinicalRecord() {
  return (
    <div className="container-fuid">
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
      >
        <div className="float-end">
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Registrar Nueva Atención
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Nuevo Control
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <NewControlModal />
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
        <h4 id="scrollspyHeading1">Antecedentes Mórbidos</h4>
        <Pathology />
        <h4 id="scrollspyHeading2">Tratamiento Farmacológico</h4>
        <Drugs />
      </div>
    </div>
  );
}

export default ScrollClinicalRecord;
