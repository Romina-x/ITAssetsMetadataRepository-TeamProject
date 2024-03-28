package application.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

/**
 * Test suite for Authentication Response Class to verify its basic functionality such as getters
 *
 * @author Sarah Haines
 */

class AuthenticationResponseTest {

  /**
   * Test to verify the function of the Authentication Response getters
   */
  @Test
  public void testAuthResponseGetters() {
    String token = "TOK";
    String message = "msg";
    Role role = Role.ADMIN;
    String username = "User_33";  
    AuthenticationResponse response = new AuthenticationResponse(token, message, role, username);

    assertEquals(response.getToken(), token, "Test that the token can be retrieved");
    assertEquals(response.getMessage(), message, "Test that the message can be retrieved");
    assertEquals(response.getRole(), role, "Test that the role can be retrieved");
    assertEquals(response.getUsername(), username, "Test that the username can be retrieved");

  }

  
}
