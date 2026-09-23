-- =================================================================
-- Sanskriti Darshan - Database Schema (PostgreSQL)
-- =================================================================

CREATE TABLE IF NOT EXISTS states (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(10) NOT NULL,
    type VARCHAR(20) NOT NULL,
    capital VARCHAR(100),
    description TEXT,
    center_lat DOUBLE PRECISION,
    center_lng DOUBLE PRECISION,
    default_zoom INT
);

CREATE TABLE IF NOT EXISTS districts (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    state_id BIGINT NOT NULL REFERENCES states(id) ON DELETE CASCADE,
    why_famous TEXT,
    historical_significance TEXT,
    description TEXT,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    hero_image_url TEXT
);

CREATE TABLE IF NOT EXISTS places (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    district_id BIGINT NOT NULL REFERENCES districts(id) ON DELETE CASCADE,
    category VARCHAR(50),
    description TEXT,
    image_url TEXT,
    historical_period VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS culture_items (
    id BIGSERIAL PRIMARY KEY,
    district_id BIGINT NOT NULL REFERENCES districts(id) ON DELETE CASCADE,
    type VARCHAR(30) NOT NULL, -- 'DANCE', 'FOOD', 'SONG_MUSIC', 'CRAFT', 'FESTIVAL'
    name VARCHAR(150) NOT NULL,
    description TEXT,
    origin VARCHAR(150),
    image_url TEXT,
    audio_or_video_url TEXT,
    cultural_significance TEXT
);

CREATE TABLE IF NOT EXISTS culture_stories (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_name VARCHAR(100) NOT NULL,
    state_name VARCHAR(100) NOT NULL,
    district_name VARCHAR(100),
    category VARCHAR(50) NOT NULL,
    story_text TEXT NOT NULL,
    media_type VARCHAR(20), -- 'IMAGE', 'VIDEO'
    media_url TEXT,
    upvotes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_districts_state ON districts(state_id);
CREATE INDEX IF NOT EXISTS idx_places_district ON places(district_id);
CREATE INDEX IF NOT EXISTS idx_culture_district ON culture_items(district_id);
CREATE INDEX IF NOT EXISTS idx_stories_state ON culture_stories(state_name);
