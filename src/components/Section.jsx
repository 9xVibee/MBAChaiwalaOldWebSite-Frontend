import React from "react";
import { motion } from "framer-motion";

function Section({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  ImgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) {
  const headingOptions = {
    initial: {
      y: "-100%",
      opacity: "0",
    },
    whileInView: {
      y: "0",
      opacity: "1",
    },
  };

  const textAnimationOption = {
    ...headingOptions,
    Transition: {
      delay: 0.4,
    },
  };

  const buttonAnimation = {
    initial: {
      y: "100%",
      opacity: "0",
    },
    whileInView: {
      y: "0",
      opacity: "1",
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };

  const ImgAnimation = {
    initial: {
      scale: 0.1,
      opacity: "0",
    },
    whileInView: {
      scale: 1,
      opacity: "1",
    },
    transition: {
      delay: 0.3,
    },
  };
  return (
    <section
      className="section"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div>
        <motion.h3
          style={{
            color: headingColor,
          }}
          data-cursorpointer={true}
          {...headingOptions}
        >
          {" "}
          {h3}
        </motion.h3>

        <motion.p
          style={{
            color: textColor,
          }}
          data-cursorpointer={true}
          {...textAnimationOption}
        >
          {text}
        </motion.p>

        {hasBtn && (
          <motion.button
            style={{
              color: btnColor,
              backgroundColor: btnBgColor,
            }}
            data-cursorpointer={true}
            {...buttonAnimation}
          >
            {btnTxt}
          </motion.button>
        )}
        <div>
          <motion.img
            src={ImgSrc}
            alt="network Issue"
            style={{
              width: imgSize,
            }}
            {...ImgAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default Section;
