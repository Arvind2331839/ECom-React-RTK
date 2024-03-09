import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQunty: 0,
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQunty += 1;
        toast.info(`Increased ${action.payload.title} Quanitity`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
        const tempProduct = { ...action.payload, cartQunty: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} Added to Cart`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error(`${action.payload.title} Removed from Cart`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQunty > 1) {
        state.cartItems[itemIndex].cartQunty -= 1;
        toast.info(`Decrease ${action.payload.title} Cart quanitity`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else if (state.cartItems[itemIndex].cartQunty === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.error(` ${action.payload.title}Removed from cart`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Cart has been cleared`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // getTotal(state,action){
    //   state.cartItems.reduce((cartTotal,cartItem)=>{

    //   },{
    //     total:0,
    //     quantity:0
    //   })
    // }
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
