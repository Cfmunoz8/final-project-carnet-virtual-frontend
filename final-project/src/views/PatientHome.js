import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/context";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProfileView from "../components/ProfileView";
import PatientResume from "../components/PatientResume";
import { CgProfile } from "react-icons/cg";

function PatientHome() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getControls();
  }, []);

  const allControls = store.controls;
  const lastControl = store.controls[store.controls.length - 1];
  const [control, setControl] = useState(lastControl);
  const filterControl = (id) => {
    let controlFiltered = allControls.filter((item) => {
      return item.id === id;
    });
    setControl(controlFiltered[0]);
  };

  return (
    <div>
      <Header />
      <Navbar
        header="Bienvenido/a,"
        dropdown={<CgProfile />}
        dropdownItem1="Mi Perfil"
        dropdownLink1="/"
        dropdownItem2="Cerrar Sesión"
        dropdownLink2="/"
      />
      <div className="row">
        <div className="col-3">
          <ProfileView />
        </div>
        <div className="col-9">
          <PatientResume
            h1={
              <div className="row">
                <h1 className="col-9">Mis Controles</h1>
                <div className="col-3 dropdown">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Seleccione una fecha
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    {store.controls?.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="list-group-item d-flex justify-content-between align-items-start ms-2 me-auto fw-bold btn"
                          onClick={() => filterControl(item.id)}
                        >
                          {item.date_of_control}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            }
            div1="Fecha"
            text1={control?.date_of_control}
            div2="Razón"
            text2={control?.reason}
            div3="Descripción"
            text3={control?.description}
            div4="Indicaciones"
            text4={control?.indications}
          />
        </div>
      </div>
    </div>
  );
}

export default PatientHome;
