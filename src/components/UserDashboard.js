import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import styled from "styled-components";
import FeaturedProducts from "./FeaturedProducts";
import { useAuth } from "../context/AuthContext";
import { collection, getDoc, doc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import { Plans } from "../pages";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";





const UserDashboard = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const UserColRef = doc(db, "users", `${user.uid}`);
  const [Name, setName] = useState("");
  const [Deposit, setDeposit] = useState("");
  const [Payout, setPayout] = useState("");
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});


    // getDoc(UserColRef).then((doc) => {
    //   console.log(doc.data(), doc.id);
    //   const name = doc.data().name;
    //   const deposit = doc.data().deposit;
    //   const payout = doc.data().payout;
    //   setName(name);
    //   setDeposit(deposit);
    //   setPayout(payout);
    //   console.log(Name);
    // });

    useEffect(() => {
      onSnapshot(UserColRef, (doc) => {
        console.log(doc.data(), doc.id);
        const name = doc.data().name;
        const deposit = doc.data().deposit;
        const payout = doc.data().payout;
        setName(name);
        setDeposit(deposit);
        setPayout(payout);
        console.log(Name);
      } )
    }, [])




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
    const { Amount } = form;
    const newErrors = {};
    // name errors
    if (!Amount || Amount === "") newErrors.Amount = "cannot be blank!";

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
     
        if(user.uid === "jSVMIKGfcrapWdxg10c0qlyNZ5J2") {
          navigate("/check-out");
        }

        else{
          navigate("/checkout");
        }
    
     
    }
  };


  return (
    <Wrapper className="section section-center">
      <div className="content-wrapper">
        <div className="user">
          <h3> Welcome!!! </h3>
          <h3>{Name}</h3>
        </div>

        <div className="deposit">
          <h5>Total Deposit</h5>
          <p>$ {Deposit}</p>
        </div>

        <div className="total">
          <h5>Total Payouts</h5>
          <p>$ {Payout}</p>
        </div>
      </div>

      {/* <Plans /> */}

      <h3 className="title">Deposit Form</h3>
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
              onChange={(e) => setField("Amount", e.target.value)}
              isInvalid={!!errors.Amount}
            />

            <Form.Control.Feedback type="invalid">
              {errors.Amount}
            </Form.Control.Feedback>
          </Form.Group>
{/* 
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Plan</Form.Label>
            <Form.Select>
              {t("Pricing", { returnObjects: true }).map((pricing) => {
                const { Plan } = pricing;
                return <option>{Plan}</option>;
              })}
            </Form.Select>
          </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Service</Form.Label>
            <Form.Select>
              {t("Featured", { returnObjects: true }).map((featured) => {
                const { name } = featured;
                return <option>{name}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Button onClick={handleSubmit} className="btn3" type="submit">
            Deposit
          </Button>
        </fieldset>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content-wrapper {
    margin-bottom: 2rem;
  }
  .deposit {
    /* background: var(--clr-primary-7) !important; */
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(81, 106, 166, 1) 81%,
      rgba(54, 142, 196, 1) 91%,
      rgba(72, 118, 176, 1) 95%,
      rgba(0, 212, 255, 1) 100%
    );
    padding: 0.5rem 0.5rem 0.001rem 1.4rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .total {
    /* background-color: var(--clr-red-light);
     */
    background: #44a7c4;
    padding: 0.5rem 0.5rem 0.001rem 1.4rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }

  .btn3 {
    display: block;
    background-color: #696fdd;
    padding: 10px;
    margin-top: 20px;
    color: #f6f6fe;
    border-radius: 5px;
  }
  .plans {
    text-align: center;
    margin-top: 3rem;
  }

  h5,
  p {
    color: #fff;
    font-size: 1.5rem;
  }

  .title {
    h3 {
      margin-top: 4rem;
    }
  }

  .content-wrapper {
    display: grid;
    row-gap: 1rem;

    @media (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 5rem;
    }
  }
`;

export default UserDashboard;
