import React, { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function PatientList() {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPatients();
  }, []);
  return (
    <div className="container container-fluid">
      <form className="d-flex pt-2 pb-2" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Busque por nombre o rut del paciente"
          aria-label="Search"
        />
        <button className="btn btn-outline-secondary" type="submit">
          <BiSearchAlt />
        </button>
      </form>
      <div className="card">
        <div className="card-header">Pacientes</div>
        <ul className="list-group list-group-flush list-group-numbered">
          {store.patients?.map((item) => {
            console.log(item);
            return (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {item.name} {item.lastname}
                  </div>
                  <div className="fw-bold">Rut: {item.rut}</div>
                  </div>
                
                <div>
               
                  <div>
                    <Link
                      className="btn btn-success rounded-pill"
                      to={"/pathology/" + item.id}
                    >
                      Ir a Ficha Clínica
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PatientList;
