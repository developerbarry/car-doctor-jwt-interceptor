import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscrbe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setIsLoading(false)
        })

        return () => {
            return unSubscrbe()
        }
    }, [])

    const authInfo = {
        createUser,
        userSignIn,
        userLogOut,
        user,
        isLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;