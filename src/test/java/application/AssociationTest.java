package application;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

/**
 * Test suite for Association Class to verify its basic functionality such as getters and setters
 *
 * @author Sarah Haines
 */


class AssociationTest {

  /**
   * Test to verify the function of the Association get/set ID
   */
  @Test
  public void associationGetSetID() {
    Association as = new Association();
    as.setId(2);
    assertEquals(as.getId(), 2, "Test that the id can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the Association get/set AssetID
   */
  @Test
  public void associationGetSetAssetID() {
    Association as = new Association();
    as.setAssetId(5);
    assertEquals(as.getAssetId(), 5, "Test that the Assetid can be set and retrieved");
  }

  /**
   * Test to verify the function of the Association get/set Custom Association 1
   */
  @Test
  public void typeGetSetCustomAssociation1() {
    Association as = new Association();
    as.setCustomAssociation1("Version");
    assertEquals(as.getCustomAssociation1(), "Version", "Test that the CustomAssociation1 can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the Association get/set Custom Association 2
   */
  @Test
  public void typeGetSetCustomAssociation2() {
    Association as = new Association();
    as.setCustomAssociation2("Author");
    assertEquals(as.getCustomAssociation2(), "Author", "Test that the CustomAssociation2 can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the Association get/set Custom Association 3
   */
  @Test
  public void typeGetSetCustomAssociation3() {
    Association as = new Association();
    as.setCustomAssociation3("Security Rating");
    assertEquals(as.getCustomAssociation3(), "Security Rating", "Test that the CustomAssociation3 can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the Association get/set Custom Association 4
   */
  @Test
  public void typeGetSetCustomAssociation4() {
    Association as = new Association();
    as.setCustomAssociation4("Format");
    assertEquals(as.getCustomAssociation4(), "Format", "Test that the CustomAssociation4 can be set and retrieved");
  }
  
}
