import React, { useEffect, useContext } from "react";
import { Context } from "../store/context";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProfileView from "../components/ProfileView";
import PatientResume from "../components/PatientResume";
import { CgProfile } from "react-icons/cg";
import Footer from "../components/Footer";


function PatientBackground() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPathologies()
    actions.getSurgeries();
    actions.getAlergies();
    actions.getHabits();
  }, []);
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
            h1="Antecedentes"
            div1="Patologías"
            text1={
              <ul className="list-group list-group-flush ">
                {store.pathologies?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
            div2="Cirugías"
            text2={
              <ul className="list-group list-group-flush ">
                {store.surgeries?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
            div3="Alergias"
            text3={
              <ul className="list-group list-group-flush ">
                {store.alergies?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
            div4="Hábitos"
            text4={
              <ul className="list-group list-group-flush ">
                {store.habits?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PatientBackground;
