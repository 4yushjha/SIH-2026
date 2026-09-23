package com.sih.sanskriti.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "places")
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "district_id", nullable = false)
    @JsonBackReference
    private District district;

    private String category; // "MONUMENT", "TEMPLE", "FORT", "PALACE", "NATURE", "HERITAGE"

    @Column(columnDefinition = "TEXT")
    private String description;

    private String imageUrl;

    private String historicalPeriod; // e.g., "16th Century", "Mughal Era", "Chola Dynasty"

    public Place() {}

    public Place(District district, String name, String category, String description, String imageUrl, String historicalPeriod) {
        this.district = district;
        this.name = name;
        this.category = category;
        this.description = description;
        this.imageUrl = imageUrl;
        this.historicalPeriod = historicalPeriod;
    }

    public Place(String name, String category, String description, String imageUrl, String historicalPeriod) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.imageUrl = imageUrl;
        this.historicalPeriod = historicalPeriod;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public District getDistrict() { return district; }
    public void setDistrict(District district) { this.district = district; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getHistoricalPeriod() { return historicalPeriod; }
    public void setHistoricalPeriod(String historicalPeriod) { this.historicalPeriod = historicalPeriod; }
}
