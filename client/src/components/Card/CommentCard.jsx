import { Card, Box, CardContent, Avatar, Stack } from "@mui/material";

const CommentCard = () => {
  return (
    <Box my={2}>
      <Stack gap={0.5}>
        <Avatar />
        <Card>
          <CardContent>I am Comment Card</CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default CommentCard;
