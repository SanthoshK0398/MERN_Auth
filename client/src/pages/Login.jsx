
import { useState } from 'react'
import profile_icon from '../assets/auth/person_icon.svg'
import mail_icon from '../assets/auth/mail_icon.svg'
import lock_icon from '../assets/auth/lock_icon.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext} from '../context/AppContext'
import axios from 'axios'
import {toast} from 'react-toastify'

const Login = () => {

    const navigate = useNavigate();

    const {backendUrl, setIsLoggedIn, getUserData} = useContext(AppContext)

    const [state, setState] = useState('Sign Up')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async(e) => {
        
        try{
            e.preventDefault();
            console.log("Form submitted:", {name, email, password, state});

            axios.defaults.withCredentials = true;

            if(state === 'Sign Up'){
            const {data} = await axios.post(backendUrl + '/api/auth/register', {name, email, password})
            console.log('API Response:', data);

                if(data.success){
                    setIsLoggedIn(true)
                    getUserData()
                    navigate('/')
                }else{
                    toast.error(data.message)
                }   
            }else{
                const {data} = await axios.post(backendUrl + '/api/auth/login', {email, password})

                if(data.success){
                    setIsLoggedIn(true)
                    getUserData()
                    navigate('/')
                }else{
                    toast.error(data.message)
                }  
            }
        }catch(error){
            toast.error(error.message)
        }
    }

    //password reset function
    const sendResetPasswordOtp = async () => {
      navigate('/reset-pass')
    }

  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 '>
        <div className='flex flex-col items-center justify-center gap-5 p-10 bg-white shadow-lg rounded-lg w-full max-w-md'>
            <h2 className='text-[#BC1907] text-3xl'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
            <p className='text-[#BC1907]'>{state === 'Sign Up' ? 'Create Your Account' : 'Login to Your Account'}</p>

            <form onSubmit={onSubmitHandler}>
                {state === 'Sign Up' && (
                    <div className='flex items-center gap-5 mb-4 w-full px-5 py-2.5 rounded-full bg-[#BC1907]/10 text-[#BC1907]'>
                        <img src={profile_icon} alt="person icon" className='w-4'/>
                        <input className='bg-transparent, outline-none' 
                            type="text" 
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder='Full Name'
                            required/>
                    </div>
                )}
                
                <div className='flex items-center gap-5 mb-4 w-full px-5 py-2.5 rounded-full bg-[#BC1907]/10 text-[#BC1907]'>
                    <img src={mail_icon} alt="mail icon" className='w-4'/>
                    <input className='bg-transparent, outline-none' 
                           type="email"
                           onChange={(e) => setEmail(e.target.value)}
                           value={email} 
                           placeholder='Email id'
                           required/>
                </div>
                <div className='flex items-center gap-5 mb-2 w-full px-5 py-2.5 rounded-full bg-[#BC1907]/10 text-[#BC1907]'>
                    <img src={lock_icon} alt="password icon" className='w-4'/>
                    <input className='bg-transparent, outline-none' 
                           type="password"
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                           placeholder='Password'
                           required/>
                </div>

                <p onClick={sendResetPasswordOtp} className='mb-4 cursor-pointer text-[#BC1907] text-[12px]'>Forgot password?</p>

                <button type='submit' className='mb-2 w-full py-2.5 rounded-full bg-[#BC1907] text-white'>{state}</button>
                
            </form>

            {state === 'Sign Up' ? (
                    <p className=' flex items-center justify-center text-[10px] text-[#BC1907] '>Already have an account? 
                        <span onClick={()=>setState('Login')} className='font-bold underline cursor-pointer'>Login here</span>
                    </p>
                ) : (
                    <p className=' flex items-center justify-center text-[10px] text-[#BC1907] '>Don't have an account? 
                        <span onClick={()=>setState('Sign Up')} className='font-bold underline cursor-pointer'>Sign Up</span>
                    </p>
                )}

        </div>
    </div>
  )
}

export default Login