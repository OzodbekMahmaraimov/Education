import React from "react";
import avatar from './images/Avatar.png'
import { styles } from "../util/style";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OnePage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <div id="home" className="absolute top-0"></div>
      <section>
        <div className="flex md:flex-row gap-7 flex-col justify-around container max-w-[1300px] mx-auto pt-[7rem]">
          <div className="flex flex-col gap-10 lg:gap-12 xl:ps-0 ps-5 justify-center">
            <h1 className="lg:text-7xl text-5xl text-white leading-[4rem] lg:leading-[5rem] w-[100%] xl:w-[75%]" ><span className="text-fTextColor">Best courses</span> are waiting to enrich your skill <span className="text-tugma2"> + + + </span></h1>
            <p className="text-footerPColor text-lg w-[94%] xl:w-[75%]">
              Provides you with the latest online learning system and material that
              help your knowledge growing.
            </p>
            <form className="xl:w-[75%] w-[90%] py-2 px-5 rounded-[3rem] bg-white flex justify-around sm:justify-between items-center" action="">
              <input className="border-0 outline-none py-3 w-[70%]" type="text" placeholder="🔍Want to learn" />
              <input onClick={handleSubmit} className={`${styles.tugma} py-3 md:py-4 px-7 md:px-10 rounded-[12rem] cursor-pointer`} type="submit" />
            </form>
          </div>
          <div>
            <div className="sm:bg-tugmaColor md:m-0 flex justify-center items-center rounded-[45%] md:rounded-full">
              <LazyLoadImage className="w-[30rem] md:py-0 py-12 lg:max-w-[27rem]" src={avatar} alt="Onilne Education" effect="blur" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnePage;
