import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/context";
import NewControlModal from "./NewControlModal";
import { useParams } from "react-router-dom";

function ControlHistory() {
  const { store, actions } = useContext(Context);
  const [newControl, setNewControl] = useState();
  const [list, setList] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    actions.getControlById(id);
    actions.getProfessionals();
  }, [list]);

  const allControls = store.controls;
  const lastControl = store.controls[store.controls.length - 1];
  const [control, setControl] = useState(lastControl);
  const filterControl = (id) => {
    let controlFiltered = allControls.filter((item) => {
      return item.id === id;
    });
    setControl(controlFiltered[0]);
  };

  const onChange = (e) => {
    setNewControl({
      clinical_record_id: id,
      ...newControl,
      [e.target.name]: e.target.value,
    });
  };

  const submitControl = (e) => {
    e.preventDefault();
    actions.addControl(newControl, setList, list);
  };
  console.log("infocontrol", newControl);

  return (
    <div className="container container-fluid bg-light mt-4 mb-4 p-5">
      <div className="row mb-3">
        <div className="p-2">
          <div className="dropdown float-end">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Seleccione una fecha
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {store.controls?.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-start ms-2 me-auto fw-bold btn"
                    onClick={() => filterControl(item.id)}
                  >
                    {item.date_of_control}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="col-6">
          <div className="card" style={{ width: "24rem" }}>
            <div className="card-header">Fecha</div>
            <div className="card-body list-group list-group-flush">
              <li className="list-group-item">{control?.date_of_control}</li>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card" style={{ width: "24rem" }}>
            <div className="card-header">Razón</div>
            <div className="card-body list-group list-group-flush">
              <li className="list-group-item">{control?.reason}</li>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mb-3">
          <div className="card" style={{ width: "24rem" }}>
            <div className="card-header">Descripción</div>
            <div className="card-body list-group list-group-flush">
              <li className="list-group-item">{control?.description}</li>
            </div>
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="card" style={{ width: "24rem" }}>
            <div className="card-header">Indicaciones</div>
            <div className="card-body list-group list-group-flush">
              <li className="list-group-item">{control?.indications}</li>
            </div>
          </div>
        </div>
      </div>
      <div>
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
                <div className="container container-fluid">
                  <form onSubmit={submitControl}>
                    <div className="row">
                      <div className="col">
                        <div className="input-group mb-3">
                          <label
                            className="input-group-text"
                            for="inputGroupSelect01"
                          >
                            Profesional:
                          </label>

                          <select
                            className="list-group form-select"
                            name="professional_id"
                            id="inputGroupSelect01"
                            onChange={(e) => onChange(e)}
                          >
                            <option selected>Seleccionar profesional</option>
                            {store.professionals?.map((item) => {
                              return (
                                <option
                                  key={item.id}
                                  value={item.id}
                                  className="list-group-item"
                                >
                                  {item.name} {item.lastname} - {item.role}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-text"
                            for="inputGroupSelect02"
                          >
                            Motivo de visita:
                          </label>
                          <select
                            className="form-select"
                            name="reason"
                            id="inputGroupSelect02"
                            onChange={(e) => onChange(e)}
                          >
                            <option selected>Seleccionar motivo</option>
                            <option value="Visita domiciliaria integral">
                              Visita domiciliaria integral
                            </option>
                            <option value="Visita de seguimiento">
                              Visita de seguimiento
                            </option>
                            <option value="Control cardiovascular">
                              Control cardiovascular
                            </option>
                            <option value="Consulta de morbilidad">
                              Consulta de morbilidad
                            </option>
                            <option value="Kinesiología motora">
                              Kinesiología motora
                            </option>
                            <option value="Kinesiología respiratoria">
                              Kinesiología respiratoria
                            </option>
                            <option value="Toma de muestra de exámenes de laboratorio">
                              Toma de muestra de exámenes de laboratorio
                            </option>
                            <option value="Curación de herida">
                              Curación de herida
                            </option>
                            <option value="Otros procedimientos de enfermería">
                              Otros procedimientos de enfermería
                            </option>
                            <option value="Consulta o control nutricional">
                              Consulta o control nutricional
                            </option>
                            <option value="Consulta o control odontológico">
                              Consulta o control odontológico
                            </option>
                            <option value="Consulta o control de salud mental">
                              Consulta o control de salud mental
                            </option>
                            <option value="Otros procedimientos o motivos de consulta">
                              Otros procedimientos o motivos de consulta
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <label for="date" className="input-group-text">
                          Fecha:
                        </label>
                        <input
                          type="date"
                          name="date_of_control"
                          className="form-control"
                          id="date"
                          onChange={(e) => onChange(e)}
                        ></input>
                      </div>
                      <div className="col mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Descripción:
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="6"
                          name="description"
                          onChange={(e) => onChange(e)}
                        ></textarea>
                      </div>
                      <div className="col mb-3">
                        <label
                          for="exampleFormControlTextarea2"
                          className="form-label"
                        >
                          Indicaciones:
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea2"
                          rows="6"
                          name="indications"
                          onChange={(e) => onChange(e)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <input
                        className="btn btn-outline-primary"
                        type="submit"
                        value="Guardar"
                        data-bs-dismiss="modal"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlHistory;
