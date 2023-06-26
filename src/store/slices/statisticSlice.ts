import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StatisticState {
  correctAnswers: number;
  quizCounter: number;
  questionCounter: number;
  testTime: { minutes: number; seconds: number };
  completedCategories: string[];
  categoryCounts: Record<string, number>;
}

const initialState: StatisticState = {
  correctAnswers: 0,
  testTime: { minutes: 0, seconds: 0 },
  quizCounter: 0,
  questionCounter: 0,
  completedCategories: [],
  categoryCounts: {},
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: initialState,
  reducers: {
    incrementCorrectAnswers: (state, action) => {
      state.correctAnswers += action.payload;
    },
    addTestTime: (state, action) => {
      const { minutes, seconds } = action.payload;
      state.testTime.minutes += minutes;
      state.testTime.seconds += seconds;
      if (state.testTime.seconds > 59) {
        state.testTime.minutes += Math.floor(state.testTime.seconds / 60);
        state.testTime.seconds = state.testTime.seconds % 60;
      }
    },
    incrementQuizCounter: (state) => {
      state.quizCounter += 1;
    },
    incrementQuestionCounter: (state) => {
      state.questionCounter += 10;
    },
    incrementCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      if (!state.completedCategories.includes(category)) {
        state.completedCategories.push(category);
      }
      if (!state.categoryCounts[category]) {
        state.categoryCounts[category] = 1;
      } else {
        state.categoryCounts[category] += 1;
      }
    },
  },
});

export const {
  incrementCorrectAnswers,
  addTestTime,
  incrementQuizCounter,
  incrementQuestionCounter,
  incrementCategory,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
