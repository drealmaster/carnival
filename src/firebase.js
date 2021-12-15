// import firebase from "firebase/app"
// import "firebase/auth"

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

// export const auth = app.auth()
// export default app

import { initializeApp } from 'firebase/app'
import {getAuth} from "firebase/auth"
import {
  getFirestore,collection,getDocs,
  // addDoc
} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebase = {
  apiKey: "AIzaSyCeWcWRQqx-oGcnekBvb4m8eX2XW5JXjoY",
    authDomain: "carnivalnew.firebaseapp.com",
  // //   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "carnivalnew",
    storageBucket:"carnivalnew.appspot.com",
    messagingSenderId: "155969265824",
    appId: "1:155969265824:web:1968ea46c222892bb929c5"
}

const app = initializeApp(firebase)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);
// collection ref

const colRef = collection(db, 'books')


// Get collection datas

getDocs(colRef)
.then((snapshot) => {
  let books = []
  snapshot.docs.forEach((doc) => {
books.push({ ...doc.data(), id: doc.id })
  })
  console.log(books);
})
.catch(err => {
  console.log(err.message);
})

