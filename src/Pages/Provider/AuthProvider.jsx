import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from './../../Firebase/firebase.config';
import axios from 'axios';



export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser]=useState(null)
    const [loading,setLoading]=useState(true)
   

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const goolgeLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin=()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const profile=(name,photo)=>{
       setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }

           
           
     useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) =>{
            console.log('User in the auth state changed',currentUser)
            
            const userEmail = currentUser?.email || user?.email
            const loggedUser={email: userEmail};
            setUser(currentUser)
            setLoading(false)


            if(currentUser){
           
                axios.post('https://assignment11-server-ten.vercel.app/jwt', loggedUser,{
                    withCredentials: true
                })
                .then(res=> {
                    console.log('token response11',res.data)
                })
            }
            else{
                    axios.post('https://assignment11-server-ten.vercel.app/logout',loggedUser,{
                        withCredentials: true
                    })
                    .then(res =>{
                        console.log(res.data)
                    })
            }
        });
        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo={user,createUser,logOut,createLogin,loading,profile,goolgeLogin,githubLogin,setLoading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;