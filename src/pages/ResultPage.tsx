import React from "react";

import Header from "../components/Header";
import Container from "../components/Container";
import Title from "../components/Title";
import ResultCard from "../components/ResultCard";

const ResultPage = () => {
  return (
    <div className="ResultPage">
      <Container>
        <Header></Header>
        <div className="ResultPage__title">
          <Title label="Your Results"></Title>
        </div>
        <div className="ResultPage__card">
          <ResultCard></ResultCard>
        </div>
      </Container>
    </div>
  );
};

export default ResultPage;
