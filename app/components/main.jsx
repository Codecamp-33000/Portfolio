/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import myImg from "../../public/image/my-image.png";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";
// eslint-disable-next-line react/display-name
function Main() {
  return (
    <div
      id="main"
      className=" w-full h-full  flex flex-col md:flex-row justify-center items-center gap-6 py-28"
    >
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-full text-white"
      >
        <Image src={myImg} />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-full px-4 flex flex-col justify-center  md:justify-start md:items-start"
      >
        <p className="text-[#cccccc] text-base pb-4">hello Everyone!</p>
        <h2 className="text-white text-[28px] md:text-3xl  duration-500 ease-in-out ">
          I'm{" "}
          <p className=" font-HelloParisScript bg-gradient-to-r from-[#00D1FF] to-white/50 inline-block  text-transparent bg-clip-text">
            <a href="/page2">Shine Wan Na</a>
          </p>
        </h2>
        <div className="w-full flex md:flex-col items-start gap-1 lg:gap-0 py-4">
          <h2 className=" font-HelloParisScript  text-[22px] md:text-2xl lg:text-3xl leading-normal lg:leading-loose uppercase bg-gradient-to-r from-[#00D1FF] to-white/50 inline-block text-transparent bg-clip-text duration-500 ease-in-out">
            Front-End Developer
          </h2>
          <p className=" font-HelloParisScript text-[22px] md:text-2xl lg:text-3xl leading-normal lg:leading-loose uppercase bg-gradient-to-r from-[#00D1FF] to-white/50 inline-block text-transparent bg-clip-text duration-500 ease-in-out"> & UI/UX Designer</p>
        </div>

        <article className="container mx-auto w-full h-full text-center md:text-left">
          <p className=" tracking-wider leading-relaxed whitespace-normal w-full text-base  text-[#cccccc] ">
            Welcome to my portfolio website, where design meets technology and
            creativity intertwines with functionality.I am a passionate
            front-end developer and UI / UX designer, and this platform
            showcases my expertise and showcases my journey in the digital
            realm.
          </p>
        </article>
        <button className="my-10  py-4 px-6 bg-gradient-to-r from-[#00D1FF] to-white/50 rounded-xl text-black">
          <a href="./ShineWanNaCV.pdf">Resume</a>
        </button>
      </motion.div>
    </div>
  );
}

export default Main;
