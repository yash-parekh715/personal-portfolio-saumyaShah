import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Wrapper from "./Wrapper";
import man from "../assets/saumya.png";
import externalLinkIcon from "../assets/external-link-icon.png";
import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";

const HeroBanner = () => {
  // const navItems = ["Intro", "XP", "Word", "PM"];
  const [change, setChange] = useState("Home");
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const socialIconsStyle = {
    position: "fixed",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  };

  const iconStyle = {
    margin: "10px",
    fontSize: "24px",
    color: "#333",
  };
  return (
    <div
      id="hero"
      className="w-full h-[100vh] relative bg-[#111111] overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <motion.span
        ref={ref}
        animate={{ x, y }}
        className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
      />
      <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
      <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

      <Wrapper>
        {/* NAVBAR START */}
        <motion.div
          className="hidden md:flex items-center justify-center mt-[15px] 2xl:mt-[15px] relative"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="fixed top-0 tr h-[4.5rem] rounded-none border z-10 border-white border-opacity-40 bg-whte bg-opacity-10 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-4 sm:h-[3.25rem] sm:rounded-full dark:bg-[#3A192C] dark:border-black/40 dark:bg-opacity-50 px-2">
            <ul className="flex justify-center h-full items-center w-full text-[20px]">
              <li
                className={`cursor-pointer px-5 py-2 hover:bg-[#52233E] transition active:scale-90 rounded-full ${
                  change == "Home" ? "bg-[#3A192C]" : ""
                }`}
                onClick={() => {
                  scrollTo("hero");
                  setChange("Home");
                }}
              >
                Home
              </li>
              <li
                className={`cursor-pointer px-5 py-2 hover:bg-[#52233E] transition active:scale-90 rounded-full ${
                  change == "Intro" ? "bg-[#3A192C]" : ""
                }`}
                onClick={() => {
                  scrollTo("about");
                  setChange("Intro");
                }}
              >
                Intro
              </li>
              <li
                className={`cursor-pointer px-5 py-2 hover:bg-[#52233E] transition active:scale-90 rounded-full ${
                  change == "XP" ? "bg-[#3A192C]" : ""
                }`}
                onClick={() => {
                  scrollTo("skills");
                  setChange("XP");
                }}
              >
                XP
              </li>
              <li
                className={`cursor-pointer px-5 py-2 hover:bg-[#52233E] transition active:scale-90 rounded-full ${
                  change == "Work" ? "bg-[#3A192C]" : ""
                }`}
                onClick={() => {
                  scrollTo("work");
                  setChange("Work");
                }}
              >
                Work
              </li>
              <li
                className={`cursor-pointer px-5 py-2 hover:bg-[#52233E] transition active:scale-90 rounded-full ${
                  change == "PM" ? "bg-[#3A192C]" : ""
                }`}
                onClick={() => {
                  scrollTo("contact");
                  setChange("PM");
                }}
              >
                PM
              </li>
            </ul>
          </div>
        </motion.div>
        {/* NAVBAR END */}

        {/* BIG HEADING START */}
        <motion.div
          className="flex justify-center text-center mt-14 mb-10 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[50px] md:text-[120px] 2xl:text-[120px] leading-[50px] md:leading-[125px]  2xl:leading-[140px] font-oswald uppercase">
            Founder by profession
            <br className="invisible md:visible" />
            Polymath by passion
          </h1>
        </motion.div>
        {/* BIG HEADING END */}

        {/* INTRO START */}
        <motion.div
          className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="font-light mb-4">
            👋 Hi, I Am <span className="font-semibold">Saumya Shah,</span>
          </div>
          <div className="max-w-[510px]">
            A passionate and outcome-driven founder
          </div>
        </motion.div>
        {/* INTRO END */}

        {/* NUMBER BLOCK START */}

        <motion.div
          className="hidden md:flex gap-8 relative z-10"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {/* START */}
          <div className="flex items-center gap-3">
            <div className="text-[70px] font-light">2</div>
            <div className="leading-[42px]">STARTUPS</div>
          </div>
          {/* END */}

          {/* START */}
          <div className="flex items-center gap-3">
            <div className="text-[70px] font-light">25+</div>
            <div className="leading-[42px]">
              HARDWARE
              <br />
              PARTNERS
            </div>
          </div>
          {/* END */}
        </motion.div>
        {/* NUMBER BLOCK END */}

        {/* PERSON BLOCK START */}
        <motion.div
          className="w-[300px] md:w-[360px] 2xl:w-[350px] absolute bottom-0 left-[50%] -translate-x-1/2"
          initial={{ y: 200, x: "-50%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={man} alt="" />

          {/* HIRE ME BUTTON START */}
          <div
            className="absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[140px] h-[140px] rounded-full bg-white/[0.7] flex flex-col justify-center items-center gap-2 backdrop-blur-sm cursor-pointer transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90"
            onClick={() => scrollTo("contact")}
          >
            <img src={externalLinkIcon} alt="" className="w-[15px]" />
            <div className="text-black">PM</div>
          </div>
          {/* HIRE ME BUTTON END */}
        </motion.div>
        {/* PERSON BLOCK END */}
      </Wrapper>
      <div style={socialIconsStyle}>
        <a href="https://www.linkedin.com/in/saumyashhah/" style={iconStyle}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/servalabs/" style={iconStyle}>
          <i className="fab fa-github"></i>
        </a>
        <a href="https://x.com/saumyashhah/" style={iconStyle}>
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
