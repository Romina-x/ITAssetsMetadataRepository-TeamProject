const api = "http://localhost:8080";
let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

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
    } catch (error) {
      throw new Error('Failed to create user:', error.message);
    }
};