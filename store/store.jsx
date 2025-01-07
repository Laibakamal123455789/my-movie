
import { configureStore } from "@reduxjs/toolkit";
import { userWalaSlice } from "./slice/user"; // Import the user slice

export let merastore = configureStore({
  reducer: {
    user: userWalaSlice.reducer, // Ensure the slice is correctly set in the store
  },
});
