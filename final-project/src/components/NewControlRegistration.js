import React, { useState } from "react";
import DatePickers from "./DatePicker";

function NewControlRegistration() {
  return (
    <div className="container container-fluid p-5 bg-light m-5">
      <form>
        <div className="row">
          <h1>Nueva Atención</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="input-group mb-3">
              <label className="input-group-text" for="inputGroupSelect01">
                Profesional:
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option selected>Seleccionar profesional</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="inputGroupSelect01">
                Motivo de visita:
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option selected>Seleccionar motivo</option>
                <option value="1">Visita domiciliaria integral</option>
                <option value="2">Visita de seguimiento</option>
                <option value="3">Control cardiovascular</option>
                <option value="4">Consulta de morbilidad</option>
                <option value="5">Kinesiología motora</option>
                <option value="6">Kinesiología respiratoria</option>
                <option value="7">
                  Toma de muestra de exámenes de laboratorio
                </option>
                <option value="8">Curación de herida</option>
                <option value="9">Otros procedimientos de enfermería</option>
                <option value="10">
                  Consulta o control nutricional
                </option>
                <option value="10">
                  Consulta o control odontológico
                </option>
                <option value="11">
                  Consulta o control de salud mental
                </option>
                <option value="12">
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
