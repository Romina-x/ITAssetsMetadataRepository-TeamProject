//Define the URL for the API
const api = "http://localhost:8080";
let token = sessionStorage.token;

//Checks if a token exists, else generates a new one
if (!token) token = sessionStorage.token = Math.random().toString(36).substr(-8);

//Defines headers to be used in API requests
const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
};

//Function to get a log based on its ID
export const get = (logId) =>
  fetch(`${api}/log/find/${logId}`, { headers })
    .then((res) => res.json())

//Function to get all logs
export const getAll = () =>
  fetch(`${api}/log/find/all`, { headers })
    .then((res) => res.json())

//Function to update an existing log
export const update = (log) =>
  fetch(`${api}/log/${log.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ log }),
  })
    .then((res) => res.json());
