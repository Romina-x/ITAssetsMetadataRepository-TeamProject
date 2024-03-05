package application;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Test suite for Asset Class to verify its basic functionality such as getters and setters
 *
 * @author Sarah Haines
 */


class AssetTest {

  /**
   * Test to verify the function of the Asset get/set ID
   */
  @Test
  public void assetGetSetID() {
    Asset a = new Asset();
    a.setId(2);
    assertEquals(a.getId(), 2, "Test that the id can be set and retrieved");
  }

  /**
   * Test to verify the function of the Asset get/set Type
   */
  @Test
  public void assetGetSetType() {
    Asset a = new Asset();
    a.setType("Document");
    assertEquals(a.getType(), "Document", "Test that the type can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the Asset get/set Title
   */
  @Test
  public void assetGetSetTitle() {
    Asset a = new Asset();
    a.setTitle("I am a document");
    assertEquals(a.getTitle(), "I am a document", "Test that the title can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the Asset get/set Link
   */
  @Test
  public void assetGetSetLink() {
    Asset a = new Asset();
    a.setLink("www.google.com");
    assertEquals(a.getLink(), "www.google.com", "Test that the link can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the Asset get/set LineNum
   */
  @Test
  public void assetGetSetLineNum() {
    Asset a = new Asset();
    a.setLineNum(600);
    assertEquals(a.getLineNum(), 600, "Test that the lineNum can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the Asset get/set ProgLang
   */
  @Test
  public void assetGetSetProgLang() {
    Asset a = new Asset();
    a.setProgLang("Java");
    assertEquals(a.getProgLang(), "Java", "Test that the ProgLang can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the Asset get/set relations list
   */
  @Test
  public void assetGetSetAssociationRelationsList() {
    Asset a = new Asset();
    List<String> asRelList = new ArrayList<>();
    asRelList.add("Depends On");
    a.setAssociationRelationList(asRelList);
    assertEquals(a.getAssociationRelationList(), asRelList , "Test that the relations list can be set and retrieved");
  }
  
  /**
   * Test to verify the function of the Asset get/set associations list
   */
  @Test
  public void assetGetSetAssociationList() {
    Asset a = new Asset();
    List<String> asList = new ArrayList<>();
    asList.add("4");
    a.setAssociationList(asList);
    assertEquals(a.getAssociationList(), asList , "Test that the associations list can be set and retrieved");
  }
  

}
