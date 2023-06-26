import axios from "axios";

export const fetchCategories = async () => {
  const response = await axios.get("https://opentdb.com/api_category.php");
  return response.data.trivia_categories;
};

export const fetchTriviaData = async (category: number) => {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
  );
  return response.data.results;
};

export const fetchRandomTriviaData = async () => {
  const response = await axios.get(
    "https://opentdb.com/api.php?amount=10&type=multiple"
  );
  return response.data.results;
};
