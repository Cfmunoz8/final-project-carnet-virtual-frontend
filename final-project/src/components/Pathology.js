import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function Pathology() {

  const { store, actions } = useContext(Context);

  const [infoSurgeries, setInfoSuergeries] = useState();
  const [infoHabit, setInfoHabit] = useState();
  const [infoAlergy, setInfoAlergy] = useState();
  const [infoPathology, setInfoPathology] = useState();

  const [list, setList] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    actions.getPathologyById(id);
    actions.getSurgeryById(id);
    actions.getAlergyById(id);
    actions.getHabitById(id);
  }, [list]);


  const onChangePathology = (e) => {
    setInfoPathology({
      clinical_record_id: id,
      [e.target.name]: e.target.value,
    });
  };
   const submitPathology = (e) => {
    e.preventDefault();
    actions.addPathology(infoPathology, setList, list);
    setInfoPathology({ name: "" });
    
    
    const onChangeSurgeries = (e) => {
    setInfoSuergeries({
    clinical_record_id: id,
      [e.target.name]: e.target.value,
    });
   };


  const submitSurgerie = (e) => {
    e.preventDefault();
    actions.addSurgeries(infoSurgeries, setList, list);
    setInfoSuergeries({ name: "" });
  };

  const onChangeHabit = (e) => {
    setInfoHabit({
      clinical_record_id: id,
      [e.target.name]: e.target.value,
    });
  };

  const submitHabit = (e) => {
    e.preventDefault();
    actions.addHabit(infoHabit, setList, list);
    setInfoHabit({ name: "" });
  };

  const onChangeAlergy = (e) => {
    setInfoAlergy({
      clinical_record_id: id,
      [e.target.name]: e.target.value,
    });
  };

  const submitAlergy = (e) => {
    e.preventDefault();
    actions.addAlergy(infoAlergy, setList, list);
    setInfoAlergy({ name: "" });
  };

  return (

    <div className="container container-fluid mt-5 p-5 bg-light">
      <div className="row">

        <div className="col-6 mb-3">
          <div className="card mb-3" style={{ width: "24rem" }}>

            <div className="card-header">Patologias</div>
            {
              <ul className="card-body list-group list-group-flush ">
                {store.pathology?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
          </div>
          <form onSubmit={submitPathology}>
            <input
              className="form-control me-2"
              type="input"
              placeholder="Escriba la patología"
              aria-label="name"
              name="name"
              style={{ width: "24rem" }}
              onChange={(e) => onChangePathology(e)}
              value={infoPathology?.name}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Agregar Patología
            </button>
          </form>

        </div>

        <div className="col-6 mb-3">
          <div className="card mb-3" style={{ width: "24rem" }}>
            <div className="card-header">Cirugías</div>
            {
              <ul className="card-body list-group list-group-flush ">
                {store.surgery?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
          </div>
          <form onSubmit={submitSurgerie}>
            <input
              className="form-control me-2"
              type="input"
              placeholder="Escriba la cirugía"
              aria-label=""
              style={{ width: "24rem" }}
              name="name"
              value={infoSurgeries?.name}
              onChange={(e) => onChangeSurgeries(e)}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Agregar Cirugía
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mb-3">
          <div className="card mb-3" style={{ width: "24rem" }}>
            <div className="card-header">Alergias</div>
            {
              <ul className="card-body list-group list-group-flush ">
                {store.alergy?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
          </div>

          <form onSubmit={submitAlergy}>
            <input
              className="form-control me-2"
              type="input"
              placeholder="Escriba la alergia"
              aria-label=""
              style={{ width: "24rem" }}
              name="name"
              value={infoAlergy?.name}
              onChange={(e) => onChangeAlergy(e)}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Agregar Alergia
            </button>
          </form>
        </div>
        <div className="col-6 mb-3">
          <div className="card mb-3" style={{ width: "24rem" }}>
            <div className="card-header">Hábitos</div>
            {
              <ul className="card-body list-group list-group-flush ">
                {store.habit?.map((item) => {
                  return (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            }
          </div>
          <form onSubmit={submitHabit}>
            <input
              className="form-control me-2"
              type="input"
              placeholder="Escriba el hábito"
              aria-label=""
              name="name"
              value={infoHabit?.name}
              onChange={(e) => onChangeHabit(e)}
              style={{ width: "24rem" }}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Agregar Hábito
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Pathology;
