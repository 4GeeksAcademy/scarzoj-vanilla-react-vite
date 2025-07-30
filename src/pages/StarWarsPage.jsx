import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { getCharacters, getPlanets } from "../services/api/starWars";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  CircularProgress,
} from "@mui/material";
import { FavoritesContext } from "../context/FavoritesContext";

export const StarWarsPage = () => {
  const [characters, setCharacters] = useState();
  const [planets, setPlanets] = useState();

  const { favorites, addFavorite, deleteFavorite } =
    useContext(FavoritesContext);

  const navigate = useNavigate();
  const baseImgUrl =
    "https://github.com/breatheco-de/swapi-images/blob/master/public/images";

  useEffect(() => {
    getCharacters().then((data) => setCharacters(data));
    getPlanets().then((data) => setPlanets(data));
  }, []);

  const renderCard = (item, type) => {
    const isFavorited = (uid, type) => {
      return favorites.some((fave) => {
        return fave.uid === uid && fave.type === type;
      });
    };

    return (
      <Card key={item.uid} sx={{ minWidth: 250, maxWidth: 250, m: 1 }}>
        <CardMedia
          sx={{
            height: 140,
            objectFit: "cover",
          }}
          image={`${baseImgUrl}/${type}/${item.uid}.jpg?raw=true`}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => navigate(`/star-wars/${type}/${item.uid}`)}
          >
            Details
          </Button>
          <Button
            variant={isFavorited(item.uid, type) ? "contained" : "outlined"}
            onClick={
              isFavorited(item.uid, type)
                ? () => deleteFavorite(item.uid, type)
                : () => addFavorite(item.name, item.uid, type)
            }
            size="small"
          >
            {isFavorited(item.uid, type) ? "Unfav" : "Fav"}
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Characters
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            p: 1,
            gap: 2,
            scrollbarWidth: "thin",
          }}
        >
          {characters ? (
            characters.map((character) => renderCard(character, "people"))
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Box>

      <Box>
        <Typography variant="h4" gutterBottom>
          Planets
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            p: 1,
            gap: 2,
            scrollbarWidth: "thin",
          }}
        >
          {planets ? (
            planets.map((planet) => renderCard(planet, "planets"))
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Box>
    </>
  );
};
