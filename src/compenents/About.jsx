import React from "react";
import teabb from "/teabb.png";
import lma from "/lma.png";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="py-24 flex flex-col relative px-[60px] font-arvo">
      <div className="flex justify-between items-center">
        <div className="relative">
          <img src={teabb} alt="" />
          <div className="mid">
            <div className="py-4 px-5 flex justify-between items-center bg-[#F9F5ED] shadow rounded-2xl gap-5">
              <img src={lma} alt="" />
              <p className="font-charmonman">
                We are always open for you ! We promise you pleasant company and
                delisious drinks!
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="relative z-20">
            <h1 className="text-[36px]">
              All-in one{" "}
              <span className="font-kalam font-extrabold">Bubble tea</span>
            </h1>
            <h1 className="text-[36px]">Wholesale Supply</h1>
            <p className="mt-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              labore et dolore magna ad minim veniam, quis nostrud ut labore et
              dolore eiusmod tempor incididunt ut labore et dolore magna aliqua
              magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              aliqua. laboris ut aliquip ea consequat.{" "}
            </p>
            <p className="mt-3 mb-6">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco aliqua.
              laboris ut aliquip ea consequat.{" "}
            </p>
            <button className="flex justify-center gap-2 items-center py-3 px-3 bg-[#841717] text-white rounded-2xl shadow-lg">
              Go to the menu{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
