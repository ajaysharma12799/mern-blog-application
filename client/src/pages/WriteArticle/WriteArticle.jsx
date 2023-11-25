import { Box, Container, Stack, Typography } from "@mui/material";
import Screen from "../../components/Layout/Screen";
import { useFormik } from "formik";
import { useState } from "react";
import PreviewArticle from "./PreviewArticle";
import ArticleForm from "./ArticleForm";

const WriteArticle = () => {
  const [image, setImage] = useState("");
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      excerpt: "",
      content: "",
      category: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      setImage("");
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
