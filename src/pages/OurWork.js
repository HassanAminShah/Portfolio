import React from "react";
import explore from "../img/explore.png";
import photon from "../img/photon.png";
import colors from "../img/colors.png";
import waves from "../img/waves.png";
import travelly from "../img/travelly.png";
import beatmaker from "../img/beatmaker.png";

import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
} from "../Animation";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Project>
        <motion.h2 variants={fade}> Explore </motion.h2>
        <motion.div className="line">
          <a
            href="https://explore-topaz.vercel.app/"
            target="_blank"
            className="i"
          >
            <Hide>
              <motion.img
                style={{ objectFit: "cover" }}
                variants={photoAnim}
                src={explore}
                alt="explore"
              />
            </Hide>
          </a>
        </motion.div>
      </Project>
      <Project>
        <h2> Photon </h2>
        <div className="line">
          <a href="https://photon-by-hassan.vercel.app/" target="_blank">
            <img src={photon} alt="photon" />
          </a>
        </div>
      </Project>
      <Project>
        <h2> Beatmaker </h2>
        <div className="line">
          <a href="https://beat-maker-by-hassan.vercel.app/" target="_blank">
            <img src={beatmaker} alt="beatmaker" />
          </a>
        </div>
      </Project>
      <Project>
        <h2> Colors </h2>
        <div className="line">
          <a href="https://colors-chi-nine.vercel.app/" target="_blank">
            <img style={{ objectFit: "cover" }} src={colors} alt="colors" />
          </a>
        </div>
      </Project>
      <Project>
        <h2> Waves </h2>
        <div className="line">
          <a href="https://music-player-by-hassan.vercel.app/" target="_blank">
            <img src={waves} alt="waves" />
          </a>
        </div>
      </Project>
      <Project>
        <h2> Travelly </h2>
        <div className="line">
          <a href="https://travelly-by-hassan.vercel.app/" target="_blank">
            <img src={travelly} alt="travelly" />
          </a>
        </div>
      </Project>
      <ScrollTop />
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  background: white;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled.div`
  padding-bottom: 60rem;

  @media (max-width: 1300px) {
    padding-bottom: 80rem;
  }
  .line {
    height: 0.5rem;
    margin-bottom: 3rem;
    img {
      width: 100%;
      height: 95vh;
      object-fit: cover;
      border-style: solid;
      border-color: lightgreen;
      @media (max-width: 1300px) {
        display: inline-block;
        object-fit: cover;
      }
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
//frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
