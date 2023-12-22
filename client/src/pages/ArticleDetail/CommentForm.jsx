import { Box, Button, Container } from "@mui/material";
import TextArea from "../../components/common/TextArea";

const CommentForm = () => {
  return (
    <Box>
      <TextArea minRows={5} placeholder={"Add to the discussion"} />
      <Button variant="outlined" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default CommentForm;
