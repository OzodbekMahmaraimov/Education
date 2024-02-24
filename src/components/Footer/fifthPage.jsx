import React from "react";
import education from "./images/Online Education.svg";
import phone from "./images/8666632_phone_icon 1.svg";
import message from "./images/Footer group.svg";
import location from "./images/location.svg";
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import instagram from './images/instagram.svg';
import Be from './images/be.svg';
import yer from './images/yer.svg';
import { styles } from "../util/style";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FifthPage = () => {
  return (
    <>
      <section className="w-[100%] flex flex-col items-center justify-center bg-gradient-to-b from-footerColorS to-footerColorE mt-[6rem]">
        <div className="container px-2 md:px-0 xl:w-[79%] grid md:grid-cols-8 pt-16 pb-12 md:gap-12 gap-8">
          <div className="col-span-3 flex flex-col gap-10">
            <div className="flex gap-4 ">
              <button className={`${styles.tugma} p-2`}>
                <LazyLoadImage src={education} alt="Online Education Icon" effect="blur" />
              </button>
              <h1 className="text-5xl text-white">Edujar</h1>
            </div>
            <div>
              <p className={`${styles.paragraph} text-footerPColor`}>
                Veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="col-span-2 grid">
            <h3 className="text-3xl text-white">Quick Links</h3>
            <div className="grid grid-cols-2">
              <p
                className={`${styles.paragraph} text-footerPColor cursor-pointer`}
              >
                About
              </p>
              <p
                className={`${styles.paragraph} text-footerPColor cursor-pointer`}
              >
                Blog
              </p>
              <p className={`${styles.paragraph} text-footerPColor cursor-pointer`}>
                Course
              </p>
              <p className={`${styles.paragraph} text-footerPColor cursor-pointer`}>
                Contact
              </p>
            </div>
          </div>
          <div className="col-span-3 grid">
            <h3 className="text-3xl text-white">Contact Us</h3>
            <div className="grid">
              <div className="flex gap-5 items-center">
                <img className="w-5" src={phone} alt="Phone icon" />
                <p className={`${styles.paragraph} text-footerPColor`}> (209) 555-0104</p>
              </div>
              <div className="flex gap-5 items-center">
                <img className="w-5" src={message} alt="message icon" />
                <p className={`${styles.paragraph} text-footerPColor`}> michelle.rivera@example.com</p>
              </div>
              <div className="flex gap-5 items-center">
                <img className="w-5" src={location} alt="loaction icon" />
                <p className={`${styles.paragraph} text-footerPColor`}> 2715 Ash Dr. San Jose, South Dakota 83475</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-2 md:px-0 xl:w-[79%]">
          <hr className="w-[100%] h-[1rem] text-chiziq"/>
          <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between w-[100%] py-5">
            <p className={`${styles.paragraph} text-footerPColor`}>Copyright 2023 | All Rights Reserved</p>
            <div className="flex gap-5">
              <img className="cursor-pointer" src={facebook} alt="facebook" />
              <img className="cursor-pointer" src={twitter} alt="twitter" />
              <img className="cursor-pointer" src={instagram} alt="instagramm" />
              <img className="cursor-pointer" src={Be} alt="Be" />
              <img className="cursor-pointer" src={yer} alt="yer" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FifthPage;
