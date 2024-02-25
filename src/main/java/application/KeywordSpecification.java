package application;

import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public class KeywordSpecification implements Specification<Asset> {

    private static final long serialVersionUID = 1L;
    private Asset criteria;

    public KeywordSpecification(Asset criteria) {
        this.criteria = criteria;
    }

    @Override
    public Predicate toPredicate(Root<Asset> root, CriteriaQuery<?> query,
                                 CriteriaBuilder builder) {
        Predicate predicate = builder.conjunction(); // Start with an empty conjunction

        if (criteria.getTitle() != null && !criteria.getTitle().isEmpty()) {
            predicate = builder.and(predicate, builder.like(root.get("title"), "%" + criteria.getTitle() + "%"));
        }

        if (criteria.getType() != null && !criteria.getType().isEmpty()) {
            predicate = builder.and(predicate, builder.equal(root.get("type"), criteria.getType()));
        }

        if (criteria.getLink() != null && !criteria.getLink().isEmpty()) {
            predicate = builder.and(predicate, builder.like(root.get("link"), "%" + criteria.getLink() + "%"));
        }

        if (criteria.getProgLang() != null && !criteria.getProgLang().isEmpty()) {
            predicate = builder.and(predicate, builder.equal(root.get("progLang"), criteria.getProgLang()));
        }

        return predicate;
    }
}