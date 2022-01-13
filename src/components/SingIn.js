import React, { useContext, useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

const SingIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { loginEmail, loginPassword } = form;
    const newErrors = {};
    // name errors
    if (!loginEmail || loginEmail === "")
      newErrors.loginEmail = "Email cannot be blank!";
    // else if(registerName > Deposit) newErrors.Amount = "Insufficient Funds!";
    // food errors
    if (!loginPassword || loginPassword === "")
      newErrors.loginPassword = "Password cannot be blank!";

    return newErrors;
  };

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
        navigate("/dashboard");
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <Wrapper className="section section-center">
      <h3 className="title">Login Form</h3>
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              onChange={(event) => {
                setField("loginEmail", event.target.value);
                setLoginEmail(event.target.value);
              }}

              isInvalid={!!errors.loginEmail}
            />
             <Form.Control.Feedback type="invalid">
              {errors.loginEmail}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={(event) => {
                setField("loginPassword", event.target.value);
                setLoginPassword(event.target.value);
              }}

              isInvalid={!!errors.loginPassword}
            />

<Form.Control.Feedback type="invalid">
              {errors.loginPassword}
            </Form.Control.Feedback>
          </Form.Group>

          <Button onClick={login} className="btn3" type="submit">
            Login
          </Button>
        </fieldset>
      </Form>

      <Link to="/signup" className="link">
        Dont have an account? Sign up
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    margin-bottom: 2rem;
  }

  .link {
    text-align: center;
    margin-top: 7rem;
  }

  button {
    width: 100%;
    height: 62px;
    font-family: Ubuntu-Bold;
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
  }

  input[type="email"],
  input[type="password"] {
    font-family: Ubuntu-Bold;
    color: #403866;
    line-height: 1.2;
    font-size: 18px;
    display: block;
    width: 100%;
    height: 62px;
    padding: 0 20px 0 38px;
    outline: none;
    border: none;
    background-color: #e6e6e6;
  }
`;

export default SingIn;
