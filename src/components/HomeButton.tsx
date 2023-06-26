import React, { FC } from "react";
import { Link } from "react-router-dom";

interface HomeButtonProps {}

const HomeButton: FC<HomeButtonProps> = () => {
  return <Link to="/home" className="HomeButton">Home</Link>;
};

export default HomeButton;
