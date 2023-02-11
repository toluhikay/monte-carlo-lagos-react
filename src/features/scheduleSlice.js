import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scheduleModalOpen: false,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    OpenScheduleModal: (state) => {
      state.scheduleModalOpen = true;
    },
    CloseScheduleModal: (state) => {
      state.scheduleModalOpen = false;
    },
  },
});

export const { OpenScheduleModal, CloseScheduleModal } = scheduleSlice.actions;

export default scheduleSlice.reducer;
