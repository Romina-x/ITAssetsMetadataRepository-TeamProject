package application.DTO;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import application.model.Role;

  /**
   * Test suite for UserDTO Class to verify its basic functionality such as getters and setters
   *
   * @author Sarah Haines
   */

  class UserDTOTest {

    /** 
     * Test to verify the function of the UserDTO get/set ID
     */
    @Test
    public void UserDTOGetSetID() {
      UserDTO ud = new UserDTO();
      ud.setID(2);
      assertEquals(ud.getID(), 2, "Test that the id can be set and retrieved");
    }
    
    /**
     * Test to verify the function of the UserDTO get/set first name
     */
    @Test
    public void UserDTOGetSetFirstname() {
      UserDTO ud = new UserDTO();
      ud.setFirstname("Jim");
      assertEquals(ud.getFirstname(), "Jim", "Test that the firstname can be set and retrieved");
    }
    
    /**
     * Test to verify the function of the UserDTO get/set last name
     */
    @Test
    public void UserDTOGetSetLastname() {
      UserDTO ud = new UserDTO();
      ud.setLastname("Chaney");
      assertEquals(ud.getLastname(), "Chaney", "Test that the lastname can be set and retrieved");
    }

    /**
     * Test to verify the function of the UserDTO get/set user name
     */
    @Test
    public void UserDTOGetSetUsername() {
      UserDTO ud = new UserDTO();
      ud.setUsername("JC_33");
      assertEquals(ud.getUsername(), "JC_33", "Test that the username can be set and retrieved");
    }
    
    /**
     * Test to verify the function of the UserDTO get/set role
     */
    @Test
    public void UserDTOGetSetRole() {
      UserDTO ud = new UserDTO();
      ud.setRole(Role.ADMIN);
      assertEquals(ud.getRole(), Role.ADMIN, "Test that the role can be set and retrieved");
    }
}
