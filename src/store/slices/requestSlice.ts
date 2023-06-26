import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchCategories,
  fetchRandomTriviaData,
  fetchTriviaData,
} from "../../utils/api";

import { Category } from "../../interfaces/Category";
import { Question } from "../../interfaces/Question";

interface RequestState {
  isFetching: boolean;
  categories: Category[];
  activeCategory: number | null;
  questionQuery: Question[];
  quizResult: number;
}

const initialState: RequestState = {
  isFetching: false,
  categories: [],
  activeCategory: null,
  questionQuery: [] ,
  quizResult: 0,
};

export const fetchCategoriesAsync = createAsyncThunk(
  "request/fetchCategories",
  async () => {
    return fetchCategories();
  }
);

export const fetchTriviaDataAsync = createAsyncThunk(
  "request/fetchTriviaData",
  async (category: number) => {
    return fetchTriviaData(category);
  }
);
export const fetchRandomTriviaDataAsync = createAsyncThunk(
  "request/fetchRandomTriviaData",
  async () => {
    return fetchRandomTriviaData();
  }
);

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    builder.addCase(fetchTriviaDataAsync.fulfilled, (state, action) => {
      state.activeCategory = action.meta.arg;
      state.questionQuery = action.payload;
      state.isFetching = true;
    });
    builder.addCase(fetchRandomTriviaDataAsync.fulfilled, (state, action) => {
      state.activeCategory = null;
      state.questionQuery = action.payload;
      state.isFetching = true;
    });
  },
});

export default requestSlice.reducer;
export const { actions } = requestSlice;
