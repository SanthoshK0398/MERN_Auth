import React, { useContext, useState } from 'react'
import mail_icon from '../assets/auth/mail_icon.svg'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function ResetPass() {

  const {backendUrl} = useContext(AppContext)
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [isEmailSent, setIsEmailSent] = useState('')
  const [isOtpSubmited, setIsOtpSubmited] = useState('')

    // submit email
   const onSubmitEmail = async (e) => {
    try{
        e.preventDefault();
        //api call to verify otp
        axios.defaults.withCredentials = true;

        const {data} = await axios.post(backendUrl + '/api/auth/send-reset-otp', {email})
            if(data.success){
              toast.success(data.message)
              setIsEmailSent(true)
            }else{
              toast.error(data.message)
            }
      }catch(error){
          toast.error(error.message)
        }  
   }

   // submit otp
   const onSubmitOTP = async (e) => {
    e.preventDefault()
    setIsOtpSubmited(true)
   }

   // submit new password
   const onSubmitPassword = async (e) => {
    try{
      e.preventDefault()
      const {data} = await axios.post(backendUrl + '/api/auth/reset-password',{email, otp, newPassword})

      if(data.success){
        toast.success(data.message)
        navigate('/login')
      }else{
        toast.error(data.message)
      }
    }catch(error){
      toast.error(error.message)
    }
  }

  return (

    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 '>

             {/* email sent */}
            {!isEmailSent &&
            <div className='flex flex-col items-center justify-center gap-4 p-10 bg-white shadow-lg rounded-lg w-full max-w-md'>
                <h1>Reset password</h1>
                <p>Enter you Email to reset your passwrord</p>

                <div className='mb-5'>
                  <form onSubmit={onSubmitEmail}>
                    <div className='flex items-center gap-5 mb-4 w-full px-5 py-2.5 rounded-full bg-[#BC1907]/10 text-[#BC1907]'>
                        <img src={mail_icon} alt="mail icon" className='w-4'/>
                        <input className='bg-transparent, outline-none' 
                              type="email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email} 
                              placeholder='Email id'
                              required/>
                    </div>                   

                    <button className='mb-2 w-full py-2.5 rounded-full bg-[#BC1907] text-white'>Submit</button> 
                  </form>    
                </div>
              </div>
            }
            
            {/* otp verfiy form */}
            {!isOtpSubmited && isEmailSent &&
            <div className='flex flex-col items-center justify-center gap-4 p-10 bg-white shadow-lg rounded-lg w-full max-w-md'>
               
                <h1>Reset password OTP</h1>
                <p>Enter your OTP sent to your email</p>
                <div className='mb-5'>
                    <form onSubmit={onSubmitOTP}>
                      
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
            }
            
            {/* set new password */}
            {isOtpSubmited && isEmailSent &&
            <div className='flex flex-col items-center justify-center gap-4 p-10 bg-white shadow-lg rounded-lg w-full max-w-md'>
                
                <h1>New Password</h1>
                <p>Enter your new password</p>
                <div className='mb-5'>
                  <form onSubmit={onSubmitPassword}>
                    
                    <div className='flex items-center gap-5 mb-2 w-full px-5 py-2.5 rounded-full bg-[#BC1907]/10 text-[#BC1907]'>
                        <input className='bg-transparent, outline-none' 
                               type="password"
                               onChange={(e) => setNewPassword(e.target.value)}
                               value={newPassword}
                               placeholder='Enter new password'
                               required/>
                    </div>

                    <button className='mb-2 w-full py-2.5 rounded-full bg-[#BC1907] text-white'>Submit</button> 
                  </form>
                </div>    
            </div>
            }

    </div>
  )
}

export default ResetPass