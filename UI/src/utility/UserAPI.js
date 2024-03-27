//Defines URL for the API
const api = "http://localhost:8080";
let token = sessionStorage.token;

if (!token) token = sessionStorage.token = Math.random().toString(36).substr(-8);

//Defines headers to be used in API requests
const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
};

//Function to fetch user data based on the username
export const get = (username) =>
  fetch(`${api}/user/${username}`, { headers }).then((res) => res.json());

//Function to fetch all user data
export const getAll = () =>
  fetch(`${api}/user/find/all`, { headers }).then((res) => res.json());

//Function to update a user
export const update = (user) =>
  fetch(`${api}/user/${user.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  }).then((res) => res.json());

//Function to delete a user by its ID
export const deleteById = async (id) => {
  try {
    const response = await fetch(`${api}/user/delete/${id}`, {
      method: "DELETE",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    throw new Error(`Failed to delete user with ID ${id}: ${error.message}`);
  }
};

//Function to update the role of a user
export const updateRole = async (userData) => {
  try {
    const response = await fetch(`${api}/user/${userData.updatingUsername}/role`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "role": userData.updatingRole
      }),
    });

    return response;
  } catch (error) {
    throw new Error('Failed to update role:', error);
  }
};