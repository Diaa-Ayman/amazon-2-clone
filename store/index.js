import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-slice";
import CartSlice from "./cart-slice";

const store = configureStore({
  reducer: { cart: CartSlice.reducer, auth: AuthSlice.reducer },
});

export default store;
