import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <NavLink to="/home">
      <p className="Logo left"><span>Q</span>uizzLand</p>
    </NavLink>
  );
};
export default Logo;
