import React from "react";
import { FooterEl } from "../styles";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterEl>
      <span>By</span>{" "}
      <a target="_blank" href="https://github.com/obendesmond">
        Desmond Oben
      </a>
    </FooterEl>
  );
};

export default Footer;
