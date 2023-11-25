import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const BlogCard = () => {
  return (
    <Grid item sm={12} md={4}>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          component={"img"}
          image="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1700903201~exp=1700903801~hmac=92e7f43c035671218fe71b3e2e428985f605652295359d8a9430ae10290d9af7"
          title="Blog Title"
          sx={{ width: "100%", height: "100%" }}
        />
        <CardContent>
          <Typography variant="h5">Title</Typography>
          <Typography variant="body1">Excerpt</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogCard;
