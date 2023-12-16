import {
  AppBar,
  Box,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchModal from "../modal/SearchModal";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
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
              <Link to={isAuthenticated ? "/dashboard" : "/"}>
                <Typography variant="h5" color={"white"}>
                  Blogify
                </Typography>
              </Link>
              {isAuthenticated ? (
                <AuthStack
                  isOpen={isOpen}
                  toggleMenu={toggleMenu}
                  toggleSearchModal={toggleSearchModal}
                />
              ) : (
                <AppStack toggleSearchModal={toggleSearchModal} />
              )}
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <NavMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <SearchModal isOpen={isSearchModalOpen} toggleModal={toggleSearchModal} />
    </React.Fragment>
  );
};

export default Navbar;
