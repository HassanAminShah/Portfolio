import styled from "styled-components";
import { motion } from "framer-motion";
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 1rem 1rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  padding-left: 7rem;
  img {
    width: 100%;
    max-height: 50%;
    object-fit: cover;
    z-index: 2;
  }
  @media (max-width: 1300px) {
    padding: 2rem;
    img {
      width: 80%;
      max-height: 30%;
      object-fit: cover;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
  h6 {
    font-size: 4rem;
    color: white;
  }
  h7 {
    font-size: 3rem;
    color: #23d997;
  }
`;
