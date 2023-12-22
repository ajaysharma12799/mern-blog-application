/* eslint-disable react/prop-types */
import Textarea from "@mui/joy/Textarea";
import { Box } from "@mui/material";
import ErrorField from "./ErrorField";

const TextArea = ({
  placeholder,
  name,
  minRows,
  value,
  onChange,
  errorMsg,
}) => {
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
      <ErrorField errorMsg={errorMsg} />
    </Box>
  );
};

export default TextArea;
