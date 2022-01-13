import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { collection, setDoc, getDoc, doc, updateDoc } from "firebase/firestore";

const Withdrawal = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const UserColRef = doc(db, "users", user.uid);
  const washingtonRef = doc(db, "users", user.uid);
  const [Deposit, setDeposit] = useState("");
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const [Amount, setAmount] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");


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

  useEffect(() => {
    getDoc(UserColRef).then((doc) => {
      const deposit = doc.data().deposit;
      setDeposit(deposit);
    });
  }, []);

  const findFormErrors = () => {
    const { Amount, Email, Address } = form;
    const newErrors = {};
    // name errors
    if (!Amount || Amount === ""  ) newErrors.Amount = "Amount cannot be blank!";
    else if(Amount > Deposit) newErrors.Amount = "Insufficient Funds!";
    // food errors
    if (!Email || Email === "") newErrors.Email = "Email cannot be blank";
    // comment errors
    if (!Address || Address === "") newErrors.Address = "Bitcoin Address cannot be blank!";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      updateDoc(washingtonRef, {
        WithdarwalEmail: Email,
        WithdrawalAmount: Amount,
        WithdrawalAddress: Address,
      });

      setTimeout(() => { navigate("/dashboard") }, 2000);
      ;
    }
  };


  return (
    <>
    <Wrapper className="section section-center">
      <h3 className="title">Withdrawal Form</h3>
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Account Balance</Form.Label>
            <Form.Control disabled type="number" placeholder={Deposit} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Amount($)</Form.Label>
            <Form.Control
              type="number"
              placeholder="100"
              onChange={(e) => {
                setField("Amount", e.target.value);
                setAmount(e.target.value)
              }}
              isInvalid={!!errors.Amount}
            />

            <Form.Control.Feedback type="invalid">
              {errors.Amount}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setField("Email", e.target.value)
                setEmail(e.target.value)
              }}
              isInvalid={!!errors.Email}
            />

            <Form.Control.Feedback type="invalid">
              {errors.Email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Bitcoin Address</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Bitcoin Address"
              onChange={(e) => {
                setField("Address", e.target.value)
                setAddress(e.target.value)
            
              }}
              isInvalid={!!errors.Address}
            />

            <Form.Control.Feedback type="invalid">
              {errors.Address}
            </Form.Control.Feedback>
          </Form.Group>

          <Button onClick={handleSubmit} className="btn3" type="submit">
            Withdraw
          </Button>
        </fieldset>
      </Form>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.section``;

export default Withdrawal;
