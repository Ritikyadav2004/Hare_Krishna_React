import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      const data = await response.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
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
