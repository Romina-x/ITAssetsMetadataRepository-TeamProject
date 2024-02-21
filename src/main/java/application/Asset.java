package application;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * This class creates an Entity model of a Asset for storage into the database with a standard
 * format. This is the minimal version of the information required by the database.
 *
 * @author Jay Bryant (https://spring.io/guides/gs/accessing-data-mysql/)
 * @author Sarah Haines
 */
@Entity // This tells Hibernate to make a table out of this class
public class Asset {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String type;

  private String title;

  private String link;

  private Integer lineNum;

  private String progLang;
  
  private Integer isDocumentedIn;
  
  private Integer dependsOn;
  
  private Integer succeededBy;



  public Asset() {}

  public Asset(Integer id, String type, String title, String link, Integer lineNum,
      String progLang, Integer isDocumentedIn, Integer dependsOn, Integer succeededBy) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.link = link;
    this.lineNum = lineNum;
    this.progLang = progLang;
    this.isDocumentedIn = isDocumentedIn;
    this.dependsOn = dependsOn;
    this.succeededBy = succeededBy;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getLink() {
    return link;
  }

  public void setLink(String link) {
    this.link = link;
  }

  public Integer getLineNum() {
    return lineNum;
  }

  public void setLineNum(Integer lineNum) {
    this.lineNum = lineNum;
  }

  public String getProgLang() {
    return progLang;
  }

  public void setProgLang(String progLang) {
    this.progLang = progLang;
  }
  
  public Integer getIsDocumentedIn() {
    return isDocumentedIn;
  }

  public void setIsDocumentedIn(Integer isDocumentedIn) {
    this.isDocumentedIn = isDocumentedIn;
  }  
  
  public Integer getDependsOn() {
    return dependsOn;
  }

  public void setDependsOn(Integer dependsOn) {
    this.dependsOn = dependsOn;
  }  
  
  public Integer getSucceededBy() {
    return succeededBy;
  }

  public void setSucceededBy(Integer succeededBy) {
    this.succeededBy = succeededBy;
  }  
  
}
