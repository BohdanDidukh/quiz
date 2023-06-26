import { createSlice } from "@reduxjs/toolkit";

interface QuizState {
  quizResult: number;
  testTime: { minutes: number; seconds: number };
}

const initialState: QuizState = {
  quizResult: 0,
  testTime: { minutes: 0, seconds: 0 },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizResult: (state, action) => {
      state.quizResult = action.payload;
    },
    addQuizTime: (state, action) => {
      const { minutes, seconds } = action.payload;
      state.testTime.minutes = minutes;
      state.testTime.seconds = seconds;
    },
  },
});

export const { setQuizResult, addQuizTime } = quizSlice.actions;
export default quizSlice.reducer;
