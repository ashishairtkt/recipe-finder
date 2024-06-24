import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const listItemsData = [
  {
    text: "Home",
    icon: <HomeIcon />,
    onClick: () => console.log("Home clicked"),
  },
  {
    text: "Menu",
    icon: <MenuBookIcon />,
    onClick: () => console.log("Menu clicked"),
  },
  {
    text: "My Favourites",
    icon: <FavoriteIcon />,
    onClick: () => console.log("My Favourites clicked"),
  },
  {
    text: "Meal Generator",
    icon: <LocalDiningIcon />,
    onClick: () => console.log("Meal Generator clicked"),
  },
  {
    text: "About Me",
    icon: <ManageAccountsIcon />,
    onClick: () => console.log("About Me clicked"),
  },
];

const MainListItems = ({ setActiveState }) => {
  return (
    <React.Fragment>
      {listItemsData.map((item, index) => (
        <ListItemButton key={index} onClick={() => setActiveState(item.text)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};
export default MainListItems;
