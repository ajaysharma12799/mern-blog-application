import { Box, Typography, Card, Stack, IconButton } from "@mui/material";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogFilterCard = () => {
  return (
    <Box my={2}>
      <Card>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box p={2}>
            <Typography variant="h5" mb={2}>
              Title
            </Typography>
            <Typography variant="body1">Excerpt</Typography>
          </Box>
          <Box>
            <IconButton>
              <Link to={`/`}>
                <FaCircleArrowRight color="green" size={35} />
              </Link>
            </IconButton>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default BlogFilterCard;
