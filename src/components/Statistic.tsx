import React, { FC } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

import { RootState } from "../store/rootReducer";

import StatisticCard from "./StatisticCard";
import ResultItem from "./ResultItem";

interface StatisticProps {}

const Statistic: FC<StatisticProps> = () => {
  const categoryCounts = useSelector(
    (state: RootState) => state.statistic.categoryCounts
  );
  const correctAnswers = useSelector(
    (state: RootState) => state.statistic.correctAnswers
  );
  const totalAnswers = useSelector(
    (state: RootState) => state.statistic.questionCounter
  );
  const quizCounter = useSelector(
    (state: RootState) => state.statistic.quizCounter
  );
  const testTime = useSelector((state: RootState) => state.statistic.testTime);
  const totalSeconds = testTime.minutes * 60 + testTime.seconds;
  const averageTimePerQuestion = (totalSeconds / totalAnswers).toFixed(2);
  const averageTimePerQuiz = (totalSeconds / quizCounter).toFixed(2);
  const percentageCorrectAnswers = (
    (correctAnswers / totalAnswers) *
    100
  ).toFixed(2);
  const categoryData = Object.entries(categoryCounts).map(
    ([category, count]) => ({
      category,
      count,
    })
  );

  return (
    <div className="Statistic">
      <StatisticCard>
        <ResponsiveContainer width="100%" aspect={4 / 3}>
          {correctAnswers && totalAnswers ? (
            <PieChart>
              <Pie
                data={[
                  { name: "Correct", value: correctAnswers },
                  { name: "Incorrect", value: totalAnswers - correctAnswers },
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="100%"
                fill="#8884d8"
              >
                <Cell fill="#22313f" />
                <Cell fill="#5c6675" />
              </Pie>
              <Tooltip />
            </PieChart>
          ) : (
            <p className="StatisticCard__message">No data available</p>
          )}
        </ResponsiveContainer>
        <div className="StatisticCard__data">
          <ResultItem label="Correct Answers:" data={correctAnswers} />
          <ResultItem
            label="Incorrect Answers:"
            data={totalAnswers - correctAnswers}
          />
          <ResultItem label="Total Answers:" data={totalAnswers} />
        </div>
      </StatisticCard>
      <StatisticCard>
        <ResponsiveContainer width="100%" height={300}>
          {categoryData.length ? (
            <BarChart data={categoryData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <Tooltip
                content={({ payload }) => {
                  if (payload && payload.length) {
                    const data = payload[0]?.payload;
                    return (
                      <div>
                        <p>{data?.category}</p>
                        <p>{`Count: ${data?.count}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          ) : (
            <p className="StatisticCard__message">No data available</p>
          )}
        </ResponsiveContainer>
        <div className="StatisticCard__data">
          <ResultItem
            label="Time Spent:"
            data={`${testTime.minutes} min ${testTime.seconds} sec`}
          />
          <ResultItem
            label="Average Time per Question:"
            data={`${averageTimePerQuestion} sec`}
          />
          <ResultItem
            label="Average Time per Quiz:"
            data={`${averageTimePerQuiz} sec`}
          />
          <ResultItem
            label="Percentage of Correct Answers:"
            data={`${percentageCorrectAnswers}%`}
          />
        </div>
      </StatisticCard>
    </div>
  );
};

export default Statistic;
