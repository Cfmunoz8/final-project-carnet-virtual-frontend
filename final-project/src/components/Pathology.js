import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";


function Pathology(props) {
  return (
    <div className="row">
        <div className="col-6 mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Patologias:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button type="button" className="btn btn-info">Info</button>
        </div>
        <div className="col-6 mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Cirugias:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button type="button" className="btn btn-info">Info</button>
        </div>
        <div className="col-6 mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Alergias:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button type="button" className="btn btn-info">Info</button>
        </div>
        <div className="col-6 mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Habitos:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button type="button" className="btn btn-info">Info</button>
        </div>
      </div>

      
  )
}

export default Pathology;


