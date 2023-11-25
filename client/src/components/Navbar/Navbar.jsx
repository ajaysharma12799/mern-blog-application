import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Box>
        <CssBaseline />
        <AppBar component={"nav"} position="static">
          <Toolbar>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Link to={"/dashboard"}>
                <Typography variant="h5" color={"white"}>
                  Blogify
                </Typography>
              </Link>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={2}
              >
                <Link to={"/write-article"}>
                  <Typography
                    variant="h6"
                    border={"1px solid white"}
                    borderRadius={"50px"}
                    color={"white"}
                    px={2}
                  >
                    Write
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
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <NavMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </React.Fragment>
  );
};

export default Navbar;
