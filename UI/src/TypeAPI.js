const api = "http://localhost:8080";
let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (typeId) =>
  fetch(`${api}/type/find/${typeId}`, { headers })
    .then((res) => res.json())

export const getAll = () =>
  fetch(`${api}/type/find/all`, {headers})
    .then((res) => res.json())

export const update = (type) =>
fetch(`${api}/type/${type.id}`, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type }),
    })
    .then((res) => res.json());
