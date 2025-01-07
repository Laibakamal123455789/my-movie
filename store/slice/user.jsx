import { createSlice } from "@reduxjs/toolkit";

export let userWalaSlice = createSlice({
    name: 'user-slice',
    initialState: {
      currentUser: null,
    },
    reducers: {
      loginHogya: (state, action) => {
        console.log("Logged in user:", action.payload); // Debugging log
        state.currentUser = action.payload;
      },
    },
  });
  export let { loginHogya } = userWalaSlice.actions;
