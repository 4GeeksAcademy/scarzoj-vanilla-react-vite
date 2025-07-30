import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
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

import { getDetails } from "../services/api/starWars";

export const StarWarsDetailsPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);
  const baseImgUrl =
    "https://github.com/breatheco-de/swapi-images/blob/master/public/images";

  useEffect(() => {
    if (type && id) {
      getDetails(type, id).then(setDetails);
    }
  }, [type, id]);

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="outlined" onClick={() => navigate("/star-wars")}>
        Back to Star Wars
      </Button>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {!details ? (
          <CircularProgress />
        ) : (
          <Card
            sx={{
              maxWidth: 400,
              width: "100%",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              image={`${baseImgUrl}/${type}/${id}.jpg?raw=true`}
              alt={details.name}
              sx={{
                height: 240,
                objectFit: "cover",
              }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {details.name}
              </Typography>
              {type === "people" && (
                <>
                  <Typography>Gender: {details.gender}</Typography>
                  <Typography>Hair Color: {details.hair_color}</Typography>
                  <Typography>Skin Color: {details.skin_color}</Typography>
                </>
              )}
              {type === "planets" && (
                <>
                  <Typography>Climate: {details.climate}</Typography>
                  <Typography>Diameter: {details.diameter}</Typography>
                  <Typography>Gravity: {details.gravity}</Typography>
                </>
              )}
            </CardContent>
            <CardActions>
              <Button size="small">Fav</Button>
            </CardActions>
          </Card>
        )}
      </Box>
    </Box>
  );
};
