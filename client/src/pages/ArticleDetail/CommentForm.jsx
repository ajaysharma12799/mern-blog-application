/* eslint-disable react/prop-types */
import { Box, Button, CircularProgress } from "@mui/material";
import TextArea from "../../components/common/TextArea";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/features/comments/comment.slice";
import toast from "react-hot-toast";

const CommentForm = ({ currentArticle }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const { isAddCommentLoading } = useSelector((state) => state.comments);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      toast.error("Please Enter Something!!");
    } else {
      dispatch(
        addComment({
          postId: currentArticle?._id,
          comment: value,
        })
      );
    }
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <TextArea
        value={value}
        name={"comment"}
        onChange={(e) => setValue(e.target.value)}
        minRows={5}
        placeholder={"Add to the discussion"}
      />
      <Button
        disabled={isAddCommentLoading}
        type="submit"
        variant="outlined"
        color="primary"
      >
        {isAddCommentLoading ? <CircularProgress /> : "Submit"}
      </Button>
    </Box>
  );
};

export default CommentForm;
