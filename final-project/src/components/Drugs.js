import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function Drugs() {
  const { store, actions } = useContext(Context);
  const [drugsAndPosology, setDrugsAndPosology] = useState();
  const [list, setList] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    actions.getDrugById(id);
  }, [list]);

  const onChange = (e) => {
    setDrugsAndPosology({
      clinical_record_id: id,
      ...drugsAndPosology,
      [e.target.name]: e.target.value,
    });
  };

  const submitDrug = (e) => {
    e.preventDefault();
    actions.addDrug(drugsAndPosology, setList, list);
    setDrugsAndPosology({ name: "" , posology: ""});
  };

  console.log("drugsAndPosology", drugsAndPosology);

  return (
    <div className="p-5">
      <div className="row pb-3">
        <div className="col mb-3">
          <div className="card">
            <div className="card-header">Medicamentos</div>
            <ul className="list-group list-group-flush list-group-numbered">
              {store.drug?.map((item) => {
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
        <form onSubmit={submitDrug}>
          <div className="input-group">
            <span className="input-group-text">Agregar un medicamento: </span>
            <input
              type="text"
              aria-label="Drug"
              className="form-control"
              placeholder="Fármaco"
              name="name"
              onChange={(e) => onChange(e)}
              value={drugsAndPosology?.name}
            />
            <input
              type="text"
              aria-label="Posology"
              name="posology"
              className="form-control"
              placeholder="Posología"
              onChange={(e) => onChange(e)}
              value={drugsAndPosology?.posology}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-secondary"
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Drugs;
