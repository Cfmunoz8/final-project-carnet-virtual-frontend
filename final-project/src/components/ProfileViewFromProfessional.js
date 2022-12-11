import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/context";


function ProfileViewFromProfessional() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    actions.getPatientById(id);
    actions.getClinicalRecordById(id);
    actions.getCaregiverById(id);
  }, []);

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
        </div>
      </div>
    </div>
  );
}

export default ProfileViewFromProfessional;