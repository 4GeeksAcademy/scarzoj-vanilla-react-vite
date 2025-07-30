import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  addFavorite: (name, uid, type) => {},
  deleteFavorite: (uid, type) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (name, uid, type) => {
    setFavorites([
      ...favorites,
      {
        name: name,
        uid: uid,
        type: type,
      },
    ]);
  };

  const deleteFavorite = (uid, type) => {
    setFavorites(
      favorites.filter((fave) => {
        return !(fave.uid === uid && fave.type === type);
      }),
    );
  };

  console.log(favorites);
  return (
    <>
      <FavoritesContext value={{ favorites, addFavorite, deleteFavorite }}>
        {children}
      </FavoritesContext>
    </>
  );
};
