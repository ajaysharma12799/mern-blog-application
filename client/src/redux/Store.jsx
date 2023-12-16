import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/auth.slice";
import ArticleReducer from "./features/post/post.slice";

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    articles: ArticleReducer,
  },
});

export default Store;
