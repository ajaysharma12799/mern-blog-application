/* eslint-disable react/prop-types */
import { Box, TextField } from "@mui/material";
import ErrorField from "./ErrorField";

const TextInput = ({ label, value, onChange, name, type, errorMsg }) => {
  return (
    <Box my={2}>
      <TextField
        variant="outlined"
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        fullWidth
      />
      <ErrorField errorMsg={errorMsg} />
    </Box>
  );
};

export default TextInput;
