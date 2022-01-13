import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { useNavigate } from "react-router-dom";

import emailjs from "@emailjs/browser";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [Image, setImage] = useState("");
  const [registerName, setRegisterName] = useState("");

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
    const { registerEmail, registerPassword, registerName, Image } = form;
    const newErrors = {};
    // name errors
    if (!registerName || registerName === "")
      newErrors.registerName = "Name cannot be blank!";
    // else if(registerName > Deposit) newErrors.Amount = "Insufficient Funds!";
    // food errors
    if (!registerPassword || registerPassword === "")
      newErrors.registerPassword = "Password cannot be blank!";
    // comment errors
    if (!registerEmail || registerEmail === "")
      newErrors.registerEmail = "Email Address cannot be blank!";

    if (!Image || Image === "")
      newErrors.Image = "Please upload a valid ID!";


    return newErrors;
  };


  const storage = getStorage();

  const navigate = useNavigate();

  const uploadFile = (file) => {
    if (!file) return;

    const storageRef = ref(storage, `${Image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  };


  const onSubmit = async (e) => {

    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        setRegisterEmail("");
        setRegisterPassword("");
        console.log(user.user.uid);

        emailjs
          .sendForm(
            "service_vkv41fp",
            "template_r2g31m9",
            "#myForm",
            "user_uW2edal3jhuvmhEG0R0i3"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error);
            }
          );

        setDoc(doc(db, "users", user.user.uid), {
          name: registerName,
          email: registerEmail,
          password: registerPassword,
          id: user.user.uid,
          deposit: 0.0,
          payout: 0.0,
          WithdarwalEmail: null,
          WithdrawalAmount: null,
          WithdrawalAddress: null,
          history1: {
            id: null,
            type: null,
            amount: null,
            date: null,
          },
          history2: {
            id: null,
            type: null,
            amount: null,
            date: null,
          },
          history3: {
            id: null,
            type: null,
            amount: null,
            date: null,
          },
          history4: {
            id: null,
            type: null,
            amount: null,
            date: null,
          },
        });

        uploadFile(Image);
        navigate("/dashboard");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <Wrapper className="section section-center">
      <h3 className="title">Register Form</h3>
      <Form id="myForm">
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              onChange={(event) => {
                setField("registerName", event.target.value);
                setRegisterName(event.target.value);
              }}
              isInvalid={!!errors.registerName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.registerName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              onChange={(event) => {
                setField("registerEmail", event.target.value);
                setRegisterEmail(event.target.value);
              }}
              isInvalid={!!errors.registerEmail}
            />
            <Form.Control.Feedback type="invalid">
              {errors.registerEmail}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={(event) => {
                setField("registerPassword", event.target.value);
                setRegisterPassword(event.target.value);
              }}
              isInvalid={!!errors.registerPassword}
            />

            <Form.Control.Feedback type="invalid">
              {errors.registerPassword}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>ID Verification</Form.Label>
            <Form.Control
              type="file"
              size="lg"
              onChange={(event) => {
                setField("Image", event.target.value);
                setImage(event.target.files[0]);
              }}
              isInvalid={!!errors.Image}
            />

            <Form.Control.Feedback type="invalid">
              {errors.Image}
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="btn3" onClick={onSubmit} type="submit">
            SignUp
          </Button>
        </fieldset>
      </Form>

      <Link to="/login" className="link">
        Already have an account? Sign in
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

  input[type="text"],
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

export default SignUp;
