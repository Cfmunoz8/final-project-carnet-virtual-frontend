import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/context";
import PatientResume from "./PatientResume";

function Pathology() {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPathology();
    actions.getPathologies();
    actions.getSurgeries();
    actions.getAlergies();
    actions.getHabits();
  }, []);
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container container-fluid mt-5 p-5 bg-light">
      <div className="row">
        <div className="col-6 mb-3">
          <div className="card mb-3" style={{ width: "24rem" }}>
            <div className="card-header">Patologias</div>
            {
              <ul className="card-body list-group list-group-flush ">
                {store.pathologies?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
          </div>
          <input
            className="form-control me-2"
            type="input"
            placeholder="Escriba la patología"
            aria-label=""
            style={{ width: "24rem" }}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Agregar Patología
          </button>
        </div>
        <div className="col-6 mb-3">
          <div className="card mb-3" style={{ width: "24rem" }}>
            <div className="card-header">Cirugías</div>
            {
              <ul className="card-body list-group list-group-flush ">
                {store.surgeries?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
          </div>
          <input
            className="form-control me-2"
            type="input"
            placeholder="Escriba la cirugía"
            aria-label=""
            style={{ width: "24rem" }}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Agregar Cirugía
          </button>
        </div>
      </div>
      <div className="row">
      <div className="col-6 mb-3">
          <div className="card mb-3" style={{ width: "24rem" }}>
            <div className="card-header">Alergias</div>
            {
              <ul className="card-body list-group list-group-flush ">
                {store.alergies?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
          </div>
          <input
              className="form-control me-2"
              type="input"
              placeholder="Escriba la alergia"
              aria-label=""
              style={{ width: "24rem" }}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Agregar Alergia
            </button>
        </div>
        <div className="col-6 mb-3">
          <div className="card mb-3" style={{ width: "24rem" }}>
            <div className="card-header">Hábitos</div>
            {
              <ul className="card-body list-group list-group-flush ">
                {store.habits?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
          </div>
          <input
              className="form-control me-2"
              type="input"
              placeholder="Escriba el hábito"
              aria-label=""
              style={{ width: "24rem" }}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Agregar Hábito
            </button>
        </div>
      </div>
    </div>
  );
}

export default Pathology;
