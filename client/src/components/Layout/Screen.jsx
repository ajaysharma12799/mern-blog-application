/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const Screen = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};

export default Screen;
