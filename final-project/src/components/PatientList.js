import React from "react";
import { BiSearchAlt } from "react-icons/bi";

function PatientList() {
  return (
    <div className="container container-fluid">
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
                Cambiar estado del paciente
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div class="input-group mb-3">
                <p>
                  Para cambiar el estado de un paciente a fallecido debes
                  agregar el certificado de defunción.
                </p>
                <input type="file" class="form-control" id="inputGroupFile02" />
                <label class="input-group-text" for="inputGroupFile02">
                  Cargar
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
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
              <div className="fw-bold">Rut</div>
            </div>
            <div>
              <div>
                <span className="badge bg-primary rounded-pill">
                  Fecha de último control:{"date"}
                </span>
              </div>
              <div>
                <span
                  className="badge bg-success rounded-pill"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {"vivo"}
                </span>
              </div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Arturo Lopez</div>
              <div className="fw-bold">Rut</div>
            </div>
            <div>
              <div>
                <span className="badge bg-primary rounded-pill">
                  Fecha de último control:{"date"}
                </span>
              </div>
              <div>
                <span
                  className="badge bg-danger rounded-pill"
                >
                  {"fallecido"}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PatientList;
