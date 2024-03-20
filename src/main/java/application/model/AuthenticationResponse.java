package application.model;

public class AuthenticationResponse {
    private String token;
    private String message;
    private Role role;
    private String username;

    public AuthenticationResponse(String token, String message, Role role, String username) {
        this.token = token;
        this.message = message;
        this.role = role;
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public String getMessage() {
        return message;
    }

    public Role getRole() {
        return role;
    }
    public String getUsername() {
        return username;
    }
}
