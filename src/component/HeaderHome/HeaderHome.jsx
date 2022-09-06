import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="#">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active"to="/" aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                login
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/usestate">
                  useState
                </NavLink>
                <NavLink className="dropdown-item" to="/demochonxe">
                  baitapchonxe
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  useEffect
                </NavLink>
                <NavLink className="dropdown-item" to="/usecallback">
                  usecallback
                </NavLink>
                <NavLink className="dropdown-item" to="/useref">
                  useref
                </NavLink>
                <NavLink className="dropdown-item" to="/useredux">
                  useredux
                </NavLink>
                <NavLink className="dropdown-item" to="/face">
                  facebook
                </NavLink>
                <NavLink className="dropdown-item" to="/democustomhook">
                  useRoute
                </NavLink>
                
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
