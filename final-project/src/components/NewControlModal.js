import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import { Link, useParams } from "react-router-dom";

function NewControlModal() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [newControl, setNewControl] = useState();

  useEffect(() => {
    actions.getProfessionals();
  }, []);

  const onChange = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setNewControl({
      clinical_record_id: id,
      ...newControl,
      [e.target.name]: e.target.value,
    });
  };

  const submitControl = (e) => {
    e.preventDefault();
    actions.addControl(newControl);
  };
  console.log("infocontrol", newControl);

  return (
    <div className="container container-fluid">
      <form onSubmit={submitControl}>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <label className="input-group-text" for="inputGroupSelect01">
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
              <label className="input-group-text" for="inputGroupSelect02">
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
                <option value="Kinesiología motora">Kinesiología motora</option>
                <option value="Kinesiología respiratoria">
                  Kinesiología respiratoria
                </option>
                <option value="Toma de muestra de exámenes de laboratorio">
                  Toma de muestra de exámenes de laboratorio
                </option>
                <option value="Curación de herida">Curación de herida</option>
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
            <label for="exampleFormControlTextarea1" className="form-label">
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
            <label for="exampleFormControlTextarea2" className="form-label">
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
  );
}

export default NewControlModal;
