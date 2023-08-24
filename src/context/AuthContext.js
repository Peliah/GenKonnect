import { View, Text } from 'react-native'
import React, {useState, useContext, createContext} from 'react'

export const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [authData, setAuthData] = useState(false)

    //login setup
    const login = ()=>{
        setUserToken('Hayaaaaaaaaah')
        setIsLoading(false)
        // setAuthData()
    }

    //logout setup
    const logout = () => {
        setUserToken(null)
        setIsLoading(false)
    }

    return (
        <AuthContext.Provider value={{login, logout, authData, setAuthData}}>
        	{ children }
        </AuthContext.Provider>
    );
}