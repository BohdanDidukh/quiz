import React, { FC } from "react";

interface HeroTitleProps {}

const HeroTitle: FC<HeroTitleProps> = () => (
  <h1 className="HeroTitle">
    Welcome to the really awesome <span>Q</span>uizzLand
  </h1>
);

export default HeroTitle;
