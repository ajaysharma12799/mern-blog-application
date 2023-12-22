import { Box, Divider } from "@mui/material";
import CommentForm from "./CommentForm";
import CommentCard from "../../components/Card/CommentCard";

const Comment = () => {
  return (
    <Box my={2}>
      <Divider>Comments</Divider>
      <CommentForm />
      <Box my={2}>
        {[1, 2, 3, 4, 5].map((_, idx) => {
          return <CommentCard key={idx} />;
        })}
      </Box>
    </Box>
  );
};

export default Comment;
