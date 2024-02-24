import React from "react";
import { styles } from "../util/style";
import avatar from './images/screen 2.png'
import User from './images/Users.png';
import Cap from './images/GraduationCap.png';
import Video from './images/VideoCamera.png';
import Users from './images/UsersThree.png';
import Insturement from "./Insturement";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SecondPage = () => {
  return (
    <section id="about" className="w-100">
      <div className="container mx-auto px-2 md:px-0 xl:w-[79%] grid grid-cols-1 gap-x-5 gap-y-5 lg:mt-[7rem] mt-[5rem] sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col gap-y-5 justify-center lg:justify-start">
          <h1 className={`${styles.footerText} `}>
            What is our <span className="text-fTextColor">differnce</span>
          </h1>
          <p className="text-footerPColor text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ex ea
            commodo consequat.{" "}
          </p>
          <p className="text-footerPColor text-[18px]">
            {" "}
            ut labore et dolore magna aliqua. ex ea commodo consequat.{" "}
          </p>
          <div>
            <button className={`${styles.tugma} px-10 py-4`}>Learn More</button>
          </div>
        </div>
        <div>
          <div className="avatar bg-avatarBg rounded-full">
            <LazyLoadImage className="py-3 sm:w-full" src={avatar} alt="..." effect="blur" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start lg:justify-center">
          <div className="flex flex-col gap-y-10 w-full lg:w-[70%] xl:w-[80%]">
            <Insturement src={Cap} text1={'300'} text2={'Instructor'} />
            <Insturement src={User} text1={'20,000'} text2={'Student'} />
            <Insturement src={Video} text1={'10,000+'} text2={'Video'} />
            <Insturement src={Users} text1={'1,00,000+'} text2={"User's"} />

          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
