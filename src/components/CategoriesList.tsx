import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import { fetchCategoriesAsync } from "../store/slices/requestSlice";
import { RootState } from "../store/rootReducer";

import CategoryCard from "./CategoryCard";

interface CategoriesListProps {}

const CategoriesList: FC<CategoriesListProps> = () => {
  const dispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  const categories = useSelector(
    (state: RootState) => state.request.categories
  );

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  if (categories.length === 0) {
    return <div className="CategoriesList__message">Loading...</div>;
  }

  return (
    <div className="CategoriesList">
      {categories.map((category) => (
        <CategoryCard category={category}></CategoryCard>
      ))}
    </div>
  );
};

export default CategoriesList;
