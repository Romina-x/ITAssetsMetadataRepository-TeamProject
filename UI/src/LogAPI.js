const api = "http://localhost:8080";
let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (logId) =>
  fetch(`${api}/log/${logId}`, { headers })
    .then((res) => res.json())

export const getAll = () =>
  fetch(`${api}/log/find/all`, {headers})
    .then((res) => res.json())

export const update = (log, shelf) =>
fetch(`${api}/books/${log.id}`, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shelf }),
    })
    .then((res) => res.json());
