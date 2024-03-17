package application.repository;

import application.AssetComment;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<AssetComment, Long> {
  List<AssetComment> findByItemId(Long itemId);
}

