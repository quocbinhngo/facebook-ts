import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { LoginPayload, User } from "../../models/user";

export interface UserState {
  currentUser?: User;
}

const initialState: UserState = {
  currentUser: Cookies.get("user")
    ? JSON.parse(Cookies.get("user") as string)
    : undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state: UserState, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export const selectUserCurrentUser = (state: any) => state.user.currentUser;

const userReducer = userSlice.reducer;
export default userReducer;
