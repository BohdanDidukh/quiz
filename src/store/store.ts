import { configureStore } from "@reduxjs/toolkit";

import requestReducer from "./slices/requestSlice";
import statisicReducer from "./slices/statisticSlice";
import quizReducer from "./slices/quizSlice";

const store = configureStore({
  reducer: {
    request: requestReducer,
    statistic: statisicReducer,
    quiz: quizReducer,
  },
});

export default store;
