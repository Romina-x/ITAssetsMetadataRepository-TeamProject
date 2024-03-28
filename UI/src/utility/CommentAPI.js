//Defines a URL for the API
const api = "http://localhost:8080";
let token = sessionStorage.token;

if (!token) token = sessionStorage.token = Math.random().toString(36).substr(-8);

//Defines headers to be used in API requests
const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
};

//Function that gets a comment using its ID
export const get = (commentId) =>
  fetch(`${api}/comment/find/${commentId}`, { headers })
    .then((res) => res.json())

//Function that gets all the commments
export const getAll = () =>
  fetch(`${api}/comment/find/all`, { headers })
    .then((res) => res.json())

//Function that takes an ID and updates the comment with that ID
export const update = (comment) =>
  fetch(`${api}/comment/${comment.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comment }),
  })
    .then((res) => res.json());

//Function to add a comment
export const addComment = async (commentData) => {
  try {
    const response = await fetch(`${api}/comment/add`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...commentData,
        visibleComment: commentData.visibleComment,
      }),
    });

    return response;
  } catch (error) {
    throw new Error('Failed to add Comment:', error);
  }
};