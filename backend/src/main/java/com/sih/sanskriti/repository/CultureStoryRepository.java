package com.sih.sanskriti.repository;

import com.sih.sanskriti.model.CultureStory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CultureStoryRepository extends JpaRepository<CultureStory, Long> {
    List<CultureStory> findAllByOrderByCreatedAtDesc();
    List<CultureStory> findAllByOrderByUpvotesDesc();
    List<CultureStory> findByStateNameIgnoreCaseOrderByCreatedAtDesc(String stateName);
    List<CultureStory> findByCategoryIgnoreCaseOrderByCreatedAtDesc(String category);
    List<CultureStory> findByStateNameIgnoreCaseAndCategoryIgnoreCaseOrderByCreatedAtDesc(String stateName, String category);
}
