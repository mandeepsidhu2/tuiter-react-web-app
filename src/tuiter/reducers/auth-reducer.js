import { createSlice } from "@reduxjs/toolkit";
import { loginThunk,logoutThunk,profileThunk,updateUserThunk,register } from "../services/auth-thunks";


const authSlice = createSlice({
 name: "auth",
 initialState: { currentUser: null },
 reducers: {},
 extraReducers: {
   [loginThunk.fulfilled]: (state, { payload }) => {
       console.log(payload)
     state.currentUser = payload;
   },
   [logoutThunk.fulfilled]: (state, { payload }) => {
   state.currentUser = null;
 },
 [profileThunk.fulfilled]: (state, { payload }) => {
   state.currentUser = payload;
 },
 [updateUserThunk.fulfilled]: (state, { payload }) => {
     console.log(payload)
   state.currentUser = payload;
 },
 [register.fulfilled]: (state, { payload }) => {
   state.currentUser = payload;
 }
 },
 
});
export default authSlice.reducer;