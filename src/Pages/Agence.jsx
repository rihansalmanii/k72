import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Agence = () => {
  const imageDiv = useRef(null);
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDiv.current, {
      scrollTrigger: {
        trigger: imageDiv.current,
       
        start: "top 30%",
        end: "top -75%",
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          let imgIndex = Math.min(
            Math.floor(elem.progress * imageArray.length),
            imageArray.length - 1
          );
          imageRef.current.src = imageArray[imgIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="section-1">
        <div
          ref={imageDiv}
          className="absolute overflow-hidden object-cover h-80 w-60 bg-red-300 rounded-3xl top-64 left-[30vw]"
        >
          <img
            ref={imageRef}
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2] mt-[55vh]">
          <div className="text-[22vw] leading-[17vw] text-center">
            <h1>
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[50%] mt-14">
            <p className="text-5xl leading-[3vw]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </div>
  );
};

export default Agence;
