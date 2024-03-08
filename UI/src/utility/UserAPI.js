const api = "http://localhost:8080";
let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (userId) =>
  fetch(`${api}/user/find/${userId}`, { headers }).then((res) => res.json());

export const getAll = () =>
  fetch(`${api}/user/find/all`, { headers }).then((res) => res.json());

export const update = (user) =>
  fetch(`${api}/user/${user.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  }).then((res) => res.json());

export const deleteById = async (id) => {
  try {
    const response = await fetch(`${api}/user/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    throw new Error(`Failed to delete user with ID ${id}: ${error.message}`);
  }
};

export const addUser = async (userData) => {
  try {
    const response = await fetch(`${api}/user/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    return response;
  } catch (error) {
    throw new Error('Failed to add Type:', error);
  }
};

export const updateRole = async (userData) => {
  try {
    const response = await fetch(`${api}/user/edit/role`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    return response;
  } catch (error) {
    throw new Error('Failed to update role:', error);
  }
};