import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isRegisterLoading: false,
  isLoginLoading: false,
  currentUser: null,
  isAuthenticated: false,
};

const BASE_URL = "http://localhost:4321/api";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ user, toast, navigate }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, user);
      console.log(response?.data);
      toast.success(response?.data?.msg);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isRegisterLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isRegisterLoading = false;
      });
  },
});

export default authSlice.reducer;
