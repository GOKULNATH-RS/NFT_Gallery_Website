import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    displayName: "",
    userName: "",
    isLoggedIn: false,
    email: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { setUser, setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
