import React, { useRef } from "react";

const Navbar = () => {

  const navAnimationRef = useRef(null)
  const barColorRef1 = useRef(null)
  const barColorRef2 = useRef(null)

  return (
    <div className="absolute  top-0 left-0 w-full z-50 text-white  flex items-start justify-between">
      <div className="w-[7.5vw] p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          viewBox="0 0 103 44"
        >
          <path
          fill="white"
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>
      <div onMouseEnter={() => {
        navAnimationRef.current.style.height = '100%'
        barColorRef1.current.style.backgroundColor = 'black'
        barColorRef2.current.style.backgroundColor = 'black'
      }}
      onMouseLeave={() => {
        navAnimationRef.current.style.height = '0%'
        barColorRef2.current.style.backgroundColor = 'white'
        barColorRef1.current.style.backgroundColor = 'white'
      }} className="h-14 w-[16vw] relative bg-black">
        <div ref={navAnimationRef} className="h-0 transition-all w-full absolute top-0 bg-[#D3FD50]"></div>
        <div className="relative flex flex-col justify-center items-end gap-1.5 p-5">
          <div ref={barColorRef1} className="w-16 h-0.5 bg-white"></div>
          <div ref={barColorRef2} className="w-10 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
