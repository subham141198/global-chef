/* eslint-disable react/prop-types */
import { createContext,useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithPhoneNumber, signInWithEmailAndPassword, signOut, signInWithPopup,onAuthStateChanged, GithubAuthProvider, GoogleAuthProvider, RecaptchaVerifier  } from "firebase/auth"
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

    function setreCaptcha(number){
        const recaptchVarifier = new RecaptchaVerifier('recaptcha-container', {'size': 'invisible'}, auth);
        recaptchVarifier.render();
        return signInWithPhoneNumber(auth, number, recaptchVarifier)
    }

    // function phoneNoSignIn(phoneNumber,appVerifier){
        
        
    // }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
            console.log('auth state change', currentuser);
            setuser(currentuser);
            setloading(false)
        });
        return unsubscribe;
      }, []);
    
      const value = {
        user,loading,SignUp,Login,LogOut,signInWithGithub,signInWithGoogle, setreCaptcha
      };



    return <AuthContext.Provider  value={{...value}}>{children}</AuthContext.Provider>
}