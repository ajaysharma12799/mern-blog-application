/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogCard = ({ article, handleDelete }) => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          component={"img"}
          image={article?.image}
          title={article?.title}
          sx={{ width: "100%", height: "100%" }}
        />
        <CardContent>
          <Link to={`/view-article/${article?._id}`}>
            <Typography variant="h5">{article?.title}</Typography>
          </Link>
          <Typography variant="body1">{article?.excerpt}</Typography>
        </CardContent>
        {currentUser?._id === article.user && (
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
