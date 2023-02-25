import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  src: "",
};

const pictureSlice = createSlice({
  name: "pictureModal",
  initialState,
  reducers: {
    SetModalOpen: (state, action) => {
      state.isOpen = true;
      state.src = action.payload;
    },
    SetModalClose: (state) => {
      state.isOpen = false;
      state.src = "";
    },
  },
});

export const { SetModalClose, SetModalOpen } = pictureSlice.actions;
export default pictureSlice.reducer;
