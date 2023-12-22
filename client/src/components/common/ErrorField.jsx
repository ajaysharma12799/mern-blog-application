/* eslint-disable react/prop-types */
import { Typography, Box } from "@mui/material";

const ErrorField = ({ errorMsg }) => {
  return (
    <Box my={1}>
      <Typography variant="body2" color={"error"}>
        {errorMsg}
      </Typography>
    </Box>
  );
};

export default ErrorField;
