package com.sih.sanskriti.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "districts")
public class District {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "state_id", nullable = false)
    @JsonBackReference
    private State state;

    @Column(columnDefinition = "TEXT")
    private String whyFamous;

    @Column(columnDefinition = "TEXT")
    private String historicalSignificance;

    @Column(columnDefinition = "TEXT")
    private String description;

    private Double lat;
    private Double lng;

    private String heroImageUrl;

    @OneToMany(mappedBy = "district", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonManagedReference
    private Set<Place> places = new LinkedHashSet<>();

    @OneToMany(mappedBy = "district", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonManagedReference
    private Set<CultureItem> cultureItems = new LinkedHashSet<>();

    public District() {}

    public District(String name, String whyFamous, String historicalSignificance, String description, Double lat, Double lng, String heroImageUrl) {
        this.name = name;
        this.whyFamous = whyFamous;
        this.historicalSignificance = historicalSignificance;
        this.description = description;
        this.lat = lat;
        this.lng = lng;
        this.heroImageUrl = heroImageUrl;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public State getState() { return state; }
    public void setState(State state) { this.state = state; }

    public String getWhyFamous() { return whyFamous; }
    public void setWhyFamous(String whyFamous) { this.whyFamous = whyFamous; }

    public String getHistoricalSignificance() { return historicalSignificance; }
    public void setHistoricalSignificance(String historicalSignificance) { this.historicalSignificance = historicalSignificance; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Double getLat() { return lat; }
    public void setLat(Double lat) { this.lat = lat; }

    public Double getLng() { return lng; }
    public void setLng(Double lng) { this.lng = lng; }

    public String getHeroImageUrl() { return heroImageUrl; }
    public void setHeroImageUrl(String heroImageUrl) { this.heroImageUrl = heroImageUrl; }

    public Set<Place> getPlaces() { return places; }
    public void setPlaces(Set<Place> places) { this.places = places; }

    public Set<CultureItem> getCultureItems() { return cultureItems; }
    public void setCultureItems(Set<CultureItem> cultureItems) { this.cultureItems = cultureItems; }

    public void addPlace(Place place) {
        places.add(place);
        place.setDistrict(this);
    }

    public void addCultureItem(CultureItem item) {
        cultureItems.add(item);
        item.setDistrict(this);
    }
}
