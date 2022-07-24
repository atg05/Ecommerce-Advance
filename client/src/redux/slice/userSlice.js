import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const intialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  intialState,
  reducers: {
    LOGGED_IN: (state) => {
      console.log("logged in");
    },
    LOGGED_OUT: (state) => {},
  },
});

export const { LOGGED_IN, LOGGED_OUT } = userSlice.actions;
export default userSlice.reducer;
