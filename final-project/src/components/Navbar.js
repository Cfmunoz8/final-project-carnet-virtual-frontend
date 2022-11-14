import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
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
              <Link className="nav-link" aria-current="page" to={props.link1}>
                {props.item1}
              </Link>
              <Link className="nav-link" to={props.link2}>
                {props.item2}
              </Link>
              <Link className="nav-link" to={props.link3}>
                {props.item3}
              </Link>
            </div>
          </div>
          <div className="dropdown">
            Bienvenido, {"nombre apellido. "}
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {props.dropdown}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to={props.dropdownLink1}>
                  {props.dropdownItem1}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to={props.dropdownLink2}>
                  {props.dropdownItem2}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
