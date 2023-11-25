/* eslint-disable react/prop-types */
import { Box, TextField } from "@mui/material";

const TextInput = ({ label, value, onChange, name, type }) => {
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
    </Box>
  );
};

export default TextInput;
