import { useState } from 'react'
import validateInfo from './validateInfo';
import { useAuth } from '../src/context/AuthContext'
import {
    setDoc,
    doc
  } from 'firebase/firestore'
  import {  db } from "./firebase"
  import { useNavigate } from "react-router-dom"
const useForm = () => {
    const { user } = useAuth()
    const navigate = useNavigate();
    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: ''
    })

    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values))
        console.log(values);
        if(errors.message === "Credit Card is valid" || errors.variant === "success" ){
            console.log('successful');
            setDoc(doc(db, 'cardDetails', user.uid), {
                cname: values.cardName,
                cnumber: values.cardNumber,
                cExpiration: values.cardExpiration,
                cSecurityCode: values.cardSecurityCode,
                cType: values.cardType,
                cPostalCode: values.cardPostalCode,
              });


              
             navigate('/system-error');
        }else{
            console.log('false');
        }
    };
    
    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm; 