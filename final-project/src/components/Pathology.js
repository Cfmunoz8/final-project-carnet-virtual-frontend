import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/context";

function Pathology() {

  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPathology();
  }, []);
  const submitForm = (e) => {
    e.preventDefault()}

  return (
   
    <div className="container container-fluid mt-5 p-5 bg-light">
      <div className="row">
        <div className="col-6 mb-3">
          <form onSubmit={submitForm}>
            <input
              className="form-control me-2"
              type="input"
              placeholder="Escriba la patologia"
              aria-label=""
            />
            <button className="btn btn-outline-secondary" type="submit">Guardar</button>
          </form>
          <div className="card">
            <div className="card-header">Patologias</div>
            <ul className="list-group list-group-flush list-group-numbered">
              {store.Pathology?.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-start"
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  
  )
}


export default Pathology;


