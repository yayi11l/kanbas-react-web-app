import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "../Courses/Assignment/reducer";
const store = configureStore({
  reducer: {
    assignmentsReducer,
  },
});
export default store;