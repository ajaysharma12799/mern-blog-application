import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosInstance } from "../../services/axios";

const initialState = {
  isAllCommentsLoading: false,
  currentPostComments: [],
  isAddCommentLoading: false,
};

export const getCurrentArticleComments = createAsyncThunk(
  "comment/getCurrentArticleComments",
  async ({ postId }) => {
    try {
      const response = await axiosInstance.get(
        `/comment/get-comments/${postId}`
      );
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
);

export const addComment = createAsyncThunk(
  "comment/addComment",
  async ({ postId, comment }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `/comment/write-comment/${postId}`,
        { comment }
      );

      if (response?.data?.status) {
        thunkAPI.dispatch(getCurrentArticleComments(postId));
      }
      toast.success(response?.data?.msg);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
);

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      // Get Comments
      .addCase(getCurrentArticleComments.pending, (state) => {
        state.isAllCommentsLoading = true;
      })
      .addCase(getCurrentArticleComments.fulfilled, (state, action) => {
        state.isAllCommentsLoading = false;
        state.currentPostComments = action?.payload?.data;
      })
      //   Add Comment
      .addCase(addComment.pending, (state) => {
        state.isAddCommentLoading = true;
      })
      .addCase(addComment.fulfilled, (state) => {
        state.isAddCommentLoading = false;
      });
  },
});

export default commentSlice.reducer;
