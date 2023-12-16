import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Button,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Screen from "../components/Layout/Screen";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getArticle } from "../redux/features/post/post.slice";
import { formatDate } from "../utils/utils";

const ArticleDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { isCurrentArticleLoading, currentArticle } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(getArticle({ id: params.id }));
  }, []);

  return (
    <Screen>
      <Container maxWidth="xl">
        <Box my={2}>
          {isCurrentArticleLoading ? (
            <CircularProgress />
          ) : (
            <Box>
              <Box
                component={"img"}
                src={currentArticle?.image}
                alt={currentArticle?.title}
                maxHeight={400}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <Typography variant="h4">{currentArticle?.title}</Typography>
              <Stack
                my={2}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="body1">
                  Published On {formatDate(currentArticle?.createdAt)}
                </Typography>
                <Button disabled variant="contained">
                  #{currentArticle?.category}
                </Button>
              </Stack>
              <Typography variant="body1" mt={2}>
                {currentArticle?.excerpt}
              </Typography>
              <Typography variant="body1" mt={5}>
                {currentArticle?.content}
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Screen>
  );
};

export default ArticleDetail;
