/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const PreviewArticle = ({ formik, image, richTextContent }) => {
  return (
    <Box my={2} width={"50%"}>
      <Typography variant="h6">Preview Article</Typography>
      <Box my={2} width={"100%"}>
        {formik?.values?.image && <img src={image} />}
      </Box>
      <Typography variant="h6">{formik?.values?.title}</Typography>
      <Typography my={2} variant="body1">
        {formik?.values?.excerpt}
      </Typography>
      <Typography
        my={2}
        variant="body1"
        dangerouslySetInnerHTML={{ __html: richTextContent }}
      ></Typography>
    </Box>
  );
};

export default PreviewArticle;
