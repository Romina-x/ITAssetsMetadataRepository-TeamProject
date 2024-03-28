package application.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;


  /**
   * Test suite for User Class to verify its basic functionality such as getters and setters
   *
   * @author Sarah Haines
   */


  class UserTest {

    /**
     * Test to verify the function of the User get/set ID
     */
    @Test
    public void userGetSetID() {
      User u = new User();
      u.setId(2);
      assertEquals(u.getId(), 2, "Test that the id can be set and retrieved");
    }

    /**
     * Test to verify the function of the User get/set first name
     */
    @Test
    public void UserGetSetFirstName() {
      User u = new User();
      u.setFirstName("Jim");
      assertEquals(u.getFirstName(), "Jim", "Test that the firstname can be set and retrieved");
    }
    
    /**
     * Test to verify the function of the User get/set last name
     */
    @Test
    public void UserGetSetLastname() {
      User u = new User();
      u.setLastName("Cricket");
      assertEquals(u.getLastName(), "Cricket", "Test that the lastname can be set and retrieved");
    }

    /**
     * Test to verify the function of the User is account non expired
     */
    @Test
    public void testIsAccountNonExpired() {
        User u = new User(); 
        assertEquals(u.isAccountNonExpired(), true, "Test that account should be non-expired");
    }
    
    @Test
    public void testIsAccountNonLocked() {
        User u = new User(); 
        assertEquals(u.isAccountNonLocked(), true, "Test that account should be non-locked");
    }

    @Test
    public void testIsCredentialsNonExpired() {
        User u = new User(); 
        assertEquals(u.isCredentialsNonExpired(), true, "Test that account should be non-expired");
    }

    @Test
    public void testIsEnabled() {
        User u = new User(); 
        assertEquals(u.isEnabled(), true, "Account should be enabled");
    }
    
    /**
     * Test to verify the function of the User get/set password
     */
    @Test
    public void UserGetSetPassword() {
      User u = new User();
      u.setPassword("pass");
      assertEquals(u.getPassword(), "pass", "Test that the password can be set and retrieved");
    }
    
    /**
     * Test to verify the function of the User get/set role
     */
    @Test
    public void UserGetSetRole() {
      User u = new User();
      u.setRole(Role.ADMIN);
      assertEquals(u.getRole(), Role.ADMIN, "Test that the role can be set and retrieved");
    }
 
}
