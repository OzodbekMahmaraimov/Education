import React from "react";
import ellipse1 from "./images/Ellipse 1202.png";
import ellipse2 from "./images/Group 512830.png";
import vector1 from './images/Vector 89.svg';
import vector2 from './images/Vector 90.svg';
import ellipse3 from './images/Ellipse 1204.png';
import ellipse4 from './images/Ellipse 1205.png';
import ellipse5 from './images/Ellipse 1206.png';
import ellipse6 from './images/Ellipse 1207.png';
import ellipse7 from './images/Ellipse 1208.png';
import { styles } from "../util/style";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ThirdPge = () => {
  

  return (
    <>
      <div className="relative bottom-16" id="blog"></div>
      <section>
        <h1 className="text-6xl mx-auto text-white text-center py-[4rem]">
          Testimonials
        </h1>
        <div className="container px-2 md:px-0 mx-auto xl:w-[79%] grid grid-cols-6 md:gap-0 gap-10">
          <div className="flex md:col-span-4 col-span-6 flex-col gap-7 px-7 py-12 bg-testimonial border-2 border-solid border-borderC rounded-lg overflow-hidden">
            <div className="w-[100%] flex md:flex-row flex-col-reverse justify-between">
              <div className="flex gap-4">
                <LazyLoadImage className="w-[3rem] h-[3rem]" src={ellipse1} alt="..." effect="blur" />
                <div>
                  <h1 className="text-testimonialText text-3xl">Adam Smith</h1>
                  <p className="text-footerPColor">Python Developer</p>
                </div>
              </div>
              <div className="md:p-0 ps-[4rem]">
                <img src={ellipse2} alt="..." />
              </div>
            </div>
            <div>
              <hr className="bg-dark h-[10px] py-2 w-[100%]" />
            </div>
            <div className="w-[100%] overflow-hidden">
              <div className="w-[200%] flex duration-300" id="slide">
                <p className="text-footerPColor text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <p className="text-footerPColor text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
              </div>
            </div>
            <div className="w-100 flex justify-end">
              <div className="flex gap-4 w-100">
                <img className="w-[1.5rem] cursor-pointer active:scale-90" src={vector2} alt="swipe left icon" />
                <img className="w-[1.5rem] cursor-pointer active:scale-90" src={vector1} alt="swipe right icon" />
              </div>
            </div>
          </div>

          <div className="flex md:col-span-2 gap-6 col-span-6 flex-col items-center justify-evenly ">
            <LazyLoadImage effect="blur" className="w-[7rem]" src={ellipse5} alt="..." />
            <div className="w-[50%] flex flex-row justify-between">
              <LazyLoadImage className={styles.images} src={ellipse4} alt="..." effect="blur" />
              <LazyLoadImage className={styles.images} src={ellipse3} alt="..." effect="blur" />
            </div>
            <div className="w-[50%] flex flex-row justify-between">
            <LazyLoadImage className={styles.images} src={ellipse6} alt="..." effect="blur" />
            <LazyLoadImage className={styles.images} src={ellipse7} alt="..." effect="blur" />
            </div>
            {/* <img src={ellipse7} alt="..." /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdPge;
