import React from "react";
import Container from "@mui/material/Container";
import {
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategoryData from "../categories.json";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 700,
      marginBottom: "24px",
    },
    h6: {
      fontWeight: 600,
    },
    body2: {
      fontSize: "1rem",
    },
  },
});

export default function Menu() {
  return (
    <ThemeProvider theme={theme}>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* <Typography variant="h4" component="div" color="primary">
          Meal Categories
        </Typography> */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {CategoryData &&
            CategoryData.categories.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    transition: "transform 0.2s, background-color 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#f0f0f0",
                      cursor: "pointer",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.strCategoryThumb}
                    alt={item.strCategory}
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" color="secondary">
                      {item.strCategory}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.strCategoryDescription.substring(0, 60)}...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
