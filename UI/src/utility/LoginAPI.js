//Defines URL for the API
const api = "http://localhost:8080";

//Function for a user to log in
export const login = async (userData) => {
    try {
        //Send a POST request using the user data filled in
        const response = await fetch(`${api}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        //checks if the login is successful
        if (response.ok) {
            const data = await response.json();
            if (data.token) {
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('role', data.role);
                sessionStorage.setItem('username', data.username)
            }
            return data;
        } else {
            throw new Error('Failed to login: Invalid credentials');
        }
        //To catch any error that occur when a user tries to login
    } catch (error) {
        throw new Error('Failed to login:', error.message);
    }
};