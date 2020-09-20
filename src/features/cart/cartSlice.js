import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
  cartCount: 0,
  totalPrice: 0,
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartCount++;

      const { id, price } = action.payload;
      if (state.ids.includes(id)) state.entities[id].itemCount++;
      else cartAdapter.addOne(state, action.payload);

      state.totalPrice += price;
    },
    changeItemCount: {
      reducer(state, action) {
        const { itemId, itemCount } = action.payload;

        const item = state.entities[itemId];
        const diff = item.itemCount - itemCount;

        item.itemCount = itemCount;
        state.cartCount -= diff;
        state.totalPrice -= item.price * diff;
      },
      prepare(itemId, itemCount) {
        return {
          payload: { itemId, itemCount },
        };
      },
    },
    deleteItem(state, action) {
      const id = action.payload;
      const item = state.entities[id];

      cartAdapter.removeOne(state, action.payload);

      state.cartCount -= item.itemCount;
      state.totalPrice -= item.price * item.itemCount;
    },
    emptyCart(state) {
      cartAdapter.setAll(state, {});
      state.cartCount = 0;
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemsIds,
} = cartAdapter.getSelectors((state) => state.cart);

export const {
  addToCart,
  changeItemCount,
  deleteItem,
  emptyCart,
} = cartSlice.actions;

export const selectAllCartItemsCount = createSelector(
  [selectAllCartItems],
  (cartItems) => cartItems.map((item) => item.itemCount)
);

export const selectCartCount = createSelector(
  [(state) => state.cart.cartCount],
  (cartCount) => cartCount
);

export const selectTotalPrice = createSelector(
  [(state) => state.cart.totalPrice],
  (totalPrice) => totalPrice
);
