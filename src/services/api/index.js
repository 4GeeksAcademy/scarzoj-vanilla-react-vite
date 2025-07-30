export const fetchWrapper = async (url, init) => {
  try {
    const data = await fetch(url, init);
    const jsonData = await data.json();
    return jsonData;
  } catch (e) {
    return console.log(e);
  }
};
