import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { decode } from "he";

import { RootState } from "../store/rootReducer";

import QuestionCardItem from "./QuestionCardItem";
import HomeButton from "./HomeButton";

interface QuestionCardProps {}

const QuestionCard: FC<QuestionCardProps> = () => {
  const isFetching = useSelector(
    (state: RootState) => state.request.isFetching
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionQuery = useSelector(
    (state: RootState) => state.request.questionQuery
  );

  if (!questionQuery || questionQuery.length === 0) {
    return (
      <div className="QuestionCard__message">
        Loading... If the page takes too long to load, please return to the
        homepage.
        <div className="QuestionCard__home">
          <HomeButton></HomeButton>
        </div>
      </div>
    );
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questionQuery[currentQuestionIndex];
  const { question, correct_answer, incorrect_answers } = currentQuestion;
  const answers = [correct_answer, ...incorrect_answers];
  const category = currentQuestion.category;
  const decodedQuestion = decode(question);
  const decodedAnswers = answers.map((answer) => decode(answer));

  return (
    <div className="QuestionCard">
      {isFetching ? (
        <QuestionCardItem
          isLoaded={true}
          question={decodedQuestion}
          category={category}
          answers={decodedAnswers}
          questionNumber={currentQuestionIndex}
          nextQuestion={handleNextQuestion}
        />
      ) : (
        <div>Error</div>
      )}
    </div>
  );
};

export default QuestionCard;
