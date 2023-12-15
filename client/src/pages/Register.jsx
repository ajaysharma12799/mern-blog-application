import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import Screen from "../components/Layout/Screen";
import TextInput from "../components/common/TextInput";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/features/auth/auth.slice";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRegisterLoading } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (value, { resetForm }) => {
      console.log(value);
      if (value.password === value.confirmPassword) {
        const { confirmPassword, ...user } = value;
        dispatch(registerUser({ user, toast, navigate }));
        resetForm();
      } else {
        toast.error(`Password Don't Match`);
      }
    },
  });
  return (
    <Screen>
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Box
            my={2}
            p={2}
            component={"form"}
            method="POST"
            onSubmit={formik.handleSubmit}
          >
            <Typography variant="h5" textAlign={"center"} mb={2}>
              Register
            </Typography>
            <TextInput
              label={"Username"}
              name="username"
              type={"text"}
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <TextInput
              label={"Email"}
              name="email"
              type={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <TextInput
              label={"Password"}
              name="password"
              type={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <TextInput
              label={"Confirm Password"}
              name="confirmPassword"
              type={"password"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            <Button
              disabled={isRegisterLoading}
              type="submit"
              variant="contained"
              fullWidth
            >
              {isRegisterLoading ? <CircularProgress /> : "Register"}
            </Button>
          </Box>
          <Stack p={2} direction={"row"} alignItems={"center"} gap={1}>
            <Typography>Already have account?</Typography>
            <Link to={"/login"}>Login</Link>
          </Stack>
        </Paper>
      </Container>
    </Screen>
  );
};

export default Register;
