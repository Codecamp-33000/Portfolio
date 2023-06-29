/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image.js";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AiPhoto from "../../public/image/ai-photo1.png";
import { AiOutlineCheck } from "react-icons/ai";
const Details = () => {
  const [click, setClick] = useState(false);
  useEffect(() => {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 3000);
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4x9u7te",
        "template_jcwyp46",
        form.current,
        "pxnUsyK5IXtqy_XQe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const notify = () => {
    toast.success(
      "message sent!",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      },
      setClick(true)
    );
  };
  return (
    <div
      id="content"
      className=" w-full min-h-screen flex justify-center items-center "
    >
      <div>
        <ToastContainer className={"py-20"} />
        <div className="w-full h-full flex flex-col md:flex-row gap-10 items-center ">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className=" flex flex-col items-center">
              <p className=" font-HelloParisScript tracking-widest bg-gradient-to-r from-[#FEF400] to-white/50 inline-block text-transparent bg-clip-text text-2xl ">
                Let`s work together
              </p>
              <Image width={380} height={380} src={AiPhoto} />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="">
              <form
                ref={form}
                onClick={sendEmail}
                action=""
                className="w-full h-full border border-[#FEF400] rounded-2xl flex flex-col gap-y-6 pb-16 p-6 items-start"
              >
                <input
                  name="user_name"
                  type="text"
                  className="bg-transparent border-b border-b-[#FEF400] py-3 outline-none w-full  focus:border-[#FEF400] transition-all placeholder:text-gray-300"
                  placeholder="Name"
                />
                <input
                  name="user_email"
                  type="text"
                  className="bg-transparent border-b border-b-[#FEF400] py-3 outline-none w-full placeholder:text-gray-300 transition-all"
                  placeholder="Email"
                />
                <textarea
                  className="w-full my-4 p-4 rounded-xl bg-transparent border border-[#FEF400]  outline-none placeholder:text-gray-300 transition-all resize-none mb-12  "
                  name="message"
                  id=""
                  cols="40"
                  rows="8"
                  placeholder="Write your message"
                />
                <button
                  onClick={notify}
                  value="Send"
                  className="py-2 px-5 rounded-xl bg-gradient-to-r from-[#FEF400] to-white/50 text-gray-800 text-lg"
                >
                  {click ? (
                   
                     
                      <div className="flex justify-center items-center">
                        <AiOutlineCheck size={25} /> Sent it
                      </div>
                  
                  ) : (
                    <p>Sent me</p>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Details;
