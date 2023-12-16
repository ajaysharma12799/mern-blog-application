/* eslint-disable react/prop-types */
import { IconButton, Stack } from "@mui/material";

import { Link } from "react-router-dom";
import { CiLogin, CiSearch } from "react-icons/ci";

const AppStack = ({ toggleSearchModal }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={1}
    >
      <IconButton onClick={toggleSearchModal}>
        <CiSearch size={35} color="white" />
      </IconButton>
      <IconButton>
        <Link to={"/login"}>
          <CiLogin size={35} color="white" />
        </Link>
      </IconButton>
    </Stack>
  );
};

export default AppStack;
