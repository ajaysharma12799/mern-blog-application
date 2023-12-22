/* eslint-disable react/prop-types */
import { Box, Divider } from "@mui/material";
import CommentForm from "./CommentForm";
import CommentCard from "../../components/Card/CommentCard";
import { useSelector } from "react-redux";

const Comment = ({ currentPostComments, currentArticle }) => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  return (
    <Box my={2}>
      <Divider>Comments</Divider>
      {isAuthenticated && currentUser && (
        <CommentForm currentArticle={currentArticle} />
      )}
      <Box my={2}>
        {currentPostComments?.map((comment, idx) => {
          return <CommentCard key={idx} comment={comment} />;
        })}
      </Box>
    </Box>
  );
};

export default Comment;
