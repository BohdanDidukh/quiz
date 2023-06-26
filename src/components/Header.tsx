import React, { FC } from "react";

import homeIcon from "../assets/img/home.svg";
import statisticIcon from "../assets/img/statistic.svg";

import NavigationLink from "./NavigationLink";
import Logo from "./Logo";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="Header">
      <NavigationLink link="/home" label="Home" icon={homeIcon} />
      <Logo></Logo>
      <NavigationLink
        link="/statistic"
        label="Statistic"
        icon={statisticIcon}
      />
    </div>
  );
};
export default Header;
