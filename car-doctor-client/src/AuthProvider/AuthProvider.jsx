import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

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
            if (currentUser) {
                let userEmail = { email: currentUser?.email }
                axios.post('http://localhost:5000/jwt', userEmail, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
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