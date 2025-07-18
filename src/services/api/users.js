export const getItemsList = (userId) => {
  return fetch(`https://playground.4geeks.com/todo/users/${userId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson.todos;
    })
    .catch((error) => {
      console.log("Oh No! There was a problem: \n", error);
    });
};
