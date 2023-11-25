import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Screen from "../components/Layout/Screen";
import TextInput from "../components/common/TextInput";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value, { resetForm }) => {
      console.log(value);
      // API Call

      navigate("/dashboard");

      // Reset Form
      resetForm();
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
            />
            <TextInput
              label={"Password"}
              name="password"
              type={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Box>
          <Stack p={2} direction={"row"} alignItems={"center"} gap={1}>
            <Typography>Don&apos;t have account?</Typography>
            <Link to={"/"}>Register</Link>
          </Stack>
        </Paper>
      </Container>
    </Screen>
  );
};

export default Login;
