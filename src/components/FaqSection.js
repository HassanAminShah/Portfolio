import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span> FAQ</span>
      </h2>
      <Toggle title="What would your opening pitch be?">
        <div className="answer">
          <p> Well to sum it up in a few words</p>
          <p>
            I would like to work in a place where everyday I work on my skill
            set and strive hard for the growth of the company aswell as myself.
          </p>
        </div>
      </Toggle>
      <Toggle title="Why become a developer?">
        <div className="answer">
          <p> The answer to that is quite simple.</p>
          <p>
            I really fell for the rush of when you code something and it
            literally comes into existence the second you press enter.
          </p>
        </div>
      </Toggle>
      <Toggle title="Any interets?">
        <div className="answer">
          <p>A question to be pondered upon alot but for now</p>
          <p>
            There is alot of which fascinates me in the tech world, as it is an
            area that requires life long learning, I genuianly dont want to miss
            on anything
          </p>
        </div>
      </Toggle>
      <Toggle title="What is my work ethic like?">
        <div className="answer">
          <p> Let's get this straight.</p>
          <p>
            If I get stuck in a problem, nothing else crosses my mind for the
            slightest untill i come through with the solution, whether it be a
            real world problem or a bug in my code.
          </p>
        </div>
      </Toggle>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
    font-size: 2.2rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 0rem 2rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
