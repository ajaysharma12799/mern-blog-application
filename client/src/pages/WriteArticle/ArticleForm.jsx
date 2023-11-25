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

const ArticleForm = ({ formik, setImage }) => {
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
      <TextArea
        minRows={10}
        name={"content"}
        value={formik.values.content}
        onChange={formik.handleChange}
        placeholder={"Content"}
      />
      <Box my={2}>
        <FormControl fullWidth>
          <InputLabel id="category-menu">Category</InputLabel>
          <Select labelId="category-menu" id="category-menu" label="Category">
            <MenuItem>Ten</MenuItem>
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
