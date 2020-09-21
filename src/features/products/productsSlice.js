import {createAsyncThunk, createEntityAdapter, createSelector, createSlice, nanoid,} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const result = await axios.get(`${process.env.PUBLIC_URL}/products.json`);
    return Object.values(result.data).map((obj) => {
      obj.id = nanoid();
      obj.hidden = (obj.available <= 0)
      return obj;
    });
  }
);

const productsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = productsAdapter.getInitialState({
  status: "idle",
  error: null,
  sortBy: "name",
  isAscending: true,
  isOutVisible: false,
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: {
      reducer: productsAdapter.addOne,
      prepare(name, price, available) {
        return {
          payload: {
            id: nanoid(),
            name,
            price,
            available,
          },
        };
      },
    },
    changeSortBy: {
      reducer(state, action) {
        const {sortBy} = action.payload;
        state.sortBy = sortBy;
      },
      prepare(sortBy) {
        return {
          payload: {sortBy},
        };
      },
    },
    changeIsAscending: {
      reducer(state, action) {
        const {isAscending} = action.payload;
        state.isAscending = isAscending;
      },
      prepare(isAscending) {
        return {
          payload: {isAscending},
        };
      },
    },
    sortProducts(state) {
      let sortByFunc;
      switch (state.sortBy) {
        case "name":
          sortByFunc = (a, b) => a.name.localeCompare(b.name);
          break;
        case "price":
          sortByFunc = (a, b) => +a.price - +b.price;
          break;
        case "availability":
          sortByFunc = (a, b) => +a.available - +b.available;
          break;
        default:
          break;
      }

      const sortIds = (a, b) =>
        sortByFunc(state.entities[a], state.entities[b]);

      const isAscendingSort = state.isAscending
        ? (a, b) => sortIds(a, b)
        : (a, b) => sortIds(b, a);

      state.ids.sort(isAscendingSort);
    },
    reverseOrder(state) {
      state.ids.reverse();
    },
    changeIsOutVisible(state) {
      state.isOutVisible = !state.isOutVisible;
    },
    buyCart: {
      reducer(state, action) {
        const cartItems = action.payload;

        cartItems.forEach((item) => {
          state.entities[item.id].available -= item.itemCount;
        });
      },
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      productsAdapter.upsertMany(state, action.payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
  addProduct,
  buyCart,
  changeIsOutVisible,
  sortProducts,
  reverseOrder,
  changeSortBy,
  changeIsAscending,
} = productsSlice.actions;

export default productsSlice.reducer;

export const {
  selectById: selectProductById,
  selectIds: selectProductsIds,
} = productsAdapter.getSelectors((state) => state.products);

export const selectIsOutVisible = createSelector(
  (state) => state.products.isOutVisible,
  (isOutVisible) => isOutVisible
);

export const selectAvailableById = createSelector(
  (state, productId) => selectProductById(state, productId),
  (product) => product.available
);

export const selectIsHiddenById = createSelector(
  [
    (state, productId) => selectAvailableById(state, productId),
    selectIsOutVisible
  ],
  (available, isOutVisible) => available <= 0 && !isOutVisible
)

export const selectIsAscending = createSelector(
  [(state) => state.products.isAscending],
  (isAscending) => isAscending
);

export const selectSortBy = createSelector(
  [(state) => state.products.sortBy],
  (sortBy) => sortBy
);
