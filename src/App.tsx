import React from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import StatisticPage from "./pages/StatisticPage";

import "./styles/main.scss";

function App() {
  return (
    <>
      <header>
        <a href="/quiz">Quiz</a>
        <a href="/results">Results</a>
        <a href="/statistic">Statistic</a>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
      </Routes>
      <Link to="quiz"></Link>
    </>
  );
}

export default App;
