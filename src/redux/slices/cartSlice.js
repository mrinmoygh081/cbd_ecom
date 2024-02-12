import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const loginStage = createSlice({
  name: "loginStage",
  initialState,
  reducers: {
    addCartHandler: (state, action) => {
      state.data = [...initialState.data, action.payload.data];
    },
    removeCartHandler: (state) => {
      state.data = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartHandler, removeCartHandler } = loginStage.actions;

export default loginStage.reducer;
