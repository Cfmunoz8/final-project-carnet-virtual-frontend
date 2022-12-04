import React, { useEffect, useContext } from "react";
import { Context } from "../store/context";

function ProfileView() {
  const { store, actions } = useContext(Context);
  const id = store.patients.id
  useEffect(() => {
    actions.getPatient(id);
  }, []);
  return (
    <div>
      <div className="card text-bg-light m-5" style={{ width: "18rem" }}>
        <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">Nombre Paciente: {store.patient.name}</h5>
          <p className="card-text text-center">Edad</p>
          <p className="card-text text-center">Género</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Fecha de ingreso: </li>
          <li className="list-group-item">Índice de Barthel: </li>
          <li className="list-group-item"> Cuidador: </li>
          <li className="list-group-item">Dirección: </li>
        </ul>
        <div className="card-body">MAPA</div>
      </div>
    </div>
  );
}

export default ProfileView;
