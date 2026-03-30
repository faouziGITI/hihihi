import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/redux/appstore/userSlice/userSlice";
import cartSlice from "@/redux/appstore/cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
