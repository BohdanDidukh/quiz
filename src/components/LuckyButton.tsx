import React, { FC } from "react";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../store/rootReducer";
import { fetchRandomTriviaDataAsync } from "../store/slices/requestSlice";

interface LuckyButtonProps {}

const LuckyButton: FC<LuckyButtonProps> = () => {
  const dispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  const handleLuckyButton = () => {
    dispatch(fetchRandomTriviaDataAsync());
  };

  return (
    <Link to="/quiz" onClick={handleLuckyButton} className="LuckyButton">
      <p className="LuckyButton__label">I'm lucky</p>
      <p className="LuckyButton__hint">*random quiz*</p>
    </Link>
  );
};
export default LuckyButton;
