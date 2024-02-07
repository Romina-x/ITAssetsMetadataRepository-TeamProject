package application;

import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public class keywordSpecification implements Specification<Asset> {

  private static final long serialVersionUID = 1L;
  private SearchCriteria criteria; 

  public keywordSpecification(SearchCriteria criteria) {
      this.criteria = criteria;
  }
  
  @Override
  public Predicate toPredicate(Root<Asset> root, CriteriaQuery<?> query,
      CriteriaBuilder builder) {
    if (criteria.getKey().equalsIgnoreCase("title")) {
      return builder.like(root.get("title"), "%" + criteria.getValue() + "%");
  } else if (criteria.getKey().equalsIgnoreCase("type")) {
      return builder.equal(root.get("type"), criteria.getValue());
  } else if (criteria.getKey().equalsIgnoreCase("link")) {
      return builder.like(root.get("link"), "%" + criteria.getValue() + "%");
  } else if (criteria.getKey().equalsIgnoreCase("programmingLanguage")) {
      return builder.equal(root.get("programmingLanguage"), criteria.getValue());
  }
  return null;
}

}
