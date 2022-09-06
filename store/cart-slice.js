import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          amount: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          rating: newItem.rating,
          image: newItem.image,
          category: newItem.category,
        });
      } else {
        exisitingItem.amount++;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice + exisitingItem.price * exisitingItem.amount;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (exisitingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.amount--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
    },
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;
