/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import {auth} from "../Firebase/Firebase.config"
 const AuthContext = createContext(); 

export function AuthProvider({children}){
    const [user, setuser] = useState(null)
    
    function SignUp(email, password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function Login(email, password){
        return signInWithEmailAndPassword(auth,email,password)    
    }
    function LogOut(email, password){
        return signOut(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
            setuser(currentuser);
        });
        return unsubscribe;
      }, []);
    
      const value = {
        SignUp,Login,LogOut
      };



    return <AuthContext.Provider  value={{user,...value}}>{children}</AuthContext.Provider>
}

export function useUserAuth(){
    return useContext(AuthContext)
}