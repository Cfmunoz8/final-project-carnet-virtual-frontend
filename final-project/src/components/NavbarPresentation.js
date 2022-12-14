import React from "react";
import { Link } from "react-router-dom";
import icono1 from "../images/icono1.png";

function NavbarPresentation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top bg-light border">
        <div className="container-fluid">
          <div>
            <img
              className="img img-fluid me-4"
              style={{ width: "45px" }}
              src={icono1}
              alt="logo"
            />
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav"></div>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Funcionario
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/professional-login">
                  Iniciar sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarPresentation;
