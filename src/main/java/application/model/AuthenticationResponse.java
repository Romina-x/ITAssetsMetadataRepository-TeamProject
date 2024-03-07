package application.model;

public class AuthenticationResponse {
    private String token;
    private String message;
    private Role role;

    public AuthenticationResponse(String token, String message, Role role) {
        this.token = token;
        this.message = message;
        this.role = role;
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
}
