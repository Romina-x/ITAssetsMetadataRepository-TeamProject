//Defines URL for the API
const api = "http://localhost:8080";
let token = sessionStorage.token;

if (!token) token = sessionStorage.token = Math.random().toString(36).substr(-8);

//Defines headers to be used in API requests
const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
};

//Function to fetch data for a type based on its ID
export const get = (typeId) =>
  fetch(`${api}/type/find/${typeId}`, { headers }).then((res) => res.json());

//Function to fetch all the types
export const getAll = () =>
  fetch(`${api}/type/find/all`, { headers }).then((res) => res.json());

//Function that checks if a type exists with a certain name
export const getTypeExists = (typeName) =>
  fetch(`${api}/type/getTypeExists/${typeName}`, { headers }).then((res) => res.json()).then(data => data);

//Function to update a type
export const update = (type) =>
  fetch(`${api}/type/${type.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type }),
  }).then((res) => res.json());

//Function to delete a type based on its ID
export const deleteById = async (id) => {
  try {
    const response = await fetch(`${api}/type/delete/${id}`, {
      method: "DELETE",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    throw new Error(`Failed to delete type with ID ${id}: ${error.message}`);
  }
};

//Function to add a new type
export const addType = async (typeData) => {
  try {
    const response = await fetch(`${api}/type/add`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(typeData),
    });

    return response;
  } catch (error) {
    throw new Error('Failed to add Type:', error);
  }
};
