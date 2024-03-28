//Define URL for API
const api = "http://localhost:8080";
let token = sessionStorage.token;

if (!token) token = sessionStorage.token = Math.random().toString(36).substr(-8);

//Defines headers to be used in API requests
const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
};

//Function to get an asset by its ID
export const get = (assetId) =>
  fetch(`${api}/asset/find/${assetId}`, { headers }).then((res) => res.json());

//Function to get all assets
export const getAll = () =>
  fetch(`${api}/asset/find/all`, { headers }).then((res) => res.json());

//Function that checks if an asset exists with a certain type and title
export const getExists = (title, type) =>
  fetch(`${api}/asset/getAssetExists/${title}/${type}`, { headers }).then((res) => res.json()).then(data => data);

//Function that updates an asset
export const update = (asset) =>
  fetch(`${api}/asset/${asset.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ asset }),
  }).then((res) => res.json());

//Function that takes in an ID for an asset and deletes it
export const deleteById = async (id) => {
  try {
    const response = await fetch(`${api}/asset/delete/${id}`, {
      method: "DELETE",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    throw new Error(`Failed to delete asset with ID ${id}: ${error.message}`);
  }
};

//Function to add a new asset
export const addAsset = async (assetData) => {
  try {
    const response = await fetch(`${api}/asset/add`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(assetData),
    });

    return response;
  } catch (error) {
    throw new Error('Failed to add asset:', error);
  }
};
