import React, { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { BiSearchAlt } from "react-icons/bi";
import NavbarPatient from "./NavbarPatient";

function DrugList() {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getDrugs();
  }, []);
  return (
    <div className="container container-fluid bg-light mt-5 mb-5">
      <NavbarPatient />
      <div className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-header">Medicamentos</div>
            <ul className="list-group list-group-flush list-group-numbered">
              {store.drugs?.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {item.name} - {item.posology}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-4">
            <img src="https://lh5.googleusercontent.com/p/AF1QipOjCs3gjojbni-bLx8QQmTDaM5wvBS7xZZOLyMx=w408-h543-k-no" className="img-fluid" alt="..."/>
        </div>
      </div>
    </div>
  );
}

export default DrugList;
