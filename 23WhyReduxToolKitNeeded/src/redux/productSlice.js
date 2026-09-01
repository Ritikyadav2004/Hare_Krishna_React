import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch('/products.json');
    const data = await res.json();
    return data.products;
  }
);


const initialState = { products: [], status: "idle", error: null };

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(fetchProducts.fulfilled, (state, action) => { state.status = "succeeded"; state.products = action.payload; })
      .addCase(fetchProducts.rejected, (state, action) => { state.status = "failed"; state.error = action.payload || "Unable to load products"; });
  },
});

export default productsSlice.reducer;
