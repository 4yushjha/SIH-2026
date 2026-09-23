package com.sih.sanskriti.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "culture_items")
public class CultureItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "district_id", nullable = false)
    @JsonBackReference
    private District district;

    @Column(nullable = false, length = 30)
    private String type; // "DANCE", "FOOD", "SONG_MUSIC", "CRAFT", "FESTIVAL"

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String origin; // e.g., "Folk tradition of Marwar", "12th century temple dance"

    private String imageUrl;

    private String audioOrVideoUrl; // Media link or clip

    @Column(columnDefinition = "TEXT")
    private String culturalSignificance;

    public CultureItem() {}

    public CultureItem(District district, String type, String name, String description, String origin, String imageUrl, String audioOrVideoUrl, String culturalSignificance) {
        this.district = district;
        this.type = type;
        this.name = name;
        this.description = description;
        this.origin = origin;
        this.imageUrl = imageUrl;
        this.audioOrVideoUrl = audioOrVideoUrl;
        this.culturalSignificance = culturalSignificance;
    }

    public CultureItem(String type, String name, String description, String origin, String imageUrl, String audioOrVideoUrl, String culturalSignificance) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.origin = origin;
        this.imageUrl = imageUrl;
        this.audioOrVideoUrl = audioOrVideoUrl;
        this.culturalSignificance = culturalSignificance;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public District getDistrict() { return district; }
    public void setDistrict(District district) { this.district = district; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getOrigin() { return origin; }
    public void setOrigin(String origin) { this.origin = origin; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getAudioOrVideoUrl() { return audioOrVideoUrl; }
    public void setAudioOrVideoUrl(String audioOrVideoUrl) { this.audioOrVideoUrl = audioOrVideoUrl; }

    public String getCulturalSignificance() { return culturalSignificance; }
    public void setCulturalSignificance(String culturalSignificance) { this.culturalSignificance = culturalSignificance; }
}
