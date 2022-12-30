import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return fetch("https://api.thecatapi.com/v1/breeds").then((res) =>
      res.json()
    );
  }
);

const ProductsSlice = createSlice({
  name: "Prodcuts",
  initialState: {
    products: [],
    product: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    //products list
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default ProductsSlice.reducer;
