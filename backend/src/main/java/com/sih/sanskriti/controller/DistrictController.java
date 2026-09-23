package com.sih.sanskriti.controller;

import com.sih.sanskriti.model.District;
import com.sih.sanskriti.repository.DistrictRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/districts")
@CrossOrigin(origins = "*")
public class DistrictController {

    private final DistrictRepository districtRepository;

    public DistrictController(DistrictRepository districtRepository) {
        this.districtRepository = districtRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<District> getDistrictDetails(@PathVariable Long id) {
        return districtRepository.findByIdWithDetails(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/state/{stateId}")
    public List<District> getDistrictsByState(@PathVariable Long stateId) {
        return districtRepository.findByStateId(stateId);
    }

    @GetMapping("/search")
    public List<District> searchDistricts(@RequestParam("q") String query) {
        return districtRepository.findByNameContainingIgnoreCase(query);
    }
}
