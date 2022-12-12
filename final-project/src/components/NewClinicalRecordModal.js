import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function NewClinicalRecordModal() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [newClinicalRecord, setNewClinicalRecord] = useState();

  const onChange = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setNewClinicalRecord({
      patient_id: id,
      ...newClinicalRecord,
      [e.target.name]: e.target.value,
    });
  };

  const submitClinicalRecord = (e) => {
    e.preventDefault();
    actions.addClinicalRecord(newClinicalRecord);
  };
  console.log("infoclinicalrecord", newClinicalRecord);

  return (
    <div className="container container-fluid">
      <form onSubmit={submitClinicalRecord}>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <label for="date" className="input-group-text">
                Fecha de Registro:
              </label>
              <input
                type="date"
                name="registration_date"
                className="form-control"
                id="date"
                onChange={(e) => onChange(e)}
              ></input>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="program">
                Programa:
              </label>

              <select
                className="list-group form-select"
                name="program"
                id="program"
                onChange={(e) => onChange(e)}
              >
                <option selected>Seleccionar programa</option>
                <option value="Dependencia Severa">Dependencia Severa</option>
                <option value="Cuidados Paliativos">Cuidados Paliativos</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="barthel_index">
                Índice de Barthel:
              </label>
              <select
                className="form-select"
                name="barthel_index"
                id="barthel_index"
                onChange={(e) => onChange(e)}
              >
                <option selected>Seleccionar rango:</option>
                <option value="<20: Dependencia total">
                    0 - 20	
                </option>
                <option value="20 - 35:	Dependencia severa">
                    20 - 35	
                </option>
                <option value="40 - 55:	Dependencia moderada">
                    40 - 55
                </option>
                <option value="60 - 95:	Dependencia leve">
                  60 -95
                </option>
                <option value="100: Independencia"> 100 </option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="zarit_scale_caregiver">
                Escala de Zarit:
              </label>
              <select
                className="form-select"
                name="zarit_scale_caregiver"
                id="zarit_scale_caregiver"
                onChange={(e) => onChange(e)}
              >
                <option selected>Seleccionar rango:</option>
                <option value="<46: Ausencia de sobrecarga">
                    22 - 46
                </option>
                <option value="47 - 55:	Sobrecarga ligera">
                    47 - 55	
                </option>
                <option value="56 - 110:	Sobrecarga intensa">
                    56 - 110
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <input
            className="btn btn-outline-primary"
            type="submit"
            value="Agregar Ficha Clínica"
            data-bs-dismiss="modal"
          />
        </div>
      </form>
    </div>
  );
}

export default NewClinicalRecordModal;
