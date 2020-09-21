import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeId: "products",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    changeActive(state, action) {
      state.activeId = action.payload;
    },
  },
});

export const { changeActive } = navigationSlice.actions;

export default navigationSlice.reducer;

export const selectActiveById = createSelector(
  (state, linkId) => state.navigation.activeId === linkId,
  (active) => active
);
