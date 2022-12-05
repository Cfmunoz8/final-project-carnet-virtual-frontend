import React from "react";
import { Context } from "../store/context";
import NavbarPatient from "../components/NavbarPatient";

function PatientResume(props) {
  return (
    <div className="container container-fluid bg-light mt-5 mb-5">
      <NavbarPatient />
      <div className="container container-fluid">
        <div className="row">
          <h1 className="mb-4">{props.h1}</h1>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <div className="card" style={{ width: "28rem" }}>
              <div className="card-header">{props.div1}</div>
              <div className="card-body list-group list-group-flush">
                <li className="list-group-item">{props.text1}</li>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card" style={{ width: "28rem" }}>
              <div className="card-header">{props.div2}</div>
              <div className="card-body list-group list-group-flush">
                <li className="list-group-item">{props.text2}</li>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-3">
            <div className="card" style={{ width: "28rem" }}>
              <div className="card-header">{props.div3}</div>
              <div className="card-body list-group list-group-flush">
                <li className="list-group-item">{props.text3}</li>
              </div>
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="card" style={{ width: "28rem" }}>
              <div className="card-header">{props.div4}</div>
              <div className="card-body list-group list-group-flush">
                <li className="list-group-item">{props.text4}</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientResume;
