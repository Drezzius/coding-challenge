import React from "react";
import IconHamburgerMenu from "../../resources/IconHamburgerMenu";
import VvsLogo from "../../resources/Vvs-logo";
import "../../style/header.less";

const Header = () => {
  return (
    <div id="header">
      <IconHamburgerMenu />
      <VvsLogo />
    </div>
  );
};

export default Header;
