import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";


function Pathology(props) {
  return (
    <div className="containe-fluid">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
          {props.name}
        </div>
        <ul className="list-group list-group-flush">
          <input className="" type="text" placeholder="escribe aqui">
          </input>
          <button
              className="btn btn-dark ml-3 col-4"
              style={{ width: "150px" }}
              onClick >Guardar</button>
        </ul>
      </div>
    </div>
  )

}

export default Pathology;

