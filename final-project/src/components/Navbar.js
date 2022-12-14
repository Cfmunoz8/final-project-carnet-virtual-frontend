import { React, useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/context";
import icono1 from "../images/icono1.png";

function Navbar(props) {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

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
          <div className="dropdown">
            {props.header}
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
                <button
                  className="dropdown-item"
                  onClick={() => actions.logout(navigate)}
                >
                  {props.dropdownItem2}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
