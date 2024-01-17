import React, { useState } from "react";
import svg from "../Assets";
import "./../../App.css";
import { Links } from "./links";

export const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [isDisplay, setDisplay] = useState(false);

  const handleBurgerClick = () => {
    setActive(!isActive);
    setDisplay(!isDisplay);
  };
  return (
    <>
      <div className="navbar bg-white  relative z-20 flex justify-between  items-center px-5 py-5 md:px-20 md:py-3 lg:px-24 lg:py-4">
        <div className="w-24 h-10 md:w-28 md:h-14 lg:h-20 lg:w-36  xl:h-24 xl:w-48 ">
          <img src={svg} alt="logo" className="w-full" />
        </div>

        <div className="nav-Btn flex">
          <button className="md:text-black font-sora font-normal md:font-medium md:mr-4 md:border-solid md:p-2 md:px-5 md:bg-[#FCBB17] md:border-2 md:rounded-full lg:mr-6 lg:px-7  ">
            Let's Talk
          </button>

          <button
            className={`burger ${isActive ? "active" : ""}`}
            onClick={handleBurgerClick}
          ></button>
        </div>
      </div>
      <nav
        className={`nav flex duration-1000 opacity-0 h-full w-full absolute top-0 z-10 bg-[#111111] flex-col md:flex-row  ${
          isDisplay ? "opacity-100" : ""
        }`}
      >
        <Links />

        <div className="absolute font-sora flex flex-col justify-around  bottom-[10%] translate-x-[-38%] left-[36%] text-left w-[90%] list-none text-[13px] md:left-[75%] md:w-[27%] md:bottom-[40%] md:[-15%] md:flex-col lg:text-xl xl:bottom-[28%]  ">
          <div className="px-5">
            <div className="text-gray-400 ">Get in touch </div>
            <ul className="flex justify-between md:flex-col">
              <li>
                <a href="*" act className="">
                  info@teamxtech.com
                </a>
              </li>
              <li>
                <a href="*">+92 123 456789</a>
              </li>
            </ul>
          </div>
          <div className=" social-link py-3 px-5  md:px-5 md:mt-2 ">
            <div className="text-gray-400">Social</div>
            <ul className="flex justify-between md:flex-col">
              <li>
                <a href="*">linkedin</a>
              </li>
              <li>
                <a href="*">Facebook</a>
              </li>
              <li>
                <a href="*">instagram</a>
              </li>
              <li>
                <a href="*">twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute font-sora text-center bottom-[2%]  w-[100%]  list-none md:pr-24 md:text-right lg:bottom-[4%]">
          @ TeamXTech 2024
        </div>
      </nav>
    </>
  );
};
