import React from "react";
//import icons
import css from "../img/css.svg";
import html from "../img/html.svg";
import javascript from "../img/js.svg";
import react from "../img/react.svg";
import nextjs from "../img/next-js.svg";
import redux from "../img/redux.svg";
import sass from "../img/sass.svg";
import gsap from "../img/gsap.svg";
import axios from "../img/axios.svg";
import styledcomponents from "../img/styledcomponents.svg";
//styles
import { About, Description, Image } from "../styles";
import { styled } from "styled-components";
import me from "../img/me.svg";

const ServicesSection = () => {
  return (
    <Services>
      <Des>
        <h2>
          High <span>Quality </span>Skills
        </h2>
        <Cards>
          <Card>
            <img src={css} />
            <h3>CSS3</h3>
          </Card>
          <Card>
            <img src={html} />
            <h3>HTML5</h3>
          </Card>
          <Card>
            <img src={javascript} />
            <h3>JavaScript</h3>
          </Card>
          <Card>
            <img src={react} />
            <h3>React</h3>
          </Card>
          <Card>
            <img src={nextjs} />
            <h3>Nextjs</h3>
          </Card>
          <Card>
            <img src={redux} />
            <h3>Redux</h3>
          </Card>
          <Card>
            <img src={sass} />
            <h3>Sass</h3>
          </Card>
          <Card>
            <img src={gsap} />
            <h3>Gsap</h3>
          </Card>
          <Card>
            <img src={axios} />
            <h3>Axios</h3>
          </Card>
          <Card>
            <img src={styledcomponents} />
            <h3 id="1">Styled-components</h3>
          </Card>
        </Cards>
      </Des>
      <Image>
        <img src={me} alt="me" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
    font-size: 3rem;
  }
  p {
    width: 70%;
    padding: 0rem;
  }
  h3 {
    font-size: 1rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-around;
  flex-basis: 10rem;

  .icon {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  h3 {
    color: black;
    background: white;
    margin: auto;
    padding: 0.3rem;
  }
  padding-bottom: 2rem;
`;
const Des = styled(Description)`
  padding: 2rem;
`;
export default ServicesSection;
