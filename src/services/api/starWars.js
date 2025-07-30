import { fetchWrapper } from ".";

export const getCharacters = async () => {
  const data = await fetchWrapper("https://www.swapi.tech/api/people");
  return data.results;
};

export const getPlanets = async () => {
  const data = await fetchWrapper("https://www.swapi.tech/api/planets");
  return data.results;
};

export const getDetails = async (type, id) => {
  const data = await fetchWrapper(`https://www.swapi.tech/api/${type}/${id}`);
  return data.result.properties;
};
