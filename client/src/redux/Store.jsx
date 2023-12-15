import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/auth.slice";

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export default Store;
