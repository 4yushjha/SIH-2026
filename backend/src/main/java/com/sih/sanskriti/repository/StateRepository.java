package com.sih.sanskriti.repository;

import com.sih.sanskriti.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {
    Optional<State> findByNameIgnoreCase(String name);
    Optional<State> findByCodeIgnoreCase(String code);

    @Query("SELECT DISTINCT s FROM State s LEFT JOIN FETCH s.districts")
    List<State> findAllWithDistricts();
}
