import React, { FC } from "react";

import Header from "./Header";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import LuckyButton from "./LuckyButton";

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <div className="Hero">
    <div className="Hero__header">
      <Header></Header>
    </div>
    <div className="Hero__title">
      <HeroTitle></HeroTitle>
    </div>
    <div className="Hero__subtitle">
      <HeroSubtitle></HeroSubtitle>
    </div>
    <div className="Hero__action">
      <LuckyButton></LuckyButton>
    </div>
  </div>
);

export default Hero;
