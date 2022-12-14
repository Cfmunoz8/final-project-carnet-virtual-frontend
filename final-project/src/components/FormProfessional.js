import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { Context } from "../store/context";
import swal from "sweetalert";
import { formatRut, validRut } from "chilean-rutify";

function FormProfessional() {
  const { store, actions } = useContext(Context);
  const [infoRegister, setInfoRegister] = useState({
    name: "",
    lastname: "",
    rut: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setInfoRegister({ ...infoRegister, [e.target.name]: e.target.value });
  };
  useEffect(() => {}, [infoRegister]);
  const submitForm = (e) => {
    e.preventDefault();

    if (infoRegister.name === "") {
      swal("Error", "Por favor complete todos los campos");
    }
    if (infoRegister.lastname === "") {
      swal("Error", "Por favor complete todos los campos");
    }
    if (infoRegister.rut === "") {
      swal("Error", "Por favor complete todos los campos");
    }
    if (infoRegister.role === "") {
      swal("Error", "Por favor complete todos los campos");
    }
    if (infoRegister.email === "") {
      swal("Error", "Por favor complete todos los campos");
    }
    if (infoRegister.password === "") {
      swal("Error", "Por favor complete todos los campos");
    }
    if (infoRegister.confirmPassword === "") {
      swal("Error", "Por favor complete todos los campos");
    } else {
      actions.addNewProfessional(infoRegister);
      swal("Profesional creado exitosamente");
      //.catch(error => swal("Verifique si sus datos son los correctos", error))
    }
  };

  const isValidRut = () => {
    if (validRut(infoRegister?.rut) != true) {
      return <p className="text-danger ms-2"> Debes ingresar un RUT válido.</p>;
    }
  };

  const verifyPassword = () => {
    if (infoRegister?.password !== infoRegister?.confirmPassword) {
      return (
        <p className="text-danger ms-2">
          {" "}
          Las contraseñas ingresadas no coindicen.
        </p>
      );
    }
  };

  return (
    <div className="p-5">
      <div className="">
        <div className="col-lg-4 bg-white m-auto">
          <h2 className="text-center pt-3">Registrate</h2>
          <span className="text-center text-muted lead">Crea tu cuenta</span>
          <form id="form" action="#" className="" onSubmit={submitForm}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FaUserAlt />
              </span>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre"
                aria-describedby="basic-addon1"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FaUserAlt />
              </span>
              <input
                type="text"
                name="lastname"
                className="form-control"
                placeholder="Apellidos"
                aria-describedby="basic-addon1"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Rut
              </span>
              <input
                type="rut"
                name="rut"
                className="form-control"
                placeholder="Ingrese su rut sin puntos ni guion"
                aria-label="number"
                aria-describedby="basic-addon1"
                onChange={(e) => onChange(e)}
                value={formatRut(infoRegister?.rut)}
              />
            </div>
            {isValidRut()}
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Example@mail.com"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Profesion
              </span>
              <select
                className="form-select form-select-sm"
                name="role"
                aria-label=".form-select-sm example"
                onChange={(e) => onChange(e)}
              >
                <option selected>Elija su profesion</option>
                <option value="Medico">Medico/a</option>
                <option value="Enfermera/o">Enfermera/o</option>
                <option value="Kinesiologo/a">Kinesiologo/a</option>
                <option value="Nutricionista">Nutricionista</option>
                <option value="Psicologo/a">Psicologo/a</option>
                <option value="Trabajador/a Social">Trabajador/a Social</option>
                <option value="Odontologo/a">Odontologo/a</option>
                <option value="Podologo/a">Podologo/a</option>
                <option value="Tecnico en Enfermeria">
                  Tecnico en Enfermeria
                </option>
              </select>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">
                  <span className="input-group-text" id="basic-addon1">
                    Contraseña
                  </span>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  name="password"
                  id="inputPassword"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>

            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label for="inputConfirmPassword" className="col-form-label">
                  <span className="input-group-text" id="basic-addon1">
                    Confirmar contraseña
                  </span>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  id="inputConfirmPassword"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={(e) => onChange(e)}
                  name="confirmPassword"
                />
              </div>
            </div>
            {verifyPassword()}

            <button
              className="btn btn-primary my-5"
              value="add Item"
              type="submit"
            >
              {" "}
              Registrate{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormProfessional;
