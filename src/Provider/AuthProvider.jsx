/* eslint-disable react/prop-types */
import { createContext,useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup,onAuthStateChanged, GithubAuthProvider  } from "firebase/auth"
import {auth} from "../Firebase/Firebase.config"
export const AuthContext = createContext(null); 
const githubAuthProvider = new GithubAuthProvider();



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


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
            console.log('auth state change', currentuser);
            setuser(currentuser);
            setloading(false)
        });
        return unsubscribe;
      }, []);
    
      const value = {
        SignUp,Login,LogOut,signInWithGithub
      };



    return <AuthContext.Provider  value={{user,loading,...value}}>{children}</AuthContext.Provider>
}

