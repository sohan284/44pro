// Inside your Redux slice (e.g., `projectSlice.js`)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gloveColors: {
    lather1: "darkgray",
    lather2: "lightgray",
    lather3: "darkgray",
    lather4: "lightgray",
    lather5: "darkgray",
    lather6: "lightgray",
    lather7: "darkgray",
    lather8: "darkgray",
    web: "gray",
    wrist: "wheat",
    palm: "darkgray",
    binding: "gray",
    logo: "black",
    laces: "black",
  },
};

const gloveSlice = createSlice({
  name: "glove",
  initialState,
  reducers: {
    setGloveColors(state, action) {
      state.gloveColors = { ...state.gloveColors, ...action.payload };
    },
  },
});

export const { setGloveColors } = gloveSlice.actions;
export default gloveSlice.reducer;
