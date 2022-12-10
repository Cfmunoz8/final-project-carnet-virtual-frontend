import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";

function Drugs() {
  const { store, actions } = useContext(Context);
  const [drugsAndPosology, setDrugsAndPosology] = useState();

  useEffect(() => {
    actions.getDrugs();
  }, []);

  const onChange = (e) => {
    console.log(e.target.value);
    setDrugsAndPosology({... drugsAndPosology, [e.target.name] : e.target.value})
  };

  const submit = (e) => {
    actions.addDrug(drugsAndPosology, e)
  };

  return (
    <div>
      <div className="row pb-3">
        <div className="col mb-3">
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
        <form onSubmit={()=>{submit()}}>
          <div className="input-group">
            <span className="input-group-text">Agregar un medicamento: </span>
            <input
              type="text"
              aria-label="Drug"
              className="form-control"
              placeholder="Fármaco"
              onChange={(e) => {
                onChange(e);
              }}
            />
            <input
              type="text"
              aria-label="Posology"
              className="form-control"
              placeholder="Posología"
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>
          <button type="submit" className="btn btn-outline-secondary">
              Agregar
            </button>
        </form>
      </div>
    </div>
  );
}

export default Drugs;
