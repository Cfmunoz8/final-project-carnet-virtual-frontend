import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function NavbarPatient() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg sticky-top bg-light border-bottom">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link" aria-current="page" to="/patient-home">
                    Resumen y Controles
                  </Link>
                  <Link className="nav-link" to="/background">
                    Antecedentes
                  </Link>
                  <Link className="nav-link" to="/drugs">
                    Medicamentos
                  </Link>
                </div>
              </div>
          </nav>
        </div>
      );
    }

export default NavbarPatient;
