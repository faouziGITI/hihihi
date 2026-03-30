import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  theme: string;
  isLoggedIn: boolean;
  email?: string;
  username?: string;
  name?: string;
};

const initialState: initialState = {
  theme: "dark",
  isLoggedIn: false,
  email: undefined,
  username: undefined,
  name: undefined,
};

const userSlice = createSlice({
  name: "userslice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
