/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const PreviewArticle = ({ formik, image }) => {
  return (
    <Box my={2} width={"50%"}>
      <Typography variant="h6">Preview Article</Typography>
      <Box my={2} width={"100%"}>
        {formik?.values?.image && <img src={image} />}
      </Box>
      <Typography variant="h6">{formik?.values?.title}</Typography>
      <Typography variant="body1">{formik?.values?.excerpt}</Typography>
      <Typography variant="body1">{formik?.values?.content}</Typography>
    </Box>
  );
};

export default PreviewArticle;
