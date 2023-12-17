/* eslint-disable react/prop-types */
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { generateGravatar } from "../../utils/utils";

const AuthStack = ({ toggleSearchModal, toggleMenu, isOpen }) => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={2}
    >
      <IconButton onClick={toggleSearchModal}>
        <CiSearch color="white" />
      </IconButton>
      <Link to={"/write-article"}>
        <Typography
          variant="h6"
          border={"1px solid white"}
          borderRadius={"50px"}
          color={"white"}
          px={2}
        >
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <LuPencilLine />
            Write
          </Stack>
        </Typography>
      </Link>
      <IconButton
        onClick={toggleMenu}
        aria-controls={isOpen ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
      >
        <Avatar alt="User Profile Avatar" src={generateGravatar(currentUser)} />
      </IconButton>
    </Stack>
  );
};

export default AuthStack;
