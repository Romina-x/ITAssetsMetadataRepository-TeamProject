package application;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

/**
 * This interface holds the user records and is automatically implemented.
 *
 * @author Jay Bryant (https://spring.io/guides/gs/accessing-data-mysql/)
 * @author Kyle Piazza-Nickson
 */

public interface UserRepository extends CrudRepository<User, Integer> {

	Optional<User> findOneByName(String name);

}