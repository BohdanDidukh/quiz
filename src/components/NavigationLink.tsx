import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
  link: string;
  label: string;
  icon?: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({ link, label, icon }) => (
  <div className="NavigationLink right">
    <img className="NavigationLink__icon" src={icon} alt="home"></img>
    <NavLink to={link} className="NavigationLink">
      {label}
    </NavLink>
  </div>
);

export default NavigationLink;
