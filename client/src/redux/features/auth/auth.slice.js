import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance as axios } from "../../services/axios";

const initialState = {
  isRegisterLoading: false,
  isLoginLoading: false,
  isLogoutLoading: false,
  currentUser: null,
  isAuthenticated: false,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ user, toast, navigate, resetForm }) => {
    try {
      const response = await axios.post(`/auth/register`, user);
      console.log(response?.data);
      toast.success(response?.data?.msg);
      resetForm(); // Reset Form
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ user, toast, navigate, resetForm }) => {
    try {
      const response = await axios.post(`/auth/login`, user);
      console.log(response?.data);
      toast.success(response?.data?.msg);
      navigate("/dashboard");
      resetForm(); // Reset Form
      // Set Token in Local Storage
      localStorage.setItem("token", response?.data?.token);
      return response?.data;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async ({ toast, navigate }) => {
    try {
      const response = await axios.get(`/auth/logout`);
      toast.success(response?.data?.msg);
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
  }
);

export const getCurrentUser = createAsyncThunk("auth/me", async ({ toast }) => {
  try {
    const response = await axios.get(`/auth/me`);
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error);
  }
});

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.isRegisterLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isRegisterLoading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isRegisterLoading = false;
      })
      // Login User
      .addCase(loginUser.pending, (state) => {
        state.isLoginLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoginLoading = false;
        state.currentUser = action.payload?.data;
        state.isAuthenticated = true;
        state.token = action.payload?.token;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoginLoading = false;
        state.currentUser = null;
        state.isAuthenticated = false;
        state.token = null;
      })
      // Logout User
      .addCase(logoutUser.pending, (state) => {
        state.isLogoutLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLogoutLoading = false;
        state.isAuthenticated = false;
        state.currentUser = null;
        state.token = null;
      })
      // Get Current User
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.currentUser = action.payload?.data;
      });
  },
});

export default authSlice.reducer;
