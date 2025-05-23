import { configureStore } from "@reduxjs/toolkit";
import counterThemeSlice from "../slices/counterThemeSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    counterThemeSlice: counterThemeSlice.reducer,
  },
});

export default store;
