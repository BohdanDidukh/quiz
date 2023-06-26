import React, { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/rootReducer";

import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";
import QuestionCard from "../components/QuestionCard";

interface QuizPageProps {}

const QuizPage: FC<QuizPageProps> = () => {
  const questionQuery = useSelector(
    (state: RootState) => state.request.questionQuery[0]?.category
  );

  return (
    <div className="QuizPage">
      <Container>
        <Header></Header>
        <div className="QuizPage__wrapper">
          <div className="QuizPage__title">
            <Title label={questionQuery}></Title>
          </div>
          <div className="QuizPage__card">
            <QuestionCard></QuestionCard>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QuizPage;
