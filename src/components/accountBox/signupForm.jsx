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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function SignupForm(props) {
  // const { user } = useAuth()
  const { switchToSignin } = useContext(AccountContext);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Image, setImage] = useState("")
  console.log(Image);
  
  const [registerName, setRegisterName] = useState("");
  const [progress, setprogress] = useState(0)

const storage = getStorage();

  const navigate = useNavigate();


      const uploadFile = (file) => {
        if(!file) return;

       
       
       
       
       
       
        const storageRef = ref(storage, `${Image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        // uploadTask.on("state_changed", (snapshot) => {
        //   const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)


        //   setprogress(prog)
        // }, (err) => console.log(err),
        // () => {
        //      getDownloadURL(uploadTask.snapshot.ref)
        //      .then(url => console.log(url))
        // }
        
        // )

      }

  

  const register = async () => {
  
    if (registerPassword !== confirmPassword) {
      toast.succ("password doesnt match!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
    }


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
        payout: 0.00
      });
      // const file = e.target[0].files[0]
// console.log(file);
//  uploadFile(file)

 
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
      {/* {error ? {error} : ''} */}
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />
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
