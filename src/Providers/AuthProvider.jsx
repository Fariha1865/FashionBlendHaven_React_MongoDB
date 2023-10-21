import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {


    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    
    const initialIsDarkMode = JSON.parse(localStorage.getItem('isDarkMode') || false);
    const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);
    
    const toggleDarkMode = () => {
        
        const newIsDarkMode = !isDarkMode;
        setIsDarkMode(newIsDarkMode);
        localStorage.setItem('isDarkMode', JSON.stringify(newIsDarkMode));

    };

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            //   console.log(user)     
        });


        return () => {
            unSubscribe();
        }
    }, [auth, user])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const signIn = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        createUser,
        setUser,
        logOut,
        signIn,
        loading,
        toggleDarkMode,
        isDarkMode
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