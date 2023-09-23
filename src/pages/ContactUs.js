import React from "react";
//animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../Animation";
import styled from "styled-components";

import phone from "../img/phone.svg";
import gmail from "../img/gmail.svg";
import linkedin from "../img/linkedIn.svg";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <img src={phone} alt="" />
            <h2>+92 335 2700077</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <img src={gmail} alt="" />
            <h2>hasanaminshah@gmail.com</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <img src={linkedin} alt="" />
            <h2>
              <a href="https://www.linkedin.com/in/hassan-amin-shah/">
                Linkedin
              </a>
            </h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background: white;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  color: black;
  h2 {
    font-size: 3rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    font-size: 2rem;
    margin: 2rem;
    a {
      font-size: 2rem;
    }
  }
`;
export default ContactUs;
