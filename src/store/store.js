import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "../features/scheduleSlice";
import pictureModalSlice from "../features/pictureModalSlice";
import downloadBrochureSlice from "../features/downloadBrochureSlice";

const store = configureStore({
  reducer: {
    scheduleModal: scheduleSlice,
    pictureModal: pictureModalSlice,
    downloadBrochure: downloadBrochureSlice,
  },
});

export default store;
