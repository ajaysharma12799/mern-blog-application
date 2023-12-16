import { useEffect } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import Screen from "../components/Layout/Screen";
import {
  Container,
  Box,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../redux/features/post/post.slice";

const Home = () => {
  const dispatch = useDispatch();
  const { isAllArticlesLoading, articles } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <Screen>
      <Container maxWidth={"xl"}>
        <Box my={2}>
          <Typography variant="h5">Latest Blogs</Typography>
          <Box mt={2}>
            <Grid container spacing={2}>
              {isAllArticlesLoading ? (
                <CircularProgress />
              ) : articles.length <= 0 ? (
                <Typography variant="h6" mt={2}>
                  No Articles
                </Typography>
              ) : (
                articles?.map((article) => {
                  return <BlogCard key={article?._id} article={article} />;
                })
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Screen>
  );
};

export default Home;
