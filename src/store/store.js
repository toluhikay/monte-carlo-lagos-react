import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "../features/scheduleSlice";

const store = configureStore({
  reducer: {
    scheduleModal: scheduleSlice,
  },
});

export default store;
