import React, { useContext, useEffect } from "react";
import DatePickers from "./DatePicker";
import { Context } from "../store/context";
import { Link } from "react-router-dom";

function NewControlRegistration() {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getProfessionals();
  }, []);
  console.log(store.professionals);
  return (
    <div className="container container-fluid p-5 bg-light m-5">
      <div className="float-end">
        <Link className=" btn btn-success" to="/pathology/:id">
          Volver a Ficha Clínica
        </Link>
      </div>
      <form>
        <div className="row">
          <h1>Nueva Atención</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="input-group mb-3">
              <label className="input-group-text"  for="inputGroupSelect01">
                Profesional:
              </label>
              <select className="list-group form-select" name="professional_id" id="inputGroupSelect01">
                {store.professionals?.map((item) => {
                  return (
                    <option key={item.id} value={item.id} className="list-group-item">
                      {item.name} {item.lastname} - {item.role}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="inputGroupSelect01">
                Motivo de visita:
              </label>
              <select className="form-select" name="reason" id="inputGroupSelect01">
                <option selected>Seleccionar motivo</option>
                <option value="Visita domiciliaria integral">Visita domiciliaria integral</option>
                <option value="Visita de seguimiento">Visita de seguimiento</option>
                <option value="Control cardiovascular">Control cardiovascular</option>
                <option value="Consulta de morbilidad">Consulta de morbilidad</option>
                <option value="Kinesiología motora">Kinesiología motora</option>
                <option value="Kinesiología respiratoria">Kinesiología respiratoria</option>
                <option value="Toma de muestra de exámenes de laboratorio">
                  Toma de muestra de exámenes de laboratorio
                </option>
                <option value="Curación de herida">Curación de herida</option>
                <option value="Otros procedimientos de enfermería">Otros procedimientos de enfermería</option>
                <option value="Consulta o control nutricional">Consulta o control nutricional</option>
                <option value="Consulta o control odontológico">Consulta o control odontológico</option>
                <option value="Consulta o control de salud mental">Consulta o control de salud mental</option>
                <option value="Otros procedimientos o motivos de consulta">
                  Otros procedimientos o motivos de consulta
                </option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="col-6 mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Fecha:
              </label>
              <DatePickers />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Descripción:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              name="description"
            ></textarea>
          </div>
          <div className="col-6 mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Indicaciones:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              name="indications"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <input
            className="btn btn-outline-secondary"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}

export default NewControlRegistration;
