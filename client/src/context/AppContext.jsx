import { useEffect, useState } from "react";
import { AppContext } from "./AppContext.js";
import axios from "axios";
import { toast } from "react-toastify";



export const AppContextProvider = (props) => {

    axios.defaults.withCredentials = true 

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    console.log('backendUrl:', backendUrl);

    const [isLoggedIn, setIsLoggedIn] = useState('')
    const [userData, setUserData] = useState('')


    const getAuthState = async () => {
        try{    
            const {data} = await axios.get(backendUrl + '/api/auth/is-auth')
            if(data.success){
                setIsLoggedIn(true)
                getUserData()
            }
        }catch(error){
            toast.error(error.message)
        }
    }

    const getUserData = async () => {
        try{
            const {data} = await axios.get(backendUrl + '/api/user/user-data')
            data.success ? setUserData(data.userData) : toast.error(data.message)
        }catch(error){
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getAuthState()
    },[])

    const value ={
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData,
        getUserData,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}