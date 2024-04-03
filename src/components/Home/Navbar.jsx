import React, { useState } from "react";
import OnlineEducation from "./images/Online Education.svg";
import { FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import './Navbar.css'
import './main.scss'
import { ById } from "./GetUser";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [profile, setProfile] = useState(false);

  const openProfile = () => setProfile(!profile);

  const closePofile = (e) => {
    if (e.target === document.querySelector("#openProfile")) {
      openProfile()
    }
  }

  const openNavbar = () => {
    setNavbar(!navbar);
  }

  return (
    <>
      <section>
        <nav className="bg-gray-800 fixed w-[100%] top-0 z-10">
          <div className="container max-w-[1300px]  mx-auto py-5">
            <div className="hidden gap-2 flex-row justify-between items-center lg:flex">
              <div className="flex gap-1 items-center lg:gap-3">
                <button className="bg-tugmaColor py-1 px-2 rounded-xl"><LazyLoadImage effect="blur" src={OnlineEducation} alt="Online Education logo" /></button>
                <h1 className="lg:text-4xl sm:text-2xl text-white">Edujar</h1>
              </div>
              <div>
                <ul className="flex text-white lg:gap-[3rem]">
                  <li><a className="text-xl" href="#home">Home</a></li>
                  <li><a className="text-xl" href="#about">About</a></li>
                  <li><a className="text-xl" href="#course">Course</a></li>
                  <li><a className="text-xl" href="#blog">Blog</a></li>
                  <li><Link className="text-xl" to='/contact'>Contact</Link></li>
                </ul>
              </div>
              <div className="flex gap-3 items-center relative">
                {localStorage.getItem("checkout") ? "" :
                  <Link to="/login"><button className="duration-300 scale-9 md:scale-1 py-3 sm:px-8 lg:px-14 whitespace-nowrap bg-[transparent] text-white rounded-[3rem] border-white border-2 active:scale-90">Login</button></Link>}
                <Link to="/started"><button className="duration-300 py-3 sm:px-6 lg:px-10 whitespace-nowrap text-white bg-tugmaColor rounded-[3rem] active:scale-90">Get Started</button></Link>
                {localStorage.getItem("checkout") && <LazyLoadImage effect="blur" onClick={openProfile} className="w-11 cursor-pointer rounded-full" src={localStorage.getItem("imageDataUrl") ? localStorage.getItem("imageDataUrl") : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} alt="profile img"  />}
                <div onClick={(e) => closePofile(e)} className={`flex-col justify-between absolute w-[9rem] h-[4rem] top-8 right-7 rounded-lg bg-white ${profile ? "flex" : "hidden"}`}>
                  <h1 className="text-center text-2xl avatar-name">{localStorage.getItem("name")}</h1>
                  <h1 className="text-center avatar-job">{localStorage.getItem("job")}</h1>
                </div>
              </div>
            </div>

            <div className="block lg:hidden" id="mobile-menu">
              <div className="w-[100%] flex items-center justify-between px-4">
                <div className="flex gap-1 items-center lg:gap-3">
                  <button className="bg-tugmaColor py-1 px-2 rounded-xl"><img src={OnlineEducation} alt="Online Education" /></button>
                  <h1 className="text-3xl text-white">Edujar</h1>
                </div>
                <div>{navbar ? <IoMdClose onClick={openNavbar} className="text-4xl text-white" /> :
                  <FaList onClick={openNavbar} className="text-4xl text-white" />}
                </div>
              </div>
              <div className={`space-y-1 navbar-sm overflow-hidden ${navbar ? "height-visible" : "height-hidden"}`}>
                <a href="#home" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page" >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#course"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Course
                </a>
                <a
                  href="#blog"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  blog
                </a>
                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" to='/contact'>Contact</Link>
                {localStorage.getItem("checkout") ? "" :
                  <Link to="/login"><button className="duration-300 scale-9 md:scale-1 py-3 sm:px-8 lg:px-14 whitespace-nowrap bg-[transparent] text-white rounded-[3rem] border-white border-2 active:scale-90">Login</button></Link>}
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
