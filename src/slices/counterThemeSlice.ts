import { createSlice } from "@reduxjs/toolkit";

const counterThemeSlice = createSlice({
  name: "counterThemeSlice",
  initialState: {
    count: 0,
    theme: "light",
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      if (action.payload === "light") {
        window.document.documentElement.classList.remove("dark");
      } else {
        window.document.documentElement.classList.add("dark");
      }
    },
  },
});

export default counterThemeSlice;
