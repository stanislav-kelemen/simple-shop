import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const navigationAdapter = createEntityAdapter();

const initialState = navigationAdapter.getInitialState({
  ids: ["products", "cart"],
  entities: {
    products: { to: "/", className: "active", content: "Product list" },
    cart: { to: "/cart", className: "", content: "Cart" },
  },
  activeId: "products",
});

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    changeActive: {
      reducer(state, action) {
        const { activeId } = action.payload;
        if (activeId === state.activeId) return;

        state.entities[state.activeId].className = "";
        state.entities[activeId].className = "active";

        state.activeId = activeId;
      },
      prepare(activeId) {
        return {
          payload: { activeId },
        };
      },
    },
  },
});

export const { changeActive } = navigationSlice.actions;

export default navigationSlice.reducer;

export const {
  selectById: selectNavigationById,
  selectIds: selectNavigationIds,
} = navigationAdapter.getSelectors((state) => state.navigation);
