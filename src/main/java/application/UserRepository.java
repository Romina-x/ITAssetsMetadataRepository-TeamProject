package application;

import org.springframework.data.repository.CrudRepository;

import application.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

/**
 * This interface holds the user (asset) records and is automatically implemented.
 *
 * @author Jay Bryant (https://spring.io/guides/gs/accessing-data-mysql/)
 */

public interface UserRepository extends CrudRepository<User, Integer> {

}