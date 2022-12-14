import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

function AddCaregiverModal() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [caregiver, setCaregiver] = useState();

  const onChange = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setCaregiver({
      patient_id: store.patient.id,
      ...caregiver,
      [e.target.name]: e.target.value,
    });
  };

  const submitCaregiver = (e) => {
    e.preventDefault();
    actions.addCaregiver(caregiver);
  };
  console.log("infocaregiver", caregiver);

  return (
    <div className="container container-fluid">
      <form onSubmit={submitCaregiver}>
        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <FaUserAlt />
            </span>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nombre"
              aria-describedby="basic-addon1"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <FaUserAlt />
            </span>
            <input
              type="text"
              name="lastname"
              className="form-control"
              placeholder="Apellidos"
              aria-describedby="basic-addon1"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Rut
            </span>
            <input
              type="text"
              name="rut"
              className="form-control"
              placeholder="Ingrese su rut sin puntos ni guion"
              aria-label="number"
              aria-describedby="basic-addon1"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Dirección
            </span>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Example@mail.com"
              aria-label="address"
              aria-describedby="basic-addon1"
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <input
            className="btn btn-outline-primary"
            type="submit"
            value="Agregar Cuidador"
            data-bs-dismiss="modal"
          />
        </div>
      </form>
    </div>
  );
}

export default AddCaregiverModal;
