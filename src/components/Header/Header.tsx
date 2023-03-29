import React from "react";
import HamburgerMenu from "../../resources/HamburgerMenu";
import VvsLogo from "../../resources/Vvs-logo";
import "../../style/header.less";

const Header = () => {
  return (
    <div id="header">
      <HamburgerMenu />
      <VvsLogo />
    </div>
  );
};

export default Header;
