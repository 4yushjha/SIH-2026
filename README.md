# Sanskriti Darshan (संस्कृति दर्शन)
### India's Culture & Heritage "God's Eye" Explorer &bull; Smart India Hackathon (SIH 2026)

> **A holistic platform uniting cutting-edge "God's Eye" satellite mapping with rich cultural storytelling, historic legacy exploration, and a citizen community portal for underrated heritage.**

---

## 🌟 Vision & Key Features

### 1. 🛰️ "God's Eye" Interactive Map Experience
- **Cinematic Satellite Perspective**: High-resolution satellite tiles (Esri World Imagery + CartoDB hybrid labels) providing an aerial bird's-eye view of the Indian subcontinent.
- **Full Coverage of India**: Includes all **28 States** and **8 Union Territories**.
- **State-to-District Drill-Down**:
  - Selecting any State or UT triggers a smooth camera fly-to animation.
  - The map immediately illuminates with pulsing golden heritage pins for key cities and cultural districts.
  - Interactive HUD panel displays state capitals, cultural summaries, and quick-access district pills.
- **Layer & Perspective Controls**:
  - 🛰️ **God's Eye Satellite View**: Real-world aerial view of landscapes, rivers, and terrain.
  - ⛰️ **Topographic Relief**: Elevation and mountain ranges of the Himalayas, Western Ghats, and Deccan plateau.
  - 🗺️ **Cultural Atlas**: Street and landmark cartography.
  - 🧊 **3D Tilt Mode**: Dynamically tilts the map container into a 3D perspective flyover angle.

### 2. 🏛️ Cultural Heritage Engine (Per City & District)
Clicking any city or district pin slides open a dedicated **Cultural Heritage Explorer Drawer** detailing:
- **Why is this City Famous?**: Detailed narrative explaining its historical origins, royal patronage, and global reputation.
- **Famous Places & Monuments**: High-resolution cards of forts, palaces, ancient temples, stepwells, and UNESCO World Heritage sites with construction eras.
- **Famous Dances**: Classical dances (Kathakali, Kathak, Bharatanatyam, Odissi, Sattriya) and vibrant folk dances (Ghoomar, Bhangra, Bihu, Garba, Lavani, Chhau, Theyyam).
- **Famous Cuisines & Food**: Iconic traditional dishes, GI-tagged sweets, ancient cooking methods, and festival recipes.
- **Famous Music & Songs**: Classical gharana traditions, folk ballads, sacred chants, and traditional acoustic instruments (Shehnai, Kamayacha, Ektara, Chenda).
- **Underrated Cultural Gems**: Untold legends, lesser-known artisanal crafts (e.g. Rogan art, living root bridges), and secluded archaeological wonders.

### 3. 📜 "Virasat Stories" — Citizen Contribution Portal
- **Showcasing Underrated Culture**: A community forum where users across India can share photographs, videos, and stories about their local, overlooked traditions.
- **Rich Media**: Supports local photo uploads and embedded video players (YouTube, Vimeo, direct MP4).
- **Categorization**: Filter stories by **Hidden Gems**, **Folklore & Story**, **Traditional Food**, **Folk Art & Dance**, and **Ancient Rituals**.
- **Social Engagement**: Real-time appreciation / heart upvote counter celebrating cultural contributors.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5 Semantic Markup, Modern CSS3 (Glassmorphism, animations, responsive grid), Vanilla JavaScript (ES6+ modular architecture) |
| **Map Engine** | Leaflet.js with Esri World Imagery (Satellite "God's Eye" tiles), CartoDB Voyager Labels, and custom animated SVG pulse markers |
| **Backend** | Java 17+ / Spring Boot 3.3.3 (REST API, Spring Data JPA, Spring Web, Multipart File Uploads) |
| **Database** | PostgreSQL (`sanskriti_db`) with fallback in-memory dev profile (H2 in PostgreSQL compatibility mode) |
| **Build Tool** | Apache Maven 3.9.6 (bundled portably) |

---

## 🚀 Getting Started

### Option A: 1-Click Launch (Recommended for Windows)
Simply double-click:
```cmd
run.bat
```
This script will:
1. Compile the backend using the included portable Maven.
2. Start the Spring Boot REST API on port `8080`.
3. Automatically launch your browser at `http://localhost:8080/index.html`.

---

### Option B: Manual Command Line Launch

#### 1. Start the Spring Boot Backend (Dev / Offline Profile)
```cmd
cd backend
apache-maven-3.9.6\bin\mvn.cmd spring-boot:run
```
The backend will launch at `http://localhost:8080` with auto-initialized sample data for all 28 states, 8 UTs, monuments, cuisines, dances, and sample stories.

#### 2. Run with PostgreSQL
To connect to your local PostgreSQL server:
1. Ensure PostgreSQL is running on port `5432` and create a database:
   ```sql
   CREATE DATABASE sanskriti_db;
   ```
2. Update your credentials in `backend/src/main/resources/application-postgres.yml` if different from default (`postgres` / `postgrespassword`).
3. Run with the `postgres` profile:
   ```cmd
   cd backend
   apache-maven-3.9.6\bin\mvn.cmd spring-boot:run -Dspring-boot.run.profiles=postgres
   ```
*(Note: You can also execute the DDL script `backend/src/main/resources/schema.sql` directly in PostgreSQL if desired).*

#### 3. Accessing the Web Application
- **Main Portal**: [http://localhost:8080/index.html](http://localhost:8080/index.html)
- **Standalone Frontend**: You can also open `frontend/index.html` directly in any web browser; it features automatic fallback data so all map and cultural explorer features work even without the backend.

---

## 📡 REST API Documentation

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/states` | Retrieve all 28 Indian States & 8 UTs |
| `GET` | `/api/states/{id}` | Get state details with its cultural districts |
| `GET` | `/api/states/code/{code}` | Fetch state by postal code (e.g. `RJ`, `KL`, `UP`) |
| `GET` | `/api/districts/{id}` | Get full district details (Why famous, monuments, dances, food, songs) |
| `GET` | `/api/districts/search?q={query}` | Search districts/cities by query string |
| `GET` | `/api/stories` | Retrieve community stories (filter by `state`, `category`, `sort`) |
| `POST` | `/api/stories` | Submit a new cultural story (title, author, state, story, media) |
| `POST` | `/api/stories/{id}/upvote` | Upvote/Applaud a cultural story |
| `POST` | `/api/upload` | Upload photos and video clips for cultural stories |

---

## 📁 Project Directory Structure

```
SIH 2026/
├── backend/
│   ├── src/main/java/com/sih/sanskriti/
│   │   ├── SanskritiApplication.java       # Main Spring Boot Entry Point
│   │   ├── model/                          # JPA Entities (State, District, Place, CultureItem, CultureStory)
│   │   ├── repository/                     # Spring Data JPA Repositories
│   │   ├── controller/                     # REST API Controllers (State, District, Story, Upload)
│   │   └── config/                         # WebMvcConfig (CORS, uploads) & DataInitializer (Seed Data)
│   ├── src/main/resources/
│   │   ├── application.yml                 # Default Configuration
│   │   ├── application-postgres.yml        # PostgreSQL Profile Configuration
│   │   ├── application-dev.yml             # Dev / H2 Profile Configuration
│   │   ├── schema.sql                      # Pure PostgreSQL DDL Script
│   │   └── static/                         # Packaged Frontend Static Resources
│   ├── apache-maven-3.9.6/                 # Bundled Portable Apache Maven
│   └── pom.xml                             # Maven Dependencies Configuration
│
├── frontend/
│   ├── index.html                          # Main Web Application Page
│   ├── css/
│   │   └── style.css                       # Bespoke Cultural Styles & Map Animations
│   └── js/
│       ├── culturalData.js                 # Complete Pan-India Cultural Dataset
│       ├── map.js                          # "God's Eye" Satellite Map Engine (Leaflet)
│       └── app.js                          # UI Controller, REST Integration & Story Handlers
│
├── run.bat                                 # 1-Click Windows Launcher
├── run.sh                                  # 1-Click Unix/Mac Launcher
└── README.md                               # Project Documentation
```

---

## 🇮🇳 Smart India Hackathon (SIH 2026)
*Empowering citizens and travelers to celebrate, preserve, and immerse in the timeless heritage of Bharat.*
