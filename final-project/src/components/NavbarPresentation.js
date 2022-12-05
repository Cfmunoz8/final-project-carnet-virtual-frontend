import React from "react";
import { Link } from "react-router-dom";

function NavbarPresentation() {
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
               
              </div>
            </div>
            <div className="dropdown">
              Funcionario -
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                
              </button>
              <ul className="dropdown-menu dropdown-menu-end">

              <li><Link className="dropdown-item" to="/professional-login" >Iniciar sesion</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );

}

export default NavbarPresentation;