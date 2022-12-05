import React, { useEffect, useContext } from "react";
import { Context } from "../store/context";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProfileView from "../components/ProfileView";
import PatientResume from "../components/PatientResume";
import { CgProfile } from "react-icons/cg";

function PatientHome() {
  const { store, actions } = useContext(Context);

  useEffect (()=>{
    actions.getControls()
  },[])

  const allControls = store.controls
  const indicationsArray = allControls.map(item => item.indications)
  const reasonArray = allControls.map(item => item.reason)
  const descriptionArray = allControls.map(item => item.description)
  const dateArray = allControls.map(item => item.date_of_control)

  const lastDate = dateArray[dateArray.length - 1]
  const lastReason = reasonArray[reasonArray.length - 1]
  const lastIndications = indicationsArray[indicationsArray.length - 1]
  const lastDescription = descriptionArray[descriptionArray.length - 1]


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
          h1="Última Atención"
          div1="Fecha"
          text1={lastDate}
          div2="Razón"
          text2={lastReason}
          div3="Descripción"
          text3={lastDescription}
          div4="Indicaciones"
          text4={lastIndications}
          />
        </div>
      </div>
    </div>
  );
}

export default PatientHome;
