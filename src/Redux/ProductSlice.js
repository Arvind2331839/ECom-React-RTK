import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  allProduct: [],
  loading:false,
  error:null,
};

const ProductSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {}, 
  extraReducers(builder) {
    builder
    .addCase(getdata.pending, (state, action) => {
      state.loading=true;
    })
    .addCase(getdata.fulfilled, (state, action) => {
       state.loading=false;
       state.allProduct=action.payload;
       state.error=null;
    })
    .addCase(getdata.rejected, (state, action) => {
      state.loading=false;
      state.error=action.error.message
    })
  },
});


// export const {} = CartSlice.actions;
export default ProductSlice.reducer;


//action
export const getdata = createAsyncThunk("create/get", async () => {
  const res = await axios.get('https://dummyjson.com/products');
  // const res = await axios.get('https://fakestoreapi.com/products');
  // console.log(res);
  return res.data.products;
});