/* eslint-disable react/prop-types */
import { createContext,useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithPhoneNumber, signInWithEmailAndPassword, signOut, signInWithPopup,onAuthStateChanged, GithubAuthProvider, GoogleAuthProvider  } from "firebase/auth"
import {auth} from "../Firebase/Firebase.config"
export const AuthContext = createContext(null); 
const githubAuthProvider = new GithubAuthProvider();
const googleAuthProvider = new GoogleAuthProvider();



export function AuthProvider({children}){
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    
    function SignUp(email, password){
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function Login(email, password){
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)    
    }
    function LogOut(){
        setloading(true)
        return signOut(auth)
    }
    function signInWithGithub(){
        setloading(true)
        return signInWithPopup(auth,githubAuthProvider)
    }
    function signInWithGoogle(){
        setloading(true)
        return signInWithPopup(auth,googleAuthProvider)
    }
    function phoneNoSignIn(phoneNumber,appVerifier){
        setloading(true)
        return signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
            console.log('auth state change', currentuser);
            setuser(currentuser);
            setloading(false)
        });
        return unsubscribe;
      }, []);
    
      const value = {
        user,loading,SignUp,Login,LogOut,signInWithGithub,signInWithGoogle,phoneNoSignIn
      };



    return <AuthContext.Provider  value={{...value}}>{children}</AuthContext.Provider>
}