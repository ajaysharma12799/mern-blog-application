/* eslint-disable react/prop-types */
import { Card, Box, CardContent, Avatar, Stack } from "@mui/material";

const CommentCard = ({ comment }) => {
  return (
    <Box my={2}>
      <Stack gap={0.5}>
        <Avatar />
        <Card>
          <CardContent>{comment?.comment}</CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default CommentCard;
