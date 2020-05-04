import React, { Fragment, useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { FaUserTie, FaIdCard } from "react-icons/fa";
import { IoMdReorder } from "react-icons/io";
import Sidebar from "../layout/Sidebar";
import logo from "../../img/logo.png";
import "./navegador.css";
import { Link } from "react-router-dom";

const Navegador = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
    <Fragment>
      <Navbar className="nav-bar justify-content-end " bg="dark" variant="dark" >
        <Navbar.Brand href="/">
        <Image
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
          />{" "}
          Spotify
        </Navbar.Brand>
        <Nav className="mr-auto">
        <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  <FaUserTie className="mx-1" />
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/alumno/preguntas"} className="nav-link">
                  <FaIdCard className="mx-1" />
                  Preguntas
                </Link>
              </li>
            </ul>
        </Nav>
        <IoMdReorder className="sidebar__toggle" onClick={toggle} />
      </Navbar>
      <Sidebar toggle={toggle} isOpen={toggleState} />
      {/* <h1 className="text-center">Toggle Sidebar using hooks Rolando </h1> */}
    </Fragment>
  );
};

export default Navegador;
