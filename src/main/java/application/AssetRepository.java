package application;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

// This will be AUTO IMPLEMENTED by Spring into a Bean called assetRepository
// CRUD refers Create, Read, Update, Delete

/**
 * This interface holds the asset records and is automatically implemented.
 *
 * @author Jay Bryant (https://spring.io/guides/gs/accessing-data-mysql/)
 * @author Sarah Haines
 */

public interface AssetRepository extends JpaRepository<Asset, Long>, JpaSpecificationExecutor<Asset> {

}