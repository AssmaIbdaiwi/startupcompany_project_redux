import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,FacebookAuthProvider , signInWithPopup } from "firebase/auth";
import { useState } from "react";
// import { googleprovider } from "./mediaAuth";

const firebaseConfig = {
  apiKey: "AIzaSyAdvmf_VWMoSQdHCIjeShg2-gBLUybV7IE",
  authDomain: "react-app-3ff6f.firebaseapp.com",
  projectId: "react-app-3ff6f",
  storageBucket: "react-app-3ff6f.appspot.com",
  messagingSenderId: "319577778655",
  appId: "1:319577778655:web:59dad9ecbeb004cefb7c6a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const provider2 = new GoogleAuthProvider();


export const SignInWithGoogle = () => {
 

  signInWithPopup(auth, provider)
    .then((res) => {
      //console.log(userData);
      localStorage.setItem("name",res.user.displayName);
      localStorage.setItem("email",res.user.email);
    })
    .catch((error) => {
      console.log(error);
    });
};



export const SignInWithFacebook = () => {
 

  signInWithPopup(auth, provider)
    .then((res) => {
      //console.log(userData);
      localStorage.setItem("name",res.user.displayName);
      localStorage.setItem("email",res.user.email);
    })
    .catch((error) => {
      console.log(error);
    });
};




