import { Box, Container, Stack, Typography } from "@mui/material";
import Screen from "../../components/Layout/Screen";
import { useFormik } from "formik";
import { useState } from "react";
import PreviewArticle from "./PreviewArticle";
import ArticleForm from "./ArticleForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../../redux/features/post/post.slice";
import toast from "react-hot-toast";
import { IMAGE_MAX_WIDTH, IMAGE_MAX_HEIGHT } from "../../utils/CONSTANT";

const WriteArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      excerpt: "",
      content: "",
      category: "Uncategorized",
    },
    onSubmit: (values, { resetForm }) => {
      const articleFormData = new FormData();
      articleFormData.append("title", values.title);
      articleFormData.append("excerpt", values.excerpt);
      articleFormData.append("content", values.content);
      articleFormData.append("category", values.category);
      articleFormData.append("post_image", values.image);

      // Image Dimension Condition
      const selectedImage = new Image();
      selectedImage.src = URL.createObjectURL(values.image);

      selectedImage.onload = () => {
        if (
          selectedImage.width > IMAGE_MAX_WIDTH &&
          selectedImage.height > IMAGE_MAX_HEIGHT
        ) {
          toast.error("Please Select Image of 512X512 Size");
        } else {
          dispatch(
            createArticle({ articleFormData, navigate, resetForm, setImage })
          );
        }
      };
    },
  });
  return (
    <Screen>
      <Container maxWidth={"xl"}>
        <Stack direction={"row"} justifyContent={"space-between"} gap={2}>
          <Box my={2} width={"50%"}>
            <Typography variant="h6">Write Article</Typography>
            {/* Form */}
            <ArticleForm formik={formik} setImage={setImage} />
          </Box>
          <PreviewArticle formik={formik} image={image} />
        </Stack>
      </Container>
    </Screen>
  );
};

export default WriteArticle;
