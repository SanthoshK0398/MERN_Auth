import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const EmailEverify = () => {

   const [otp, setOtp] = useState('')
   const {backendUrl, getUserData, isLoggedIn, userData} = useContext(AppContext)
   const navigate = useNavigate();

   const onSubmitHandler = async (e) => {
    try{
        e.preventDefault();
        console.log("Form submitted:", {otp});
        //api call to verify otp
        axios.defaults.withCredentials = true;

        const {data} = await axios.post(backendUrl + '/api/auth/verify-otp', {otp})
            if(data.success){
              toast.success(data.message)
              getUserData()
              navigate('/')
            }else{
              toast.error(data.message)
            }
      }catch(error){
          toast.error(error.message)
        }  
   }

   useEffect(()=>{
    isLoggedIn && userData && userData.isAccountVerified && navigate('/')
   }, [isLoggedIn, userData])

  return (

    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 '>
            <div className='flex flex-col items-center justify-center gap-5 p-10 bg-white shadow-lg rounded-lg w-full max-w-md'>
                <h1>Email Verify OTP</h1>
                <p>Enter the 6-digit code sent to you registered email</p>
    
                <form onSubmit={onSubmitHandler}>
                    <div className='flex items-center gap-5 mb-2 w-full px-5 py-2.5 rounded-full bg-[#BC1907]/10 text-[#BC1907]'>
                        <input className='bg-transparent, outline-none' 
                               type="text"
                               onChange={(e) => setOtp(e.target.value)}
                               value={otp}
                               placeholder='Enter 6-digit OTP'
                               required/>
                    </div>

                    <button className='mb-2 w-full py-2.5 rounded-full bg-[#BC1907] text-white'>Submit</button> 
                </form>
            </div>
    </div>

  )
}

export default EmailEverify