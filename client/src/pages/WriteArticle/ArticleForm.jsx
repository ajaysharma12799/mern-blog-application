/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import TextInput from "../../components/common/TextInput";
import TextArea from "../../components/common/TextArea";
import { BLOG_CATEGORIES } from "../../utils/CONSTANT";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ArticleForm = ({
  formik,
  setImage,
  setRichTextContent,
  richTextContent,
}) => {
  return (
    <Box my={2} component={"form"} onSubmit={formik.handleSubmit}>
      <TextInput
        type={"file"}
        onChange={(e) => {
          formik.setFieldValue("image", e?.currentTarget?.files[0]);
          setImage(URL.createObjectURL(e?.currentTarget?.files[0]));
        }}
      />
      <TextInput
        type={"text"}
        label={"Title"}
        name={"title"}
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <TextArea
        minRows={5}
        name={"excerpt"}
        value={formik.values.excerpt}
        onChange={formik.handleChange}
        placeholder={"Excerpt"}
      />
      <ReactQuill
        value={richTextContent}
        onChange={setRichTextContent}
        theme="snow"
      />
      <Box my={2}>
        <FormControl fullWidth>
          <InputLabel id="category-menu">Category</InputLabel>
          <Select
            value={formik.values.category}
            onChange={formik.handleChange}
            labelId="category-menu"
            id="category-menu"
            label="Category"
            name="category"
          >
            {BLOG_CATEGORIES.map((category) => {
              return (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Button type="submit" variant="contained" fullWidth>
        Publish Article
      </Button>
    </Box>
  );
};

export default ArticleForm;
