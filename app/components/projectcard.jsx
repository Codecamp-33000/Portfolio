/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = (props) => {
  const icon = "text-white flex justify-center items-center";
  return (
    <div className="w-full h-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
      <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
      <Image
        className=" group-hover:scale-125 transition-all duration-500"
        src={props.image}
      />
      <div>
        <div className="absolute -bottom-full left-12 group-hover:bottom-32 group-hover:md:bottom-16 group-hover:xl:bottom-36   transition-all duration-500 z-40">
          <p className="py-6">
            Project 1 <span className="text-[#ccc] text-sm py-2">In 2022</span>
          </p>
          <h2 className="text-2xl  md:text-xl lg:text-2xl">{props.name}</h2>
          <div className="py-10 md:py-6 lg:py-10 flex items-center gap-6 md:gap-4 lg:gap-6">
            <span className={icon}>
              <SiReact size={25} />
            </span>
            <span className={icon}>
              <SiNextdotjs size={25} />
            </span>
            <span className={icon}>
              <SiTailwindcss size={25} />
            </span>
            <span className={icon}>
              <img width={25} height={25} src="" alt="" />
            </span>
            <span className={icon}>
              <img width={25} height={25} src="" alt="" />
            </span>
          </div>
          <button className="flex justify-center items-center gap-4 py-2 px-4 bg-black text-[#ccc]">
            <AiFillGithub size={30} /> code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
