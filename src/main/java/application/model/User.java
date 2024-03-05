package application.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

/**
 * This class creates an Entity model of a user for storage into the database with a standard
 * format. This is the minimal version of the information required by the database.
 *
 * @author Jay Bryant (https://spring.io/guides/gs/accessing-data-mysql/)
 * @author Kyle Piazza-Nickson
 * @author Hien Phan
 */
@Entity
public class User implements UserDetails{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  
  private String name;

  private String username;
  
  private String password;

  @Enumerated(value = EnumType.STRING)
  private Role role;
  
  //private Permissions role;
  //Commented out and replaced with string for the sake of making the html createUser work in time
  //will be re-implemented early next sprint

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
  
  
