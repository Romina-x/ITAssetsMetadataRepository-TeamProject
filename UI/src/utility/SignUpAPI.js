//Defines URL for the API
const api = "http://localhost:8080";

//Function for a user to sign up
export const register = async (userData) => {
  try {
    const response = await fetch(`${api}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    return response.json();
    //To catch any error that occur when a user tries to sign up
  } catch (error) {
    throw new Error('Failed to create user:', error.message);
  }
};