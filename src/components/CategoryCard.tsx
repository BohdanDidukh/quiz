import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import { fetchTriviaDataAsync } from "../store/slices/requestSlice";
import { RootState } from "../store/rootReducer";

import { Category } from "../interfaces/Category";

import arrow from "../assets/img/arrow.svg";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const dispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

  const handleCategorySelect = (category: number) => {
    dispatch(fetchTriviaDataAsync(category));
  };
  return (
    <Link
      to="/quiz"
      onClick={() => handleCategorySelect(category.id)}
      className="CategoryCard"
    >
      <p className="CategoryCard__name">{category.name}</p>
      <img className="CategoryCard__icon" src={arrow} alt="arrow"></img>
    </Link>
  );
};

export default CategoryCard;
