import { createContext, useEffect, useState } from "react";
import app from "../Authentication/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const provider = new GoogleAuthProvider();


export const Authcontext = createContext()
const Authprovider = ({children}) => {
    const [loading ,setloading]=useState(false)

    const auth = getAuth(app);

    const [user,setuser]=useState([])

    const signinwithgoogle =()=>{
        return signInWithPopup(auth,provider)
    }
 
    const signinuser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    
    
    const signupuser =(email,password )=>{
        return  createUserWithEmailAndPassword(auth,email ,password )
  
      }
   
      const updateuserprofile =(displayName,photoURL)=>{
        setloading(true)
        
        return updateProfile(auth.currentUser,{
            photoURL:photoURL,displayName:displayName
        })
    }

      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentuser)=>{
        
            console.log(currentuser);
            setuser(currentuser)
           
        })

        return ()=>{
            return unsubscribe 
        }
    },[])

    const logout =()=>{
 
        return signOut(auth)
    }

    const authinfo ={
        user,signupuser,updateuserprofile,logout,signinwithgoogle,signinuser,loading,setloading
    }
  

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
            
        </Authcontext.Provider>
    );
};

export default Authprovider;