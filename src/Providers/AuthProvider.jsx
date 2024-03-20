/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import{ createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true);

    const createSignup =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const createLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const createLogOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

  

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('crnt user',currentUser);
            setLoading(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])

    const authUser={
     auth,
     user,
     loading,
     createSignup,
     createLogin,
     createLogOut
    }

   

    return (
        <div>
           <AuthContext.Provider value={authUser}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;