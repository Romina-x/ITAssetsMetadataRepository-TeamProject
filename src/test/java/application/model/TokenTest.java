package application.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

/**
 * Test suite for Token Class to verify its basic functionality such as getters and setters
 *
 * @author Sarah Haines
 */


class TokenTest {

  /**
   * Test to verify the function of the User get/set ID
   */
  @Test
  public void tokenGetSetID() {
    Token t = new Token();
    t.setId(2);
    assertEquals(t.getId(), 2, "Test that the id can be set and retrieved");
  }

  /**
   * Test to verify the function of the User get/set token
   */
  @Test
  public void tokenGetSetToken() {
    Token t = new Token();
    t.setToken("TOK");
    assertEquals(t.getToken(), "TOK", "Test that the token can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the User get/set isLoggedOut
   */
  @Test
  public void tokenGetSetLoggedOut() {
    Token t = new Token();
    t.setLoggedOut(true);
    assertEquals(t.isLoggedOut(), true, "Test that the isLoggedOut can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the User get/set user
   */
  @Test
  public void tokenGetSetUser() {
    Token t = new Token();
    User u = new User();
    t.setUser(u);
    assertEquals(t.getUser(), u, "Test that the user can be set and retrieved");
  }
  
}
