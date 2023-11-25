/* eslint-disable react/prop-types */
import Textarea from "@mui/joy/Textarea";
import { Box } from "@mui/material";

const TextArea = ({ placeholder, name, minRows, value, onChange }) => {
  return (
    <Box my={2}>
      <Textarea
        variant="outlined"
        placeholder={placeholder}
        minRows={minRows}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default TextArea;
