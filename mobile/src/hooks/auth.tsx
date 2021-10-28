import React, { createContext, useContext, useState, useEffect } from 'react'
import * as AuthSessions from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../services/api'

const SCOPE = 'read:user'
const CLIENT_ID = '3c21d15b21b7a8980aac'
const userStorage = '@mobile:user'
const tokenStorage = '@mobile:token'


type User = {
    id: string,
    avatar_url: string,
    name: string,
    login: string,
}

type AuthContextData = {
    user: User | null,
    isSignIn: boolean,
    signIn: () => Promise<void>,
    signOut: () => Promise<void>,

}

type AuthProviderProps = {
    children: React.ReactNode
}

type AuthResponse = {
    token: string,
    user: User,
}
type AuthorizationResponse = {
    params: {
        code?: string
        error?: string
    },
    type?: string
}

export const AuthContext = createContext({} as AuthContextData )



function AuthProvider({ children } : AuthProviderProps){
    const [isSignIn, setIsSignIn] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    async function signIn() {
        try {
            setIsSignIn(true)
            const authUrl=`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`
            const authSessionResponse = await AuthSessions.startAsync({ authUrl }) as AuthorizationResponse
            
            if(authSessionResponse.type === 'success' && authSessionResponse.params.error !== 'access_denied'){
                const authResponse = await api.post('/authenticate', { code: authSessionResponse.params.code })
                
                const { token, user } = authResponse.data as AuthResponse

                api.defaults.headers.common['Authorization'] = `Bearer ${token}`
                await AsyncStorage.setItem(tokenStorage, token)
                await AsyncStorage.setItem(userStorage, JSON.stringify(user))


                setUser(user)
            }

        }catch (error) {
            console.log(error)
        } finally {
            setIsSignIn(false)
        }
    }


    async function signOut() {
        setUser(null)
        await AsyncStorage.removeItem(tokenStorage)
        await AsyncStorage.removeItem(userStorage)
    }

    useEffect(() => {
        async function loadUserStorageData() {
            const user_storage = await AsyncStorage.getItem(userStorage)
            const token_storage = await AsyncStorage.getItem(tokenStorage)

            if(user_storage && token_storage){
                api.defaults.headers.common['Authorization'] = `Bearer ${token_storage}`
                setUser(JSON.parse(user_storage))
            }

            setIsSignIn(false)
        }

        loadUserStorageData()
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user,
            isSignIn
        }}>
            { children }

        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }