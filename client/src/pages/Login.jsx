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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { loginUser } from "../redux/features/auth/auth.slice";
import { object, string } from "yup";

const loginSchema = object({
  email: string().email().required("Please Provide Email"),
  password: string()
    .required("Please Provide Password")
    .length(6, "Password Should be atleast 6 Characters Long"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoginLoading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (value, { resetForm }) => {
      dispatch(loginUser({ user: value, toast, navigate, resetForm }));
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
              Login
            </Typography>
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
            <Button
              disabled={isLoginLoading}
              type="submit"
              variant="contained"
              fullWidth
            >
              {isLoginLoading ? <CircularProgress /> : "Login"}
            </Button>
          </Box>
          <Stack p={2} direction={"row"} alignItems={"center"} gap={1}>
            <Typography>Don&apos;t have account?</Typography>
            <Link to={"/register"}>Register</Link>
          </Stack>
        </Paper>
      </Container>
    </Screen>
  );
};

export default Login;
