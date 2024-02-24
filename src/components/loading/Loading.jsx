import React, { useEffect } from 'react';
import "./loading.css"

const Loading = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadingSection = document.querySelector('.loading-sect');
      if (loadingSection) {
        loadingSection.style.display = 'none';
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='w-full h-screen loading-sect fixed top-0 z-30 left-0 bg-[#263038] flex justify-center items-center'>
      <span className="loader"></span>
    </section>
  );
}

export default Loading;
