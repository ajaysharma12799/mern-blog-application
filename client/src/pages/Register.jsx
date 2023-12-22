/* eslint-disable no-unused-vars */
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
import { object, string } from "yup";

const registerSchema = object({
  username: string()
    .required("Please Enter Username")
    .length(5, "Username Should be atleast 5 Characters Long"),
  email: string().email().required("Please Provide Email"),
  password: string()
    .required("Please Provide Password")
    .length(6, "Password Should be atleast 6 Characters Long"),
  confirmPassword: string()
    .required("Please Provide Password")
    .length(6, "Confirm Password Should be atleast 6 Characters Long"),
});

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
    validationSchema: registerSchema,
    onSubmit: (value, { resetForm }) => {
      if (value.password === value.confirmPassword) {
        const { confirmPassword, ...user } = value;
        dispatch(registerUser({ user, toast, navigate, resetForm }));
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
              errorMsg={formik.errors.username}
            />
            <TextInput
              label={"Email"}
              name="email"
              type={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              errorMsg={formik.errors.email}
            />
            <TextInput
              label={"Password"}
              name="password"
              type={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              errorMsg={formik.errors.password}
            />
            <TextInput
              label={"Confirm Password"}
              name="confirmPassword"
              type={"password"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              errorMsg={formik.errors.confirmPassword}
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
