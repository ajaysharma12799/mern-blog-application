/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActions,
  Button,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { generateGravatar } from "../../utils/utils";

const BlogCard = ({ article, handleDelete }) => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          component={"img"}
          image={article?.image}
          title={article?.title}
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
        <CardContent>
          <Link
            to={`/view-article/${article?.slug}`}
            style={{ color: "black", textDecoration: "underline" }}
          >
            <Typography variant="h5">{article?.title}</Typography>
          </Link>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            my={1}
          >
            <Avatar src={generateGravatar(currentUser)} />
            <Box>
              <Typography>By - {article?.user?.username}</Typography>
              <Typography>
                {new Date(article?.createdAt).toLocaleDateString()}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
        {currentUser?._id === article.user?._id && (
          <CardActions>
            <Button variant="outlined" color="primary" fullWidth>
              Edit
            </Button>
            <Button
              onClick={() => handleDelete(article?._id)}
              variant="contained"
              color="error"
              fullWidth
            >
              Delete
            </Button>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};

export default BlogCard;
