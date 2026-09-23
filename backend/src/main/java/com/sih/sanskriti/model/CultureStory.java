package com.sih.sanskriti.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "culture_stories")
public class CultureStory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String authorName;

    @Column(nullable = false)
    private String stateName;

    private String districtName;

    @Column(nullable = false)
    private String category; // "Hidden Gem", "Folklore & Story", "Traditional Food", "Folk Art & Dance", "Ancient Ritual"

    @Column(columnDefinition = "TEXT", nullable = false)
    private String storyText;

    private String mediaType; // "IMAGE", "VIDEO"

    @Column(columnDefinition = "TEXT")
    private String mediaUrl; // Image URL or Video URL/Embed

    private Integer upvotes = 0;

    private LocalDateTime createdAt;

    @PrePersist
    public void onPrePersist() {
        if (createdAt == null) {
            createdAt = LocalDateTime.now();
        }
        if (upvotes == null) {
            upvotes = 0;
        }
    }

    public CultureStory() {}

    public CultureStory(String title, String authorName, String stateName, String districtName, String category, String storyText, String mediaType, String mediaUrl) {
        this.title = title;
        this.authorName = authorName;
        this.stateName = stateName;
        this.districtName = districtName;
        this.category = category;
        this.storyText = storyText;
        this.mediaType = mediaType;
        this.mediaUrl = mediaUrl;
        this.upvotes = 0;
        this.createdAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAuthorName() { return authorName; }
    public void setAuthorName(String authorName) { this.authorName = authorName; }

    public String getStateName() { return stateName; }
    public void setStateName(String stateName) { this.stateName = stateName; }

    public String getDistrictName() { return districtName; }
    public void setDistrictName(String districtName) { this.districtName = districtName; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getStoryText() { return storyText; }
    public void setStoryText(String storyText) { this.storyText = storyText; }

    public String getMediaType() { return mediaType; }
    public void setMediaType(String mediaType) { this.mediaType = mediaType; }

    public String getMediaUrl() { return mediaUrl; }
    public void setMediaUrl(String mediaUrl) { this.mediaUrl = mediaUrl; }

    public Integer getUpvotes() { return upvotes; }
    public void setUpvotes(Integer upvotes) { this.upvotes = upvotes; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
