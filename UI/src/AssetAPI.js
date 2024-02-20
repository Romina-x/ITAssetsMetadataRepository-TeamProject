const api = "http://localhost:8080";
let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (assetId) =>
  fetch(`${api}/asset/${assetId}`, { headers })
    .then((res) => res.json())

export const getAll = () =>
  fetch(`${api}/asset/find/all`, {headers})
    .then((res) => res.json())

export const update = (asset) =>
fetch(`${api}/asset/${asset.id}`, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ asset }),
    })
    .then((res) => res.json());

    export const deleteById = async (id) => {
      try {
        const response = await fetch(`http://localhost:8080/asset/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        return response;
      } catch (error) {
        throw new Error(`Failed to delete asset with ID ${id}: ${error.message}`);
      }
    };
