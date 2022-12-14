import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function Pathology() {
  const { store, actions } = useContext(Context);
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
  };

  console.log("infoPathology", infoPathology);

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
          <input
            className="form-control me-2"
            type="input"
            placeholder="Escriba la cirugía"
            aria-label=""
            style={{ width: "24rem" }}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Agregar Cirugía
          </button>
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
          <input
            className="form-control me-2"
            type="input"
            placeholder="Escriba la alergia"
            aria-label=""
            style={{ width: "24rem" }}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Agregar Alergia
          </button>
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
          <input
            className="form-control me-2"
            type="input"
            placeholder="Escriba el hábito"
            aria-label=""
            style={{ width: "24rem" }}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Agregar Hábito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pathology;
