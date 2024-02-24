import React from "react";
import group1 from "./images/Group one.png";
import group2 from "./images/Group 2.png";
import group3 from "./images/Group 3.png";
import group4 from "./images/Group 4.png";
import group5 from "./images/Group 5.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SecondPage = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 992 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3
    },
    medium: {
      breakpoint: {max:768, min: 576},
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };

  return (
    <section className="w-100 mt-16">
      <h1 className="mx-auto text-center max-w-[1300px] text-white text-3xl py-5 lg:py-3">Our Course Partners</h1>
      {/* <div className="max-w-[1300px] mx-auto flex justify-around items-center border-2 py-5">

      </div> */}
      <Carousel className="max-w-[1300px] mx-auto border-2 py-7 px-5" responsive={responsive}>
        <img className="w-[10rem] mx-auto" src={group1} alt="groups" />
        <img className="w-[10rem] mx-auto" src={group2} alt="groups" />
        <img className="w-[10rem] mx-auto" src={group3} alt="groups" />
        <img className="w-[10rem] mx-auto" src={group4} alt="groups" />
        <img className="w-[10rem] mx-auto" src={group5} alt="groups" />
      </Carousel>
    </section>
  );
};

export default SecondPage;
