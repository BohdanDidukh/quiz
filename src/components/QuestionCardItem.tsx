import React, { FC, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  incrementCorrectAnswers,
  addTestTime,
  incrementQuizCounter,
  incrementQuestionCounter,
  incrementCategory,
} from "../store/slices/statisticSlice";
import { setQuizResult, addQuizTime } from "../store/slices/quizSlice";

interface QuestionCardItemProps {
  question: string;
  answers: string[];
  category: string;
  questionNumber: number;
  nextQuestion: () => void;
  isLoaded: boolean;
}

const QuestionCardItem: FC<QuestionCardItemProps> = ({
  question,
  answers,
  category,
  questionNumber,
  nextQuestion,
  isLoaded,
}) => {
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [sortedAnswers, setSortedAnswers] = useState<string[]>([]);
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [startTime, setStartTime] = useState(0);

  const formatTime = (minutes: number, seconds: number): string => {
    return `${minutes} min ${seconds} sec`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const minutes = Math.floor(elapsedTime / 60);
      const seconds = elapsedTime % 60;
      setTimer({ minutes, seconds });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [startTime]);

  useEffect(() => {
    if (isLoaded) {
      setStartTime(Date.now());
    }
  }, [isLoaded]);

  
  useEffect(() => {
    if (selectedAnswer === answers[0]) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
  }, [selectedAnswer, answers]);
  
  const sortAnswers = useCallback(() => {
    const sorted = [...answers];
    sorted.sort(() => Math.random() - 0.5);
    setSortedAnswers(sorted);
  }, [answers]);

  useEffect(() => {
    sortAnswers();
    dispatch(incrementCategory(category));
  }, [question, answers, category, dispatch, sortAnswers]);
  
  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer === answer) {
      setSelectedAnswer("");
    } else {
      setSelectedAnswer(answer);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer("");
    nextQuestion();
  };

  const handleEndQuiz = () => {
    dispatch(setQuizResult(correctAnswersCount));
    dispatch(addTestTime(timer));
    dispatch(addQuizTime(timer));
    dispatch(incrementCorrectAnswers(correctAnswersCount));
    dispatch(incrementQuestionCounter());
    dispatch(incrementQuizCounter());
  };

  return (
    <div className="QuestionCardItem fadeIn">
      <div className="QuestionCardItem__wrapper">
        <div className="QuestionCardItem__info">
          <div className="QuestionCardItem__timer">
            Timer:<span> {formatTime(timer.minutes, timer.seconds)}</span>
          </div>
          <p className="QuestionCardItem__index">
            Question {questionNumber + 1}
            <span>/10</span>
          </p>
          <h3 className="QuestionCardItem__question">{question}</h3>
        </div>
        <div className="QuestionCardItem__action">
          {questionNumber === 9
            ? selectedAnswer !== "" && (
              <Link
                to="/result"
                className="QuestionCardItem__finish fadeIn"
                onClick={handleEndQuiz}
              >
                Finish
              </Link>
            )
            : selectedAnswer !== "" && (
              <button
                className="QuestionCardItem__next fadeIn"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )}
        </div>
      </div>
      <div className="QuestionCardItem__answers">
        {sortedAnswers.map((answer) => (
          <button
            key={answer}
            className={`QuestionCardItem__answer ${
              selectedAnswer === answer ? "active" : ""
            }`}
            onClick={() => handleAnswerSelect(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
      <div className="QuestionCardItem__action-media">
        {questionNumber === 9
          ? selectedAnswer !== "" && (
            <Link
              to="/result"
              className="QuestionCardItem__finish fadeIn"
              onClick={handleEndQuiz}
            >
              Finish
            </Link>
          )
          : selectedAnswer !== "" && (
            <button
              className={`QuestionCardItem__next fadeIn ${
                selectedAnswer ? "show" : ""
              }`}
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
          )}
      </div>
    </div>
  );
};

export default QuestionCardItem;
