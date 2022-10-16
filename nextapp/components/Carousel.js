import { Carousel } from 'antd';
import React from 'react';

const contentStyle = {
  height: '80vh',
  color: '#fff',
  lineHeight: '80vh',
  textAlign: 'center',
  background: '#364d79',
};

const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
      </Carousel>
    </>
    // <Carousel>
      
    // </Carousel>
  );
};

export default App;

// import { useRef } from "react";

// const Carousel = () => {
//   const imageContainer = useRef();


//   const onPrev = () => {
//     const curEl = imageContainer.current.getElementsByClassName("translate-x-0")[0];
//     for(let el of imageContainer.current.getElementsByClassName("translate-x-full")){
//       el.classList.remove("translate-x-full")
//       el.classList.add("-translate-x-full")
//     }
//     curEl.classList.add("translate-x-full")    
//     curEl.classList.remove("translate-x-0")
//     if(!curEl.nextSibling){   
//       imageContainer.current.firstChild.classList.remove("-translate-x-full")
//       imageContainer.current.firstChild.classList.remove("translate-x-full")
//       imageContainer.current.firstChild.classList.add("translate-x-0") 
//     }
//     else{ 
//       curEl.nextSibling.classList.remove("-translate-x-full")
//       curEl.nextSibling.classList.remove("translate-x-full")
//       curEl.nextSibling.classList.add("translate-x-0")   
//     }
//   }
  
//   const onNext = () => {
//     const curEl = imageContainer.current.getElementsByClassName("translate-x-0")[0];
//     for(let el of imageContainer.current.getElementsByClassName("-translate-x-full")){
//       el.classList.remove("-translate-x-full")
//       el.classList.add("translate-x-full")
//     }
//     curEl.classList.add("-translate-x-full")    
//     curEl.classList.remove("translate-x-0")
//     if(!curEl.previousSibling){ 
//       imageContainer.current.lastChild.classList.remove("-translate-x-full")
//       imageContainer.current.lastChild.classList.remove("translate-x-full")
//       imageContainer.current.lastChild.classList.add("translate-x-0")   
//     }
//     else{
//       curEl.previousSibling.classList.remove("-translate-x-full")
//       curEl.previousSibling.classList.remove("translate-x-full")
//       curEl.previousSibling.classList.add("translate-x-0")    
//     }
//   }

//   return (
//     <>
//       <div id="default-carousel" className="relative" data-carousel="slide">
//           <div ref={imageContainer} className="relative h-[56] overflow-hidden rounded-lg md:h-96">
//               <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-10" data-carousel-item="">
//                   <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//               </div>
//               <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
//                   <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//               </div>
//               <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
//                   <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//               </div>
//           </div>
//           <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//               <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//               <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//               <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//           </div>
//           <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="" onClick={onPrev}>
//               <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                   <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
//                   <span className="sr-only">Previous</span>
//               </span>
//           </button>
//           <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="" onClick={onNext}>
//               <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                   <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
//                   <span className="sr-only">Next</span>
//               </span>
//           </button>
//       </div>
//     </>
//   )
// }

// export default Carousel;