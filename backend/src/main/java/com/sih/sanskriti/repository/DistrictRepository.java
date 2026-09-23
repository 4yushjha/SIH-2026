package com.sih.sanskriti.repository;

import com.sih.sanskriti.model.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface DistrictRepository extends JpaRepository<District, Long> {
    List<District> findByStateId(Long stateId);
    List<District> findByNameContainingIgnoreCase(String name);

    @Query("SELECT d FROM District d LEFT JOIN FETCH d.places LEFT JOIN FETCH d.cultureItems WHERE d.id = :id")
    Optional<District> findByIdWithDetails(@Param("id") Long id);
}
