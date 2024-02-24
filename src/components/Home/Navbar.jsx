import React, { useState } from "react";
import OnlineEducation from "./images/Online Education.svg";
import { FaList } from "react-icons/fa";
import './Navbar.css'
import './main.scss'
import { ById } from "./GetUser";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const openNavbar = () => {
    setNavbar(!navbar);
    ById('.navbar-sm').classList.add(navbar ? 'height-visible' : 'height-hidden')
    ById('.navbar-sm').classList.remove(navbar ? 'height-hidden' : 'height-visible')
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
              <div className="flex gap-3">
                <Link to="/login"><button className="duration-300 scale-9 md:scale-1 py-3 sm:px-8 lg:px-14 whitespace-nowrap bg-[transparent] text-white rounded-[3rem] border-white border-2 active:scale-90">Login</button></Link>
                <Link to="/started"><button className="duration-300 py-3 sm:px-6 lg:px-10 whitespace-nowrap text-white bg-tugmaColor rounded-[3rem] active:scale-90">Get Started</button></Link>
              </div>
            </div>

            <div class="block lg:hidden" id="mobile-menu">
              <div className="w-[100%] flex items-center justify-between px-4">
                <div className="flex gap-1 items-center lg:gap-3">
                  <button className="bg-tugmaColor py-1 px-2 rounded-xl"><img src={OnlineEducation} alt="Online Education" /></button>
                  <h1 className="text-3xl text-white">Edujar</h1>
                </div>
                <div><FaList onClick={openNavbar} className="text-4xl text-white" /></div>
              </div>
              <div className="space-y-1 navbar-sm height-hidden overflow-hidden">
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
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
