package application;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * This class creates an Entity model of a user for storage into the database with a standard
 * format. This is the minimal version of the information required by the database.
 *
 * @author Jay Bryant (https://spring.io/guides/gs/accessing-data-mysql/)
 * @author Kyle Piazza-Nickson
 */
@Entity
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  
  private String name;
  
  private String password;
  
  //private Permissions role;
  
  private String role;
  
  public User() {
	  
  }
  
  public void setId(Integer id) {
	  this.id = id;
  }
  
  public void setName(String name) {
	  this.name = name;
  }
  
  public void setPassword(String password) {
	  this.password = password;
  }
  
  public void setRole(String role) {
	  this.role = role;
  }
  
  public Integer getId() {
	  return this.id;
  }
  
  @Column(name = "name")
  public String getName() {
	  return this.name;
  }
  
  public String getPassword() {
	  return this.password;
  }
  
  public String getRole() {
	  return this.role;
  }
}
  
  
