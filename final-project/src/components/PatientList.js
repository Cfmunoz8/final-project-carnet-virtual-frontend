import React from "react";
import { BiSearchAlt } from "react-icons/bi";

function PatientList() {
  return (
    <div className="container container-fluid">
      <form className="d-flex pt-2 pb-2" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Busque por nombre o rut del paciente"
          aria-label="Search"
        />
        <button className="btn btn-outline-secondary" type="submit">
          <BiSearchAlt />
        </button>
      </form>
      <div className="card">
        <div className="card-header">Pacientes</div>
        <ul className="list-group list-group-flush list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Pedro Fernández</div>
            </div>
            <span className="badge bg-primary rounded-pill">
              Fecha de último control:{"date"}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Arturo López</div>
            </div>
            <span className="badge bg-primary rounded-pill">
              Fecha de último control:{"date"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PatientList;
