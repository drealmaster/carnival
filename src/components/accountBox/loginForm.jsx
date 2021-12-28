import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import {
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  // signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../../firebase"
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom"

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  // function resetPassword(loginEmail) {
  //      return sendPasswordResetEmail(auth, loginEmail)
  //  }
 

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email"  onChange={(event) => {
    setLoginEmail(event.target.value);
  }} />
        <Input type="password" placeholder="Password"  onChange={(event) => {
    setLoginPassword(event.target.value);
  }}  />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
