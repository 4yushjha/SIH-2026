package com.sih.sanskriti.repository;

import com.sih.sanskriti.model.CultureItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CultureItemRepository extends JpaRepository<CultureItem, Long> {
    List<CultureItem> findByDistrictId(Long districtId);
    List<CultureItem> findByDistrictIdAndType(Long districtId, String type);
    List<CultureItem> findByType(String type);
}
