import React, { useState } from "react";
import Card from "./Card";
import laptop1 from './images/laptop one.png'
import laptop2 from './images/laptop two.png'
import laptop3 from './images/laptop three.png'
import kubik from './images/kubik_rubik.png'
import list from './images/lists.png'

const FourthPage = () => {
    const [course, setCourse] = useState("design")

    const courses = (page) => setCourse(page)

    const kurslarDesign = [
        { image: laptop1 },
        { image: laptop2 },
        { image: list },
    ]

    const kurslarDevelopment = [
        { image: laptop3 },
        { image: kubik },
        { image: list },
    ]

    return (
        <>
            <div className="relative bottom-16" id="course"></div>
            <section>
                <div className="max-w-[1300px] mx-auto mt-20">
                    <div className="w-full flex flex-col lg:flex-row items-center justify-between">
                        <h1 className="text-3xl lg:text-4xl text-white whitespace-nowrap mb-4 lg:mb-0">Popular <span className="text-fTextColor">Courses</span></h1>
                        <div className="flex flex-wrap gap-2 lg:gap-4 justify-center" role="group">
                            <button onClick={() => courses("design")} type="button" className={`px-6 xl:px-8 py-3 xl:py-4 text-xl ${course === 'design' && "bg-tugmaColor"} whitespace-nowrap text-white rounded-full duration-200 hover:bg-tugmaColor active:scale-90`}>
                                Design
                            </button>
                            <button onClick={() => courses("development")} type="button" className={`px-6 xl:px-8 py-3 xl:py-4 text-xl ${course === 'development' && "bg-tugmaColor"} whitespace-nowrap text-white rounded-full duration-200 hover:bg-tugmaColor active:scale-90`}>
                                Development
                            </button>
                            <button onClick={() => courses("bussiness")} type="button" className={`px-6 xl:px-8 py-3 xl:py-4 text-xl ${course === 'bussiness' && "bg-tugmaColor"} whitespace-nowrap text-white rounded-full duration-200 hover:bg-tugmaColor active:scale-90`}>
                                Bussiness
                            </button>
                            <button onClick={() => courses("data")} type="button" className={`px-6 xl:px-8 py-3 xl:py-4 text-xl ${course === 'data' && "bg-tugmaColor"} whitespace-nowrap text-white rounded-full duration-200 hover:bg-tugmaColor active:scale-90`}>
                                Data Science
                            </button>
                            <button onClick={() => courses("marketing")} type="button" className={`px-6 xl:px-8 py-3 xl:py-4 text-xl ${course === 'marketing' && "bg-tugmaColor"} whitespace-nowrap text-white rounded-full duration-200 hover:bg-tugmaColor active:scale-90`}>
                                Marketing
                            </button>
                        </div>
                    </div>
                    <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-1 gap-y-6">
                        {course === 'design' && kurslarDesign.map((item, idx) => (
                            <Card key={idx} job="design" image={item.image} />
                        ))}
                        {course === 'development' && kurslarDevelopment.map((item, idx) => (
                            <Card key={idx} job="development" image={item.image} />
                        ))}
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default FourthPage;
