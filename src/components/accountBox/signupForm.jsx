import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { auth, db, storage} from "../../firebase"
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import {
  collection,
  addDoc,
  setDoc,
  doc
} from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuth } from '../../context/AuthContext'

import { useNavigate } from "react-router-dom"





export function SignupForm(props) {
  // const { user } = useAuth()
  const { switchToSignin } = useContext(AccountContext);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Image, setImage] = useState("")
  
  const [registerName, setRegisterName] = useState("");

const storage = getStorage();

  const navigate = useNavigate();


      const uploadFile = (file) => {
        if(!file) return;
       
       
        const storageRef = ref(storage, `${Image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

      }

  

  const register = async () => {



    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
      );
      setRegisterEmail("")
      setRegisterPassword("")
      console.log(user.user.uid);
      // await sendEmailVerification(user)
    
      // const UserColRef = collection(db, 'users')

      // const UserDoc = UserColRef.setDoc(doc(user.user.uid))
      
      
      // addDoc(UserDoc, {
      //   name: registerName,
      //   email: registerEmail,
      //   password: registerPassword,
      //   id: user.user.uid
      // });
      
      setDoc(doc(db, 'users', user.user.uid), {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        id: user.user.uid,
        deposit: 0.00,
        payout: 0.00,
        history1: {
          id: null,
          type: null,
          amount: null,
          date: null
        },
        history2: {
          id: null,
          type: null,
          amount: null,
          date: null
        },
        history3: {
          id: null,
          type: null,
          amount: null,
          date: null
        },
        history4: {
          id: null,
          type: null,
          amount: null,
          date: null
        }
      });
  
 
      uploadFile(Image)
      navigate('/dashboard');
      
    } catch (error) {
      console.log(error.message);
    }
  };

//   sendEmailVerification(user)
//   .then((doc) => {
// console.log(doc);
//   })

  return (
    <BoxContainer>
      <FormContainer className='add'>
        <Input type="text" name="name" placeholder="Full Name" 
  onChange={(event) => {
    setRegisterName(event.target.value);
  }}  required />
        <Input type="email" placeholder="Email" name="email" onChange={(event) => {
    setRegisterEmail(event.target.value);
  }}  required />
        <Input type="password" placeholder="Password" name="password"  onChange={(event) => {
    setRegisterPassword(event.target.value);
  }}  required />
        <Input type="password" placeholder="Confirm Password"  onChange={(event) => {
    setConfirmPassword(event.target.value);
  }}    required  /> 
  <label className='label'>ID verification</label>
        <Input type="file" onChange={(event) => {
    setImage(event.target.files[0]);
  }} required  /> 
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton  onClick={register} type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
