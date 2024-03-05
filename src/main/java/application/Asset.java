package application;

import java.util.List;
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

  private String customAttribute1;

  private String customAttribute2;

  private String customAttribute3;

  private String customAttribute4;

  private List<String> associationList;

  private List<String> associationRelationList;


  public Asset() {}

  public Asset(Integer id, String type, String title, String link, Integer lineNum, String progLang,
      String customAttribute1, String customAttribute2, String customAttribute3, String customAttribute4,
      List<String> associationList, List<String> associationRelationList) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.link = link;
    this.lineNum = lineNum;
    this.progLang = progLang;
    this.customAttribute1 = customAttribute1;
    this.customAttribute2 = customAttribute2;
    this.customAttribute3 = customAttribute3;
    this.customAttribute4 = customAttribute4;
    this.associationList = associationList;
    this.associationRelationList = associationRelationList;
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

  public String getCustomAttribute1() {
    return customAttribute1;
  }

  public void setCustomAttribute1(String customAttribute1) {
    this.customAttribute1 = customAttribute1;
  }

  public String getCustomAttribute2() {
    return customAttribute2;
  }

  public void setCustomAttribute2(String customAttribute2) {
    this.customAttribute2 = customAttribute2;
  }

  public String getCustomAttribute3() {
    return customAttribute3;
  }

  public void setCustomAttribute3(String customAttribute3) {
    this.customAttribute3 = customAttribute3;
  }

  public String getCustomAttribute4() {
    return customAttribute4;
  }

  public void setCustomAttribute4(String customAttribute4) {
    this.customAttribute4 = customAttribute4;
  }

  public List<String> getAssociationList() {
    return associationList;
  }

  public void setAssociationList(List<String> associationList) {
    this.associationList = associationList;
  }

  public List<String> getAssociationRelationList() {
    return associationRelationList;
  }

  public void setAssociationRelationList(List<String> associationRelationList) {
    this.associationRelationList = associationRelationList;
  }
}
