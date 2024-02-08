package application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



/**
 *  This program is a simple class to run the database application.
 *
 * @author Jay Bryant (https://spring.io/guides/gs/accessing-data-mysql/)
 */
@SpringBootApplication
public class AccessingDataMysqlApplication {

  public static void main(String[] args) {
    SpringApplication.run(AccessingDataMysqlApplication.class, args);
  }
  
  @Bean
  public WebMvcConfigurer corsConfigurer() {
     return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
           registry.addMapping("/products").allowedOrigins("http://localhost:8080");
        }
     };
  }
}