import React, { useContext, useEffect } from "react";
import { Context } from "../store/context";

function Drugs() {
  return (
    <div>
      <div className="container container-fluid mt-3 mb-3 p-3 bg-light">
        <div className="row">
          <div className="col mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Medicamentos:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <button type="button" className="btn btn-info">
              Guardar
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drugs;
