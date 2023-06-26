import React, { FC } from "react";

import Container from "../components/Container";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Statistic from "../components/Statistic";

interface StatisticPageProps {}

const StatisticPage: FC<StatisticPageProps> = () => (
  <div className="StatisticPage">
    <Container>
      <Header></Header>
      <div className="StatisticPage__title">
        <PageTitle label="Quiz Statistic"></PageTitle>
      </div>
      <div className="StatisticPage__charts">
        <Statistic></Statistic>
      </div>
    </Container>
  </div>
);

export default StatisticPage;
