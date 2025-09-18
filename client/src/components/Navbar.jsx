
import logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import menu from '../assets/navbar/navmenu-icon.svg';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';


export const NavBar = () => {

    const {userData, backendUrl, setUserData, setIsLoggedIn} = useContext(AppContext);
    console.log('userData:', userData)
    const navigate = useNavigate();

    //logout function
    const logout = async () => {
      try{
        const {data} = await axios.post(backendUrl + '/api/auth/logout')
        data.success && setUserData(false)
        data.success && setIsLoggedIn(false)
        navigate('/')
      }catch(error){
        toast.error(error.message)
      }
    }

    //send opt / verify email function
    const sendVerficationOtp = async () => {
      try{
        const {data} = await axios.post(backendUrl + '/api/auth/send-verify-otp')
        if(data.success){
          navigate('/email-verify')
          toast.success(data.message)
        }else{
          toast.error(data.message)
        }
      }catch(error){
        toast.error(error.message)
      }
    }

  return (
    
    <div className="w-full mx-auto px-10 md:px-20 lg:px-40 py-1 flex items-center gap-10 justify-between bg-[#BC1907] z-[100]">
      {/* Nav logo */}
      <div>
        <img src={logo} alt="Logo" className='w-30 sm:w-30'/>
      </div>  

    {/* Nav link */}
      <div>
        <ul className="hidden md:flex items-center md:gap-5 lg:gap-15 text-white font-medium"> {/* gap lives here */}
          <li>
            <Link href="/home" className="inline-block px-1 transition hover:-translate-y-[4px] duration-500">Home</Link>
          </li>
          <li>
            <Link href="/services" className="inline-block px-1 transition hover:-translate-y-[4px] duration-500">Service</Link>
          </li>
          <li>
            <Link href="/contact" className="inline-block px-1 transition hover:-translate-y-[4px] duration-500">Contact</Link>
          </li>
        </ul>    
      </div>

      {/* Nav menu */}
      <div className='md:hidden'>
        <img src={menu} alt="Menu" className='w-10 cursor-pointer'/>
      </div>

      {/* Nav button */}
      {userData ? 
      <div className='w-10 h-10  flex items-center justify-center rounded-full bg-black text-white relative group cursor-pointer'>
        {userData.name[0].toUpperCase()}
        <div className='absolute hidden group-hover:block top-0 right-0 text-black rounded pt-12 z-10'>
            <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
                {!userData.isAccountVerified && <li onClick={sendVerficationOtp} className='px-2 py-1 hover:bg-gray-200 
                cursor-pointer'>Verify email</li>
                }
                <li onClick={logout} className='px-2 py-1 hover:bg-gray-200 cursor-pointer pr-10'>Logout</li>
            </ul>

        </div>
      </div> 
      :
        <div className='hidden md:block'>
            <button onClick={()=>navigate('/login')} className="group relative overflow-hidden px-4 py-2 rounded-3xl border text-white hover:text-[#BC1907]">
            <span className="relative z-10">Login</span>
            <span className="absolute inset-0 w-full h-full bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
        </div>
      }
      
    </div>

  )
}