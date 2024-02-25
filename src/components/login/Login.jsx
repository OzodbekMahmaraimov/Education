import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import './login.css';
import axios from 'axios';
import { byId } from '../Url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const Login = () => {
  localStorage.setItem("checkout", false)

  const [eye, setEye] = useState(false);
  const [login, setLogin] = useState(false);

  const eying = () => setEye(!eye);

  const openImage = () => {
    const fileInput = document.querySelector("#file_input");
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem('imageDataUrl', reader.result); // Save image data URL to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const loginIn = () => {
    openImage();
    setLogin(true);
    axios.post("https://jsonplaceholder.typicode.com/users", {
      name: byId('email'),
      email: byId("password"),
    })
      .then(res => {
        setLogin(false);
        toast.success("Siz ro'yxatdan o'tdingiz");
        document.querySelector("#checkout").click()
        // dispatch({ type: "checkout", checkout: true });
        localStorage.setItem("checkout", true)
      })
      .catch(res => {
        setLogin(false);
        toast.error("Afsuski siz ro'yxatdan o'taolmadingiz");
      });
  };

  const elseAccount = () => {
    toast.warning("Kechirasiz, ammo bu funksiya hozircha ishlamaydi.");
  };

  
  return (
    <>
      <section className='w-full h-screen login flex items-center'>
        <div className='w-[630px] h-[600px] backdrop-blur-md mx-auto bg-login flex items-center rounded-[2rem]'>
          <div className='flex flex-col gap-7 mx-auto w-[90%] sm:w-[80%] h-[88%]'>
            <h1 className='text-4xl text-white font-bold text-center sm:text-left'>Sign Up</h1>

            <div className='flex flex-col gap-2'>
              <label className='font-normal	text-xl text-white' htmlFor="email">Email</label>
              <input className='py-3 px-4 rounded-[0.5rem] outline-cyan-500' type="email" id='email' placeholder='username@gmail.com' />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='font-normal	text-xl text-white' htmlFor="password">Create Password</label>
              <div className="relative">
                <input type={eye ? "text" : "password"} id="password" className="ps-4 py-3 rounded-lg w-full outline-cyan-500" placeholder="password" />
                <div onClick={eying} className="absolute inset-y-0 end-5 flex items-center ps-3.5 cursor-pointer">
                  {eye ? <FaRegEye className='text-xl' color='#C7D2D6' /> : <FaRegEyeSlash className='text-xl' color='#C7D2D6' />}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <form>
                <label htmlFor="file-input" className="sr-only">Choose file</label>
                <input type="file" accept='image/*' id="file_input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"/>
              </form>
            </div>
            <button onClick={loginIn} className='bg-loginButton text-white font-bold text-xl py-3 rounded-xl'>
              {login ? <div role="status">
                <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div> : "Sign Up"}
            </button>
            <p className='text-white text-center font-normal'>or continue with</p>
            <div className='flex w-[90%] mx-auto justify-around sm:justify-between items-center'>
              <button onClick={elseAccount} className='bg-white px-2 py-2 sm:px-12 sm:py-3 rounded-full sm:rounded-xl'><FcGoogle className='text-2xl' /></button>
              <button onClick={elseAccount} className='bg-white px-2 py-2 sm:px-12 sm:py-3 rounded-full sm:rounded-xl'><FaGithub className='text-2xl' /></button>
              <button onClick={elseAccount} className='bg-white px-2 py-2 sm:px-12 sm:py-3 rounded-full sm:rounded-xl'><FaFacebook className='text-2xl' color='#059BE5' /></button>
            </div>
            <p className='text-center text-white'><span className='font-normal'>Don’t have an account yet?</span> <span className='font-semibold cursor-pointer'>Register for free</span></p>
          </div>
        </div>
      </section>

      <ToastContainer />
      <Link id='checkout' to="/"></Link>
    </>
  )
}

export default Login;
