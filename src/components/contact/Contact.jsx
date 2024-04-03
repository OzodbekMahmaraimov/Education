import React from 'react'
import message from './images/message.png'
import call from './images/call.png'
import place from './images/place.png'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import './contact.css'

const Contact = () => {

    return (
        <>
            <section className='w-full h-[60rem] md:h-screen flex md:items-center bg-[#2C1F4A]'>
                <div className='w-[70rem] lg:h-[37rem] md:h-[30rem] h-[50rem] flex md:flex-row flex-col bg-contact gap-8 md:gap-0 xl:gap-0 lg:gap-5 mx-auto py-5 px-8 rounded-[1rem]'>
                    <div className='md:w-[50%] w-[90%] mx-auto flex flex-col justify-around gap-8'>
                        <h1 className='text-white text-5xl md:text-4xl lg:text-5xl font-semibold leading-[3.5rem]'>Let’s discuss
                            on something <span className='text-contactText'>cool</span> together</h1>
                        <div className='flex flex-col gap-2 md:gap-5'>
                            <div className='flex items-center w-[60%] cursor-pointer gap-4 border-2 border-contact duration-300 transition-all hover:bg-contactPhone hover:border-contactB py-2 md:px-4 px-0 rounded-xl'>
                                <img className='w-[1rem]' src={message} alt="message img" />
                                <h4 className=' text-white text-xl md:text-lg'>SaulDesign@gmail.com</h4>
                            </div>
                            <div className='flex items-center w-[60%] cursor-pointer gap-4 border-2 border-contact duration-300 transition-all hover:bg-contactPhone hover:border-contactB py-2 md:px-4 px-0 rounded-xl'>
                                <img className='w-[1rem]' src={call} alt="call img" />
                                <h4 className=' text-white text-xl md:text-lg'>+123 456 789</h4>
                            </div>
                            <div className='flex items-center w-[60%] cursor-pointer gap-4 border-2 border-contact duration-300 transition-all hover:bg-contactPhone hover:border-contactB py-2 md:px-4 px-0 rounded-xl'>
                                <img className='w-[1rem]' src={place} alt="place img" />
                                <h4 className=' text-white text-xl md:text-lg whitespace-nowrap'>123 Street 456 House</h4>
                            </div>
                        </div>
                        <div className='flex ms-0 md:ms-5 items-center gap-5'>
                            <div className='transition-all duration-300 p-3 rounded-full cursor-pointer hover:bg-contactText'><FaFacebookF color='white' className='text-2xl md:text-xl' /></div>
                            <div className='transition-all duration-300 p-3 rounded-full cursor-pointer hover:bg-contactText'><FaInstagram color='white' className='text-2xl md:text-xl' /></div>
                            <div className='transition-all duration-300 p-3 rounded-full cursor-pointer hover:bg-contactText'><FaTwitter color='white' className='text-2xl md:text-xl' /></div>
                        </div>
                    </div>
                    <div className='md:w-[50%] w-[100%] md:py-0 py-10 mx-auto bg-contactForm rounded-[1rem] flex flex-col gap-10 px-7 justify-center'>
                        <h1 className='text-4xl md:text-5xl font-semibold text-center'>Contact me</h1>
                       <input className='py-2 outline-0 bg-contactForm border-b-2 placeholder:text-contactborder border-contactborder focus:border-focusContact placeholder:focus:text-contact placeholder:font-semibold' type="text" placeholder='Your name' />
                       <input className='py-2 outline-0 bg-contactForm border-b-2 placeholder:text-contactborder border-contactborder focus:border-focusContact placeholder:focus:text-contact placeholder:font-semibold' type="text" placeholder='Your email' />
                       <input className='py-2 outline-0 bg-contactForm border-b-2 placeholder:text-contactborder border-contactborder focus:border-focusContact placeholder:focus:text-contact placeholder:font-semibold' type="text" placeholder='Your message' />
                       <button className='bg-contactText py-3 rounded-xl flex items-center justify-center duration-300 active:scale-90'>
                        <IoIosSend className='text-2xl' color='white' />
                        <h3 className='text-white font-semibold'>Send Message</h3>
                       </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact