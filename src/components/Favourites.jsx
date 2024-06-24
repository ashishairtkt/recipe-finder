import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {
  Toolbar,
  IconButton,
  Container,
  Box,
  ListItemSecondaryAction,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MealsData from "../meals.json";

export default function Favourites() {
  const [favorites, setFavorites] = React.useState({});

  const handleFavoriteToggle = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <>
      <Toolbar />
      <Container>
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
            padding: 2,
            marginTop: 2,
          }}
        >
          <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
            Favourites Meal Plans
          </Typography>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            {MealsData &&
              MealsData.meals.map((item, index) => (
                <React.Fragment key={item.idMeal}>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar
                        alt={item.strMeal}
                        src={item.strMealThumb}
                        sx={{
                          width: 56,
                          height: 56,
                          marginRight: 2,
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.strMeal}
                      primaryTypographyProps={{
                        variant: "subtitle1",
                        fontWeight: "550",
                      }}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        onClick={() => handleFavoriteToggle(item.idMeal)}
                      >
                        {favorites[item.idMeal] ? (
                          <FavoriteIcon color="error" />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {index < MealsData.meals.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                </React.Fragment>
              ))}
          </List>
        </Box>
      </Container>
    </>
  );
}
