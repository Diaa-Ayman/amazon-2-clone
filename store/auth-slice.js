import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { getUser } = AuthSlice.actions;
export default AuthSlice;
