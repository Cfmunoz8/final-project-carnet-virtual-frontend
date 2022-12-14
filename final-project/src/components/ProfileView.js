import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/context";

function ProfileView() {
  const { store, actions } = useContext(Context);
  const [inputFile, setInputFile] = useState(null);

  useEffect(() => {
    actions.getClinicalRecord();
    actions.getCaregiver();
  }, []);

  const handleChange = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", inputFile[0]);
    }
  
    const onChange = (e) => {
      setInputFile(e.target.files);
    }

    return (
      <div>
        <div className="card text-bg-light m-5" style={{ width: "18rem" }}>
          <img
            src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-center">
              {store.patient.name} {store.patient.lastname}
            </h5>
            <p className="card-text text-center">Edad: {store.patient.age}</p>
            <p className="card-text text-center">
              Género: {store.patient.gender}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Fecha de ingreso: {store.clinicalRecord.registration_date}
            </li>
            <li className="list-group-item">
              Índice de Barthel: {store.clinicalRecord.barthel_index}
            </li>
            <li className="list-group-item">
              Cuidador: {store.caregiver.name} {store.caregiver.lastname} <br />
              Zarit: {store.clinicalRecord.zarit_scale_caregiver}
            </li>
          </ul>
          <div className="card-body">
            <p className="card-text text-center">
              Dirección: {store.patient.address}
            </p>
            <p className="card-text text-center">
              Teléfono: {store.patient.phone_number}
            </p>
            <p className="card-text text-center">
              Correo electrónico: {store.patient.email}
            </p>
            <form onSubmit={handleChange}>
              <input
                type="file"
                name="avatar"
                id="avatar"
                className="form-control"
                aria-describedby="avatar"
                onChange={(e) => onChange(e)} />
                <button className="btn btn-primary" type="submit">Cargar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  export default ProfileView;
