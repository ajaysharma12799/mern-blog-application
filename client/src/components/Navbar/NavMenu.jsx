/* eslint-disable react/prop-types */
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/features/auth/auth.slice";
import toast from "react-hot-toast";

const NavMenu = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser({ toast, navigate }));
  };

  return (
    <Menu
      anchorEl={"true"}
      id="account-menu"
      open={isOpen}
      onClose={toggleMenu}
      onClick={toggleMenu}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 6,
          ml: -2.4,
          width: 250,
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <MenuItem>
        <Typography variant="h6">Welcome, {currentUser?.username}</Typography>
      </MenuItem>
      <MenuItem>
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={handleLogout}
        >
          Logout
        </Button>
      </MenuItem>
    </Menu>
  );
};

export default NavMenu;
