import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";
import CartReducer from "./CartSlice";
const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
  },
});

export default store;
