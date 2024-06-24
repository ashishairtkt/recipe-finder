import React from "react";

import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import Recipe from "../randomrecepi.json";

const MealGenerator = () => {
  return (
    <>
      {Recipe &&
        Recipe.meals.map((recipe, index) => (
          <Container maxWidth="md" key={index}>
            <Typography variant="h3" component="h1" gutterBottom>
              {recipe.strMeal}
            </Typography>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Category: {recipe.strCategory}
                </Typography>
                <Typography variant="h6" component="h3">
                  Area: {recipe.strArea}
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                  {recipe.strInstructions}
                </Typography>
                <Divider />
                <Typography variant="h6" component="h3">
                  Ingredients:
                </Typography>
                <List>
                  {Array(8)
                    .fill(0)
                    .map((num, index) => {
                      if (`${recipe["strMeasure" + (index + 1)]}` !== undefined)
                        console.log(
                          index + 1,
                          `${recipe["strMeasure" + (index + 1)]}`
                        );

                      return (
                        <ListItem key={index}>
                          <ListItemText
                            primary={`${
                              recipe["strIngredient" + (index + 1)]
                            } - ${recipe["strMeasure" + (index + 1)]} `}
                          />
                        </ListItem>
                      );
                    })}
                  {/* {recipe.strIngredients.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemText
                          primary={`${item.measure} ${item.ingredient}`}
                        />
                      </ListItem>
                    ))} */}
                </List>
                <Divider />
                <Typography variant="body2" component="p">
                  Tags: {recipe.strTags}
                </Typography>
                <Typography variant="body2" component="p">
                  <a
                    href={recipe.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Container>
        ))}
    </>
  );
};

export default MealGenerator;
