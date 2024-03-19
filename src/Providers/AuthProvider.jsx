/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import{ createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from "../firebase/firebase.config";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true);

    const createSignup =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const createLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authUser={
     auth,
     user,
     loading,
     createSignup,
     createLogin
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