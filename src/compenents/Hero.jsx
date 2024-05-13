import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hero from "/he1.png";
import hex2 from "/hero2.png";
import hex3 from "/hero3.png";
import cup from "/cup.png";
import textH from "/textH.png";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const [mainImage, setMainImage] = useState(hero);

  const parallaxRef = useRef(null);
  const imageRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });

    tl.to(
      imageRef.current,
      {
        y: 50, 
        rotate: 360,
        ease: "power2.inOut",
      },
      0
    )
    .to(
      textRef1.current,
      {
        y: -100, 
        ease: "power2.inOut",
      },
      0
    )
    .to(
      textRef2.current,
      {
        y: -100, 
      },
      0
    )
    ;

  }, []);

  const handleClick = (imagePath) => {
    setMainImage(imagePath);
  };

  const products = [
    { name: "LEMONADE" },
    { name: "CANBERRY" },
    { name: "ORIGINAL" },
    { name: "KIWI" },
    { name: "BLUE BERRY" },
    { name: "BLACK SUGAR" },
    { name: "KIWI" },
  ];
  return (
    <div   className=" py-24 flex flex-col min-h-[100vh] relative w-full">
      <div  className="text-black text-center flex justify-center items-center">
        <img ref={textRef1} src={textH} alt="" />
        {/* <h1 ref={textRef1} className="text-[180px] font-bold">ALL IN ONE</h1>
        <h1 ref={textRef2} className="text-[180px] font-bold">BUBBLE TEA</h1> */}
      </div>
      <div className="">
        <div className="absolute top-[30%] z-10 left-[40%]">
          <img src={mainImage} ref={imageRef}  className=""  alt="" />
        </div>

        <div className="flex justify-end w-[80%] mt-8 gap-3">
          <div className="relative bg-[#FFE0B5] w-[72px] h-[72px] rounded-full cursor-pointer flex justify-center items-center">
          <img src={hero} className="h-[70px] hover:scale-125 transition-all ease-out mb-3" onClick={() => handleClick(hero)} alt="" />
          </div>
         <div className="relative bg-[rgb(255,224,181)] w-[72px] h-[72px] rounded-full cursor-pointer flex justify-center items-center">
         <img src={hex2} className="h-[70px] hover:scale-125 transition-all ease-out mb-3"  onClick={() => handleClick(hex2)} alt="" />
         </div>
         <div className="relative bg-[#FFE0B5] w-[72px] h-[72px] rounded-full cursor-pointer flex justify-center items-center">
         <img src={hex3} className="h-[70px] hover:scale-125 transition-all ease-out mb-3"   onClick={() => handleClick(hex3)} alt="" />
         </div>
        </div>

        <div className="overflow-hidden ">
          <div className="w-full mt-10 h-[95px] bg-black text-white flex items-center justify-between">
            <Marquee direction="left" className="flex items-center w-full justify-between">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-10"
                >
                  <img src={cup} alt="" />
                  <p className="text-[36px] font-bold mr-10">{product.name}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="overflow-hidden ">
          <div className="w-full mt-10 h-[95px]  bg-black text-white flex items-center justify-between">
            <Marquee direction="right" className="flex items-center w-full justify-between">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-10"
                >
                  <img src={cup} alt="" />
                  <p className="text-[36px] font-bold mr-10">{product.name}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div> 

      </div>
    </div>
  );
};

export default Hero;
