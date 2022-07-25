import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  wishlist: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.user = true;
    },
    loggedOut: (state) => {
      state.user = false;
    },
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;
export default userSlice.reducer;
