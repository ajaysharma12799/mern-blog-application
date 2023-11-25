import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Screen from "../components/Layout/Screen";
import BlogCard from "../components/BlogCard/BlogCard";

const Dashboard = () => {
  return (
    <Screen>
      <Container maxWidth={"lg"}>
        <Box my={2}>
          <Stack direction={"row"} justifyContent={"space-between"} gap={5}>
            <Box>
              <Typography variant="h5">Your Blogs</Typography>
              <Box mt={2}>
                <Grid container spacing={2}>
                  {[1, 2, 3, 4, 5, 6].map((_, idx) => {
                    return <BlogCard key={idx} />;
                  })}
                </Grid>
              </Box>
            </Box>
            <Box p={2}>
              <Typography variant="h6" fontWeight={"bold"} mb={2}>
                Profile
              </Typography>
              <Avatar
                alt="User Profile Avatar"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1700903201~exp=1700903801~hmac=92e7f43c035671218fe71b3e2e428985f605652295359d8a9430ae10290d9af7"
                sx={{ width: 50, height: 50 }}
              />
              <Box my={2}>
                <Typography variant="body1">Username</Typography>
                <Box my={1}>
                  <Divider />
                </Box>
                <Typography variant="body1">email@email.com</Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Screen>
  );
};

export default Dashboard;
