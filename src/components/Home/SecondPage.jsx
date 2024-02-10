import React from "react";
import group1 from "./images/Group one.png";
import group2 from "./images/Group 2.png";
import group3 from "./images/Group 3.png";
import group4 from "./images/Group 4.png";
import group5 from "./images/Group 5.png";

const SecondPage = () => {
  return (
    <section className="w-100 mt-16">
      <h1 className="mx-auto max-w-[1300px] text-white text-3xl py-3">Our Course Partners</h1>
      <div className="max-w-[1300px] mx-auto flex justify-around items-center border-2 py-5">
        <img className="w-[9rem] sm:w-[10rem]" src={group1} alt="groups" />
        <img className="w-[9rem] sm:w-[10rem]" src={group2} alt="groups" />
        <img className="sm:block hidden w-[9rem] sm:w-[10rem]" src={group3} alt="groups" />
        <img className="lg:block hidden w-[9rem] sm:w-[10rem]" src={group4} alt="groups" />
        <img className="lg:block hidden w-[9rem] sm:w-[10rem]" src={group5} alt="groups" />
      </div>
    </section>
  );
};

export default SecondPage;
