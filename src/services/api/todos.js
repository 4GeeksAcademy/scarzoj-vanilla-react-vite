export const createItemReq = (userId, requestBody) => {
  return fetch(`https://playground.4geeks.com/todo/todos/${userId}`, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    console.log("Oh No! There was a problem: \n", error);
  });
};

export const deleteItemReq = (id) => {
  return fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
    method: "DELETE",
  }).catch((error) => {
    console.log("Oh No! There was a problem: \n", error);
  });
};
