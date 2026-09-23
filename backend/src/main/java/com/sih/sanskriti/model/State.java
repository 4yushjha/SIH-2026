package com.sih.sanskriti.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "states")
public class State {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false, length = 10)
    private String code;

    @Column(nullable = false, length = 20)
    private String type; // "STATE" or "UT"

    private String capital;

    @Column(columnDefinition = "TEXT")
    private String description;

    private Double centerLat;
    private Double centerLng;
    private Integer defaultZoom;

    @OneToMany(mappedBy = "state", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<District> districts = new ArrayList<>();

    public State() {}

    public State(String name, String code, String type, String capital, String description, Double centerLat, Double centerLng, Integer defaultZoom) {
        this.name = name;
        this.code = code;
        this.type = type;
        this.capital = capital;
        this.description = description;
        this.centerLat = centerLat;
        this.centerLng = centerLng;
        this.defaultZoom = defaultZoom;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getCapital() { return capital; }
    public void setCapital(String capital) { this.capital = capital; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Double getCenterLat() { return centerLat; }
    public void setCenterLat(Double centerLat) { this.centerLat = centerLat; }

    public Double getCenterLng() { return centerLng; }
    public void setCenterLng(Double centerLng) { this.centerLng = centerLng; }

    public Integer getDefaultZoom() { return defaultZoom; }
    public void setDefaultZoom(Integer defaultZoom) { this.defaultZoom = defaultZoom; }

    public List<District> getDistricts() { return districts; }
    public void setDistricts(List<District> districts) { this.districts = districts; }

    public void addDistrict(District district) {
        districts.add(district);
        district.setState(this);
    }
}
