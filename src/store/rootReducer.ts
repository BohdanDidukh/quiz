import { combineReducers } from "redux";

import requestReducer from "./slices/requestSlice";
import statisicReducer from "./slices/statisticSlice";
import quizReducer from "./slices/quizSlice";

const rootReducer = combineReducers({
  request: requestReducer,
  statistic: statisicReducer,
  quiz: quizReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
