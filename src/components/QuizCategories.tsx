import React, { FC } from "react";

import CategoriesList from "./CategoriesList";
import Title from "./Title";

interface QuizCategoriesProps {}

const QuizCategories: FC<QuizCategoriesProps> = () => {
  return (
    <div className="QuizCategories">
      <Title label="Select Category and Test Your Knowledge!"></Title>
      <CategoriesList></CategoriesList>
    </div>
  );
};

export default QuizCategories;
