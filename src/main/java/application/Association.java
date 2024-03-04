package application;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * This class creates an Entity model of a Association for storage into the database with a standard
 * format. 
 *
 * @author Sarah Haines
 */
@Entity // This tells Hibernate to make a table out of this class
public class Association {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private Integer assetId;
  
  private String customAssociation1;
  
  private String customAssociation2;
  
  private String customAssociation3;
  
  private String customAssociation4;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getAssetId() {
    return assetId;
  }

  public void setAssetId(Integer assetId) {
    this.assetId = assetId;
  }

  public String getCustomAssociation1() {
    return customAssociation1;
  }

  public void setCustomAssociation1(String customAssociation1) {
    this.customAssociation1 = customAssociation1;
  }
  
  public String getCustomAssociation2() {
    return customAssociation2;
  }

  public void setCustomAssociation2(String customAssociation2) {
    this.customAssociation2 = customAssociation2;
  }
  
  public String getCustomAssociation3() {
    return customAssociation3;
  }

  public void setCustomAssociation3(String customAssociation3) {
    this.customAssociation3 = customAssociation3;
  }
  
  public String getCustomAssociation4() {
    return customAssociation4;
  }

  public void setCustomAssociation4(String customAssociation4) {
    this.customAssociation4 = customAssociation4;
  }
}
