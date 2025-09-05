import React from "react";

const FullScreenNav = () => {
  return (
    <div className="h-screen w-full  bg-black text-white overflow-y-hidden">
      <div className="flex justify-between p-5">
        <div className="w-[7.5vw]">
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
      <div className="relative h-[9vh] w-[9vh] cursor-pointer">
        <div className="absolute h-[12vh] w-0.5 bg-white origin-top -rotate-45"></div>
        <div className="absolute h-[12vh] w-0.5 bg-white origin-top right-0 rotate-45"></div>
        
      </div>
      </div>
      <div className="py-32 overflow-x-hidden ">
        <div className="link relative border-y-[1px] ">
          <h1 className="text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Projects</h1>
          <div className="moveLink h-0 absolute flex bg-[#D3FD50] text-black top-0 ">
            <div className="moveX flex items-center  ">
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full"  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            <div className="moveX flex items-center overflow-x-auto ">
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full"  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            
          </div>
        </div>
        <div className="link relative border-y-[1px] ">
          <h1 className="text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">agence</h1>
          <div className="moveLink h-0 absolute flex bg-[#D3FD50] text-black top-0 ">
            <div className="moveX flex items-center  ">
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full"  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            <div className="moveX flex items-center overflow-x-auto ">
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full"  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            
          </div>
        </div>
        <div className="link relative border-y-[1px] ">
          <h1 className="text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">contact</h1>
          <div className="moveLink h-0 absolute flex bg-[#D3FD50] text-black top-0 ">
            <div className="moveX flex items-center  ">
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full"  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            <div className="moveX flex items-center overflow-x-auto ">
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full"  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            
          </div>
        </div>
        <div className="link relative border-y-[1px] ">
          <h1 className="text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">blogue</h1>
          <div className="moveLink h-0 absolute flex bg-[#D3FD50] text-black top-0 ">
            <div className="moveX flex items-center  ">
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full"  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            <div className="moveX flex items-center overflow-x-auto ">
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full"  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap text-[7.5vw] font-[font2] uppercase text-center leading-[0.8] mt-3">Pour Tout Voir</h2>
                <img className="h-24 shrink-0 w-64 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            
          </div>
        </div>
</div>
    </div>
  );
};
export default FullScreenNav;


