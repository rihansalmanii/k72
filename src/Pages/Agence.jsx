import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.jpg";
import img13 from "../assets/images/13.jpg";
import img14 from "../assets/images/14.jpg";

const Agence = () => {
  const imageDiv = useRef(null);
  const imageRef = useRef(null);
  const location = useLocation(); // track route

  gsap.registerPlugin(ScrollTrigger);

  const imageArray = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14
  ];

  useGSAP(() => {
    // ✅ create animation
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

    // ✅ Refresh ScrollTrigger so positions are recalculated
    ScrollTrigger.refresh();

    // ✅ Cleanup old triggers when leaving page
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [location.pathname]); // rerun when route changes

  return (
    <div>
      <div className="section-1">
        <div
          ref={imageDiv}
          className="absolute overflow-hidden object-cover h-80 w-60 bg-red-300 rounded-3xl top-64 left-[30vw]"
        >
          <img
            ref={imageRef}
            src={img1} // default to first img
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
              Notre curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs,
              une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres
              à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage
              à donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </div>
  );
};

export default Agence;
