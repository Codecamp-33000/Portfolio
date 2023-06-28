import React from "react";
import "../globals.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
// eslint-disable-next-line react/display-name

const Circle = (props) => {
  const [countOn, setCounterOn] = useState(false);
  const number = props.number;
  const name = props.name;
  const circle = props.circle;
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="skill-group">
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <p>{countOn && <CountUp delay={0.5} end={number} duration={5} />}%</p>
            </div>
          </div>
          <svg
          className="circle-svg"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"         
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#BE04FF" />
                <stop offset="100%" stop-color="#ffffff30" />
              </linearGradient>
            </defs>
            {countOn && (
              <circle
                className={circle}
                cx="80"
                cy="80"
                r='60'
                stroke-linecap="round"
              />
            )}
          </svg>
        </div>
        <p className="pt-5 w-full text-center">{name}</p>
      </div>
    </ScrollTrigger>
  );
};

export default Circle;
