import React from "react";
import Container from "./container";
import {
  FaEnvelope,
  FaFileAlt,
  FaGithubAlt,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4 lg:flex-1">
            Let's chat.
          </h3>
          <div className="flex flex-row items-center lg:pl-4">
            <a href="http://linkedin.com/in/keyuebao" className="p-3">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/keyuebao" className="p-3">
              <FaGithubAlt />
            </a>
            <a href="https://github.com/keyuebao" className="p-3">
              <FaFileAlt />
            </a>
            <a href="mailto:keyue.bao@gmail.com" className="p-3">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
