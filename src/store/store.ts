import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "../slice/musicSlice";

export const store = configureStore({
  reducer: {
    music: musicSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
