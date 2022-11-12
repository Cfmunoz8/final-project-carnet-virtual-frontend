import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function NavbarPatient() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link"
                aria-current="page"
                to={"/"}
              >
                Resumen
              </Link>
              <Link className="nav-link" to={"/"}>
                Antecedentes
              </Link>
              <Link className="nav-link" to={"/"}>
                Medicamentos
              </Link>
            </div>
          </div>
          <div className="dropdown">
            Bienvenido, {"nombre paciente "}
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <CgProfile />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="">
                  Mi perfil
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="">
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarPatient;
