import React from "react";
import home1 from "../img/p.jpeg";
//styled
import styled from "styled-components";
import { About, Description, Image } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Animation";
//wave
import Wave from "./wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h6 variants={titleAnim}>Hassan Amin Shah</motion.h6>
          </Hide>
          <Hide>
            <motion.h3 variants={titleAnim}>
              Your
              <span> Front-End </span>
              <br /> Developer
            </motion.h3>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me to make any website that you want because I am a
          professional who work with passion and have amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Animation" />
      </Image>
      <Wave />
    </About>
  );
};

//styled component
const Hide = styled.div`
  overflow: hidden;
  h6 {
    font-size: 2.8rem;
    color: white;
  }
  h3 {
    font-size: 2rem;
    span {
      color: #23d997;
      font-size: 2.3rem;
    }
  }
`;

export default AboutSection;
