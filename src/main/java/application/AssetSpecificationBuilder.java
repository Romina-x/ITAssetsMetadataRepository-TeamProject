package application;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.jpa.domain.Specification;

public class AssetSpecificationBuilder {
  private final List<SearchCriteria> criteriaList;

  public AssetSpecificationBuilder() {
      this.criteriaList = new ArrayList<>();
  }

  public AssetSpecificationBuilder with(String key, String value) {
      criteriaList.add(new SearchCriteria(key, value));
      return this;
  }

  public Specification<Asset> build() {
      if (criteriaList.isEmpty()) {
          return null;
      }

      List<Specification<Asset>> specifications = new ArrayList<>();
      for (SearchCriteria criteria : criteriaList) {
          specifications.add(new keywordSpecification(criteria));
      }

      Specification<Asset> result = specifications.get(0);
      for (int i = 1; i < specifications.size(); i++) {
          result = Specification.where(result).and(specifications.get(i));
      }

      return result;
  }
}
