import React from "react";

import Navbar from "../Navbar";

import HeroSection from "../AboutHeroSection";

import css from "../../Assets/CSS/About.module.css";

function About() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <HeroSection title2="About" />
      <section className={css.section}>
        <p>
          Hey, I've created some websites or maybe Projects I can create
          websites very well. And this website is one of them, and I've created
          this super fast because the shortage of time. <br /> <br />
          <strong>Website Links:</strong>
          <br /> <br />
          My Personal Website:{" "}
          <a href="https://techmudboy.com/" target="_blank">
            https://techmudboy.com/
          </a>{" "}
          <br /> <br />
          Web1:{" "}
          <a href="https://challengeaccept.herokuapp.com" target="_blank">
            https://challengeaccept.herokuapp.com
          </a>{" "}
          <br />
          <br />
          Web2:{" "}
          <a href="https://django-react-myweb-1.herokuapp.com" target="_blank">
            https://django-react-myweb-1.herokuapp.com
          </a>{" "}
          <br />
          <br />
          Web3:{" "}
          <a href="https://djangoweb-1.herokuapp.com" target="_blank">
            https://djangoweb-1.herokuapp.com
          </a>{" "}
          <br /> <br />
          Web4:{" "}
          <a href="https://tech-mud-1.herokuapp.com" target="_blank">
            https://tech-mud-1.herokuapp.com
          </a>{" "}
          <br /> <br />
          Web5:{" "}
          <a href="https://webcomics-react.herokuapp.com" target="_blank">
            https://webcomics-react.herokuapp.com
          </a>{" "}
          <br /> <br />
          <br />
          <br />
          <strong>Contact ME</strong>
          <br /> <br />
          <strong>gmail: </strong> mudasiralinizamani@gmail.com <br /> <br />
          <a href="https://www.linkedin.com/in/mudasir-ali-4230511ab/" target="_blank">
            Linkedin
          </a>{" "}
          <br /> <br />
          <a href="https://www.fiverr.com/users/technique969/" target="_blank">Hire ME</a>
        </p>
      </section>
    </>
  );
}

export default About;
