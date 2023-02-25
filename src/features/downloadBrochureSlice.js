import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const downloadSlice = createSlice({
  name: "downloadBrochure",
  initialState,
  reducers: {
    SetModalOpen: (state) => {
      state.isOpen = true;
    },
    SetModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { SetModalClose, SetModalOpen } = downloadSlice.actions;
export default downloadSlice.reducer;
