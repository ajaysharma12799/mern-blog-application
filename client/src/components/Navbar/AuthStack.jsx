/* eslint-disable react/prop-types */
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const AuthStack = ({ toggleSearchModal, toggleMenu, isOpen }) => {
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
        <Avatar
          alt="User Profile Avatar"
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1700903201~exp=1700903801~hmac=92e7f43c035671218fe71b3e2e428985f605652295359d8a9430ae10290d9af7"
        />
      </IconButton>
    </Stack>
  );
};

export default AuthStack;
