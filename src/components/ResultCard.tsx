import React, { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/rootReducer";

import ResultItem from "./ResultItem";
import HomeButton from "./HomeButton";

interface ResultCardProps {}

const ResultCard: FC<ResultCardProps> = () => {
  const quizResult = useSelector((state: RootState) => state.quiz.quizResult);
  const testTime = useSelector((state: RootState) => state.quiz.testTime);
  const incorrectAnswersCount = 10 - quizResult;
  const totalSeconds = testTime.minutes * 60 + testTime.seconds;
  const averageTimePerQuestion = (totalSeconds / 10).toFixed(2);
  const percentageCorrectAnswers = ((quizResult / 10) * 100).toFixed(2);

  const getScoreText = (score: number) => {
    if (score === 10) {
      return "Congratulations! You answered all the questions correctly!";
    } else if (score >= 7) {
      return "Great job! You answered most of the questions correctly.";
    } else if (score >= 5) {
      return "Not bad! Your answers were partially correct.";
    } else {
      return "Keep improving! You need more practice.";
    }
  };

  const scoreText = getScoreText(quizResult);

  return (
    <div className="ResultCard">
      <div className="ResultCard__wrapper">
        <h2 className="ResultCard__conclusion">{scoreText}</h2>
        <div className="ResultCard__info">
          <ResultItem label="Correct Answers:" data={quizResult} />
          <ResultItem label="Incorrect Answers:" data={incorrectAnswersCount} />
          <ResultItem
            label="Time Spent:"
            data={`${testTime.minutes} min ${testTime.seconds} sec`}
          />
          <ResultItem
            label="Average Time per Question:"
            data={`${averageTimePerQuestion} sec`}
          />
          <ResultItem
            label="Percentage of Correct Answers:"
            data={`${percentageCorrectAnswers}%`}
          />
        </div>
        <div className="ResultCard__home">
          <HomeButton></HomeButton>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
