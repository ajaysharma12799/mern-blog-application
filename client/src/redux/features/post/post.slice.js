import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosInstance } from "../../services/axios";

const initialState = {
  isAllArticlesLoading: false,
  isCurrentArticleLoading: false,
  articles: [],
  currentArticle: null,
  currentUserArticles: [],
  isCurrentUserArticleLoading: false,
  isCreateArticleLoading: false,
};

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async () => {
    try {
      const response = await axiosInstance.get("/post/get-articles");
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
);

export const getArticle = createAsyncThunk(
  "articles/getArticle",
  async ({ id }) => {
    try {
      const response = await axiosInstance.get(`/post/get-article/${id}`);
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
);

export const getCurrentUserArticles = createAsyncThunk(
  "articles/getCurrentUserArticles",
  async () => {
    try {
      const response = await axiosInstance.get(
        `/post/get-current-user-articles`
      );
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
);

export const deleteArticle = createAsyncThunk(
  "articles/deleteArticle",
  async ({ id }) => {
    try {
      const response = await axiosInstance.delete(`/post/delete-article/${id}`);
      toast.success(response?.data?.msg);
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
);

export const createArticle = createAsyncThunk(
  "articles/createArticle",
  async ({ articleFormData, navigate, resetForm }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/post/create-article",
        articleFormData
      );
      if (response?.data?.status) {
        toast.success(response?.data?.msg);
        navigate("/dashboard");
        resetForm();
        thunkAPI.dispatch(getArticles());
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
);

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  extraReducers: (builder) => {
    // Get Articles
    builder
      .addCase(getArticles.pending, (state) => {
        state.isAllArticlesLoading = true;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isAllArticlesLoading = false;
        state.articles = action.payload?.data;
      })
      //   Get Article
      .addCase(getArticle.pending, (state) => {
        state.isCurrentArticleLoading = true;
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.isCurrentArticleLoading = false;
        state.currentArticle = action.payload?.data;
      })
      .addCase(getArticle.rejected, (state) => {
        state.isCurrentArticleLoading = false;
        state.currentArticle = null;
      })
      // Get Current User Articles
      .addCase(getCurrentUserArticles.pending, (state) => {
        state.isCurrentUserArticleLoading = true;
      })
      .addCase(getCurrentUserArticles.fulfilled, (state, action) => {
        state.isCurrentUserArticleLoading = false;
        state.currentUserArticles = action.payload?.data;
      })
      .addCase(getCurrentUserArticles.rejected, (state) => {
        state.isCurrentUserArticleLoading = false;
      })
      // Delete Article
      .addCase(deleteArticle.pending, (state) => {
        state.isAllArticlesLoading = true;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.isAllArticlesLoading = false;
        state.currentUserArticles = state.currentUserArticles.filter(
          (article) => article.id !== action.payload?.data
        );
        state.articles = state.articles.filter(
          (article) => article.id !== action.payload?.data
        );
      })
      // Create Article
      .addCase(createArticle.pending, (state) => {
        state.isCreateArticleLoading = true;
      })
      .addCase(createArticle.fulfilled, (state) => {
        state.isCreateArticleLoading = false;
      });
  },
});

export default postSlice.reducer;
