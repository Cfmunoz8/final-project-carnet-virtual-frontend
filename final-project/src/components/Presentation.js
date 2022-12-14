import React, { useContext, useState, useEffect } from "react";
import { FaUserNurse } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/context";

function Presentation() {
  const { store, actions } = useContext(Context);
  const [infoLogin, setInfoLogin] = useState();
  let navigate = useNavigate();
  const onChange = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setInfoLogin({ ...infoLogin, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log("useffect", infoLogin);
  }, [infoLogin]);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("infologin", infoLogin);
    actions.loginPatient(infoLogin, navigate);
  };
  return (
    <div className="container container-fluid d-flex">
      <div
        className="card text-bg-light p-5 mt-5 mb-5 col-4"
      >
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <div className="text-center">
              <h1>Ingresa</h1>
            </div>
            <label for="exampleFormControlInput1" className="form-label">
              Ingresa tu rut:
            </label>
            <input
              type="rut"
              name="rut"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="RUT"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label">
              Ingresa tu contraseña:
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Contraseña"
              onChange={(e) => onChange(e)}
            />
            <div className="d-grid gap-2 pt-5">
              <button className="btn btn-info btn-lg p-3" type="submit">
                Ingresar
              </button>
              <button type="button" className="btn btn-link pt-3">
                ¿Olvidaste tu contraseña?
              </button>
              <Link
                className="btn  btn-outline-secondary"
                to={"/form-registration"}
                type="button"
              >
                Registrate aqui
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="m-5 col-8">
        <div
          id="carouselExampleCaptions"
          className="carousel  slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.antares-healthlines.com/fileadmin/_processed_/csm_atencion_domiciliaria_a94240908d.jpg" className="d-block w-100" alt="hands" />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="bg-dark bg-opacity-50">
                  Bienvenido/a a tu carnet virtual, ficha médica de salud.
                </h3>

              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://nosmagazine.cl/wp-content/uploads/2018/12/postrados-1.jpg"
                className="d-block w-100"
                alt="manos"
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="bg-dark bg-opacity-50">
                  Esta plataforma es amigable y de fácil uso, para que puedas
                  tener acceso a tus antecedentes clínicos en todo lugar y momento.
                </h3>

              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://diariofarma.com/wp-content/uploads/2016/04/Atenci%C3%B3n-domiciliaria.jpg"
                className="d-block w-100"
                alt="curación de herida"
              />
              <div className="carousel-caption d-none d-md-block">
              <h3 className="bg-dark bg-opacity-50">
                  Te invitamos a olvidar la libreta de comunicaciones y dar un
                  paso a las nuevas tecnologías.
                </h3>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
