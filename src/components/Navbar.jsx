import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState } from "react";

import { useLocation, useNavigate } from "react-router";

import { pages } from "../utils/pages";
import { FavoritesContext } from "../context/FavoritesContext";

export const NavBar = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const { favorites, deleteFavorite } = useContext(FavoritesContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToFave = (type, uid) => {
    handleClose();
    navigate(`star-wars/${type}/${uid}`);
  };

  const inStarWars = location.pathname.includes("star-wars");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {pages.map((page, i) => {
            return (
              page.showNavigation && (
                <Button
                  key={i}
                  variant={"contained"}
                  sx={{ marginRight: "16px" }}
                  onClick={() => navigate(page.route)}
                >
                  {page.name}
                </Button>
              )
            );
          })}
          {inStarWars && favorites.length > 0 && (
            <>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                variant="contained"
                sx={{ cursor: "pointer" }}
              >
                Favorites
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                {favorites.map((fav) => {
                  return (
                    <MenuItem key={`${fav.uid}-${fav.type}`}>
                      <div onClick={() => navigateToFave(fav.type, fav.uid)}>
                        {fav.name}
                      </div>
                      <DeleteIcon
                        onClick={() => deleteFavorite(fav.uid, fav.type)}
                        sx={{ marginLeft: "16px" }}
                      />
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
