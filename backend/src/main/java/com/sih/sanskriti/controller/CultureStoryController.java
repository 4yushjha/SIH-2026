package com.sih.sanskriti.controller;

import com.sih.sanskriti.model.CultureStory;
import com.sih.sanskriti.repository.CultureStoryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stories")
@CrossOrigin(origins = "*")
public class CultureStoryController {

    private final CultureStoryRepository cultureStoryRepository;

    public CultureStoryController(CultureStoryRepository cultureStoryRepository) {
        this.cultureStoryRepository = cultureStoryRepository;
    }

    @GetMapping
    public List<CultureStory> getStories(
            @RequestParam(required = false) String state,
            @RequestParam(required = false) String category,
            @RequestParam(required = false, defaultValue = "newest") String sort
    ) {
        if (state != null && !state.trim().isEmpty() && category != null && !category.trim().isEmpty()) {
            return cultureStoryRepository.findByStateNameIgnoreCaseAndCategoryIgnoreCaseOrderByCreatedAtDesc(state.trim(), category.trim());
        } else if (state != null && !state.trim().isEmpty()) {
            return cultureStoryRepository.findByStateNameIgnoreCaseOrderByCreatedAtDesc(state.trim());
        } else if (category != null && !category.trim().isEmpty()) {
            return cultureStoryRepository.findByCategoryIgnoreCaseOrderByCreatedAtDesc(category.trim());
        }

        if ("popular".equalsIgnoreCase(sort)) {
            return cultureStoryRepository.findAllByOrderByUpvotesDesc();
        }
        return cultureStoryRepository.findAllByOrderByCreatedAtDesc();
    }

    @PostMapping
    public ResponseEntity<CultureStory> createStory(@RequestBody CultureStory story) {
        if (story.getTitle() == null || story.getTitle().trim().isEmpty() ||
            story.getStoryText() == null || story.getStoryText().trim().isEmpty() ||
            story.getStateName() == null || story.getStateName().trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        if (story.getAuthorName() == null || story.getAuthorName().trim().isEmpty()) {
            story.setAuthorName("Heritage Lover");
        }
        if (story.getCategory() == null || story.getCategory().trim().isEmpty()) {
            story.setCategory("Underrated Gem");
        }

        CultureStory saved = cultureStoryRepository.save(story);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PostMapping("/{id}/upvote")
    public ResponseEntity<CultureStory> upvoteStory(@PathVariable Long id) {
        return cultureStoryRepository.findById(id)
                .map(story -> {
                    story.setUpvotes((story.getUpvotes() == null ? 0 : story.getUpvotes()) + 1);
                    return ResponseEntity.ok(cultureStoryRepository.save(story));
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
