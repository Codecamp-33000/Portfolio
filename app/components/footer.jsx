"use client";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMessage,
  AiOutlineHeatMap,
} from "react-icons/ai";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";

const Footer = () => {
  return (
    <motion.div
      className=" font-Butler h-full bg-black  text-gray-300  mt-36"
      variants={fadeIn("top", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-[1000px]  mx-auto w-full h-38 flex flex-col gap-4 justify-between items-center p-4">
        <div className="text-xl tracking-widest font-HelloParisScript">Portfolio Website</div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="flex justify-center items-center gap-4 py-2">
            <a href="https://www.facebook.com/shine33000?mibextid=ZbWKwL">
              <AiFillFacebook
                size={30}
                className="border py-1 rounded-full cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/in/shine-wan-na-509a29262">
              <AiFillLinkedin
                size={30}
                className="border py-1 rounded-full cursor-pointer"
              />
            </a>
            <a href="https://github.com/Codecamp-33000">
              <AiFillGithub
                size={30}
                className="border py-1 rounded-full cursor-pointer"
              />
            </a>
            <a href="https://instagram.com/sxine_1500?igshid=MzNlNGNkZWQ4Mg==">
              <AiFillInstagram
                size={30}
                className="border py-1 rounded-full cursor-pointer"
              />
            </a>
            <a href="http://codecamp33000@gmail.com">
              <AiFillMessage
                size={30}
                className="border py-1 rounded-full cursor-pointer"
              />
            </a>
          </div>
          <p className="flex items-center justify-center gap-4 text-sm py-2">
            <BsFillTelephoneFill />
            09676330001
          </p>
          <p className="flex items-center justify-center gap-4 text-sm">
            <FaMapMarkerAlt />
            No.(64),119street Mingalar Taung Nyunt Yangon{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
