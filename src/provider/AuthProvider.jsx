import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);  
    const [loading, setLoading] = useState(true);    
    
    // create account 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login 
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google login 
    const provider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // logout 
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // forget password 
    const forgetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    // delete account 
    const delUser = auth.currentUser
    const deleteAccount = () => {
        setLoading(true)
        return deleteUser(delUser)
    }

    // update profile
    const updateUserProfile = (userData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userData)
    }
    
// npm build, firebase deploy
    
   useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => unSubscribe();
    },[])
    

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        googleLogin,
        logoutUser,
        updateUserProfile,
        loading,
        setLoading,
        forgetPassword,
        deleteAccount,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;