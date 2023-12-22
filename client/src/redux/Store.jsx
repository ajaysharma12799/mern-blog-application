import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/auth.slice";
import ArticleReducer from "./features/post/post.slice";
import CommentReducer from "./features/comments/comment.slice";

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    articles: ArticleReducer,
    comments: CommentReducer,
  },
});

export default Store;
