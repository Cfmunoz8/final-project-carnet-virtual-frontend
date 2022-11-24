import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import { BiSearchAlt } from "react-icons/bi";

function PatientList() {
  const { store, actions } = useContext(Context);
  const [patientId, setPatientId] = useState(0);
  useEffect(() => {
    actions.getPatients();
  }, []);
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
          {store.patients?.map((item) => {
            console.log(item);
            return (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {item.name} {item.lastname}
                  </div>
                  <div className="fw-bold">{item.rut}</div>
                </div>
                <div>
                  <div>
                    <span className="badge bg-primary rounded-pill">
                      Fecha de último control:{"date"}
                    </span>
                  </div>
                  <div>
                    {item.alive ? (
                      <div>
                        <span
                          className="badge bg-success rounded-pill"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => setPatientId(item.id)}
                        >
                          {"vivo"}
                        </span>
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
                                <h1
                                  className="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
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
                                ¿Estas seguro que deseas cambiar el estado del
                                paciente a fallecido? Esta acción no se puede
                                revertir.
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cerrar
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={actions.updatePatientAlive(
                                    patientId
                                  )}
                                >
                                  Guardar Cambios
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {!item.alive ? (
                      <span className="badge bg-danger rounded-pill">
                        {"fallecido"}
                      </span>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PatientList;