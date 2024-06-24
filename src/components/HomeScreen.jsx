import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
export default function HomeScreen() {
  return (
    <div>
      {" "}
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.airfuture.com/img/bg/JFK_1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Menu
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A collection of my most-loved recipes, carefully curated to
                    showcase a variety of dishes that are sure to please even
                    the pickiest of eaters carefully crafted to share with loved
                    ones.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.airfuture.com/img/bg/JFK_1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    My Favourites
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    menu featuring my most trusted and beloved recipes, refined
                    through years of experimentation and feedback from friends
                    and family. Each dish is a guarantee of deliciousness and
                    satisfaction.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.airfuture.com/img/bg/JFK_1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Meal Generator
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Meal Generator is a tool that creates a custom meal plan
                    based on the macros provided. It also provides a grocery
                    list for the week and recipes to help with meal prep.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
