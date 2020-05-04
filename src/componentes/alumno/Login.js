import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import {FaUser, FaLock} from 'react-icons/fa'
import wave from "../../img/wave.png";
import avatar from "../../img/avatar.svg";
import bg from "../../img/bg.svg";
import "./styles.scss";
import styled from 'styled-components'

function Login() {
  return (
    <div>
      <div>
        <Img src={wave} className="wave" />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-lg-6" style={{ paddingTop:"20%" }}>
            <Image  className="img" src={bg} width="500px" />
          </div>
          <div className="col-md-10 col-lg-6 ">
            <Form style={{ marginBottom: "30%", marginTop: "30%" }}>
              <div className="text-center">
                <Image src={avatar} width="20%" className="py-2" />
                <h1 style={{ fontSize: "55px" }} className="text">Bienvenido</h1>
              </div>
              <Form.Group>
                <Form.Label>
                  <FaUser className="icon" /> {''}
                  Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <FaLock/> {''}
                  Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                className="btn btn-block btnrol rounded-pill text"
                type="submit"
              >
                Login
              </Button> 

             
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;






const Img = styled.img`
position: fixed;
bottom: 0;
left: 0;
height: 100%;
z-index: -1;
`;

const Peru = styled.h2`
font-size: 40px;
color: red;
`;



