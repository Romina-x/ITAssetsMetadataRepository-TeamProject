package application;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Test;

/**
 * Test suite for Action Log Class to verify its basic functionality such as getters and setters
 *
 * @author Sarah Haines
 */


class ActionLogTest {

  /**
   * Test to verify the function of the ActionLog get/set log ID
   */
  @Test
  public void actionLogGetSetLogID() {
    ActionLog al = new ActionLog();
    al.setId(6);
    assertEquals(al.getId(), 6, "Test that the log id can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the ActionLog get/set item ID
   */
  @Test
  public void actionLogGetSetItemID() {
    ActionLog al = new ActionLog();
    al.setItemId(2);
    assertEquals(al.getItemId(), 2, "Test that the item id can be set and retrieved");
  }

  /**
   * Test to verify the function of the ActionLog get/set action
   */
  @Test
  public void actionLogGetSetAction() {
    ActionLog al = new ActionLog();
    al.setAction("Deleted");
    assertEquals(al.getAction(), "Deleted", "Test that the action can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the ActionLog get/set timestamp
   */
  @Test
  public void actionLogGetSetTimestamp() {
    ActionLog al = new ActionLog();
    LocalDateTime time = LocalDateTime.now();
    al.setTimestamp(time);
    assertEquals(al.getTimestamp(), time, "Test that the timestamp can be set and retrieved");
  }
  
}
