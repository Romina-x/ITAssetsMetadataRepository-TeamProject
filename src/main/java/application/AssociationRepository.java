package application;

import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called typeRepository
// CRUD refers Create, Read, Update, Delete

/**
 * This interface holds the type records and is automatically implemented.
 *
 * @author Sarah Haines
 */

public interface AssociationRepository extends CrudRepository<Association, Integer> {

}