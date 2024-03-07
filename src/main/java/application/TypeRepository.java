package application;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called typeRepository
// CRUD refers Create, Read, Update, Delete

/**
 * This interface holds the type records and is automatically implemented.
 *
 * @author Jay Bryant (https://spring.io/guides/gs/accessing-data-mysql/)
 * @author Sarah Haines
 * @author Yusur Taha
 */

public interface TypeRepository extends CrudRepository<Type, Integer> {

	Optional<Type> findByTypeName(String typeName);

  boolean existsByTitle(String typeName);

}