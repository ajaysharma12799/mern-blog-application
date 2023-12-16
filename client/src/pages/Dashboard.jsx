import {
  Box,
  Container,
  Grid,
  Typography,
  CircularProgress,
  Tabs,
  Tab,
} from "@mui/material";
import Screen from "../components/Layout/Screen";
import BlogCard from "../components/BlogCard/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrentUserArticles } from "../redux/features/post/post.slice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("one");
  const {
    isCurrentUserArticleLoading,
    currentUserArticles,
    isAllArticlesLoading,
    articles,
  } = useSelector((state) => state.articles);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getCurrentUserArticles());
  }, []);

  return (
    <Screen>
      <Container maxWidth={"xl"}>
        <Box my={2}>
          <Tabs value={value} onChange={handleChange}>
            <Tab value="one" label="All Blogs" />
            <Tab value="two" label="Your Blogs" />
          </Tabs>
          <Box mt={2}>
            {value === "one" ? (
              <Grid container spacing={2}>
                {isAllArticlesLoading ? (
                  <CircularProgress />
                ) : articles.length <= 0 ? (
                  <Typography>No Articles</Typography>
                ) : (
                  articles?.map((article) => {
                    return <BlogCard key={article?._id} article={article} />;
                  })
                )}
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {isCurrentUserArticleLoading ? (
                  <CircularProgress />
                ) : currentUserArticles.length <= 0 ? (
                  <Typography>No Articles</Typography>
                ) : (
                  currentUserArticles.map((article) => {
                    return <BlogCard key={article?._id} article={article} />;
                  })
                )}
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </Screen>
  );
};

export default Dashboard;
