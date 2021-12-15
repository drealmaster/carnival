import React, { useContext, useEffect, useState } from "react"
import { auth } from "../firebase"
import {
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(true)


 

  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
     });

    return unsubscribe
  }, [])

  const value = {
    // signup,
     user,
    // login,
    
    // logout,
    // resetPassword,
    // updateEmail,
    // updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


