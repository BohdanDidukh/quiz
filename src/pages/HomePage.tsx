import React, { FC } from "react";

import Container from "../components/Container";
import Hero from "../components/Hero";
import QuizCategories from "../components/QuizCategories";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage">
    <Container>
      <Hero></Hero>
      <QuizCategories></QuizCategories>
    </Container>
  </div>
);

export default HomePage;
