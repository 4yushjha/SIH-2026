/**
 * Sanskriti Darshan - Main Frontend Application Logic
 * Integrates with Spring Boot REST API and manages state, modals, and community feeds.
 */

// Backend API Base URL (defaults to localhost:8080 or relative path if served from backend)
const API_BASE = window.location.origin.includes('localhost:8080') || window.location.origin.includes('127.0.0.1:8080')
    ? ''
    : 'http://localhost:8080';

// In-memory application state
let appState = {
    states: [],
    selectedState: null,
    selectedDistrict: null,
    stories: [],
    activeCategoryFilter: 'ALL',
    activeStateFilter: 'ALL',
    activeSort: 'newest'
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

/**
 * Initialize Application
 */
async function initApp() {
    setupEventListeners();
    await loadStates();
    initGodEyeMap();
    await loadStories();
    populateStateDropdowns();
}

/**
 * Load States from Spring Boot API with seamless fallback to CULTURAL_DATA
 */
async function loadStates() {
    try {
        const response = await fetch(`${API_BASE}/api/states`);
        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                // Map backend format if necessary
                appState.states = data.map(s => ({
                    id: s.id,
                    name: s.name,
                    code: s.code,
                    type: s.type,
                    capital: s.capital,
                    description: s.description,
                    lat: s.centerLat || s.lat,
                    lng: s.centerLng || s.lng,
                    zoom: s.defaultZoom || s.zoom || 7,
                    districts: s.districts || []
                }));
                console.log("Loaded states from Spring Boot backend:", appState.states.length);
            } else {
                appState.states = CULTURAL_DATA.states;
            }
        } else {
            appState.states = CULTURAL_DATA.states;
        }
    } catch (err) {
        console.warn("Backend not reachable, utilizing bundled Pan-India cultural dataset:", err.message);
        appState.states = CULTURAL_DATA.states;
    }

    window.currentStates = appState.states;
}

/**
 * Load Community Cultural Stories
 */
async function loadStories() {
    try {
        const response = await fetch(`${API_BASE}/api/stories?sort=${appState.activeSort}`);
        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                appState.stories = data;
            } else {
                appState.stories = CULTURAL_DATA.initialStories;
            }
        } else {
            appState.stories = CULTURAL_DATA.initialStories;
        }
    } catch (err) {
        appState.stories = CULTURAL_DATA.initialStories;
    }

    renderStoriesFeed();
}

/**
 * Populate State dropdowns across the UI
 */
function populateStateDropdowns() {
    const mainSelect = document.getElementById('state-selector');
    const postStateSelect = document.getElementById('post-state-select');
    const storyFilterSelect = document.getElementById('story-state-filter');

    const sortedStates = [...appState.states].sort((a, b) => a.name.localeCompare(b.name));

    // Reset options
    if (mainSelect) {
        mainSelect.innerHTML = '<option value="">-- Choose a State or UT to Explore --</option>';
        sortedStates.forEach(st => {
            const opt = document.createElement('option');
            opt.value = st.id;
            opt.textContent = `${st.name} (${st.type === 'UT' ? 'UT' : 'State'})`;
            mainSelect.appendChild(opt);
        });
    }

    if (postStateSelect) {
        postStateSelect.innerHTML = '<option value="">-- Select State / UT --</option>';
        sortedStates.forEach(st => {
            const opt = document.createElement('option');
            opt.value = st.name;
            opt.textContent = st.name;
            postStateSelect.appendChild(opt);
        });
    }

    if (storyFilterSelect) {
        storyFilterSelect.innerHTML = '<option value="ALL">All States & UTs</option>';
        sortedStates.forEach(st => {
            const opt = document.createElement('option');
            opt.value = st.name;
            opt.textContent = st.name;
            storyFilterSelect.appendChild(opt);
        });
    }
}

/**
 * Setup UI Event Listeners
 */
function setupEventListeners() {
    // State Selector change
    const stateSelector = document.getElementById('state-selector');
    if (stateSelector) {
        stateSelector.addEventListener('change', (e) => {
            const stateId = parseInt(e.target.value);
            if (stateId) {
                selectStateById(stateId);
            } else {
                resetStateSelection();
            }
        });
    }

    // Reset View Button
    const resetBtn = document.getElementById('btn-reset-view');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resetStateSelection();
        });
    }

    // 3D Tilt Toggle Button
    const tiltBtn = document.getElementById('btn-toggle-tilt');
    if (tiltBtn) {
        tiltBtn.addEventListener('click', () => {
            toggle3DPerspective();
        });
    }

    // Map Layer Toggles
    const layerButtons = document.querySelectorAll('.map-layer-btn');
    layerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            layerButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const layerKey = btn.getAttribute('data-layer');
            setMapLayer(layerKey);
        });
    });

    // Close Drawer Button
    const closeDrawerBtn = document.getElementById('btn-close-drawer');
    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener('click', closeDistrictDrawer);
    }

    // Drawer Backdrop click
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    if (drawerBackdrop) {
        drawerBackdrop.addEventListener('click', closeDistrictDrawer);
    }

    // Cultural Drawer Tabs
    const tabButtons = document.querySelectorAll('.cultural-tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const targetTab = btn.getAttribute('data-tab');
            switchCulturalTab(targetTab);
        });
    });

    // Post Culture Modal Open / Close
    const openPostModalBtn = document.getElementById('btn-open-post-modal');
    const closePostModalBtn = document.getElementById('btn-close-post-modal');
    const postModalBackdrop = document.getElementById('post-modal-backdrop');

    if (openPostModalBtn) {
        openPostModalBtn.addEventListener('click', () => openPostModal());
    }
    if (closePostModalBtn) {
        closePostModalBtn.addEventListener('click', () => closePostModal());
    }
    if (postModalBackdrop) {
        postModalBackdrop.addEventListener('click', () => closePostModal());
    }

    // Media Type Switcher in Post Modal
    const mediaTypeRadios = document.querySelectorAll('input[name="mediaType"]');
    mediaTypeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            toggleMediaInputType(e.target.value);
        });
    });

    // File input preview
    const fileInput = document.getElementById('post-file-input');
    if (fileInput) {
        fileInput.addEventListener('change', handleFilePreview);
    }

    // Story Form Submit
    const storyForm = document.getElementById('story-form');
    if (storyForm) {
        storyForm.addEventListener('submit', handleStorySubmit);
    }

    // Stories Filter by Category
    const categoryChips = document.querySelectorAll('.category-chip');
    categoryChips.forEach(chip => {
        chip.addEventListener('click', () => {
            categoryChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            appState.activeCategoryFilter = chip.getAttribute('data-category');
            renderStoriesFeed();
        });
    });

    // Stories Filter by State
    const storyStateFilter = document.getElementById('story-state-filter');
    if (storyStateFilter) {
        storyStateFilter.addEventListener('change', (e) => {
            appState.activeStateFilter = e.target.value;
            renderStoriesFeed();
        });
    }

    // Story Sort
    const storySortSelect = document.getElementById('story-sort-select');
    if (storySortSelect) {
        storySortSelect.addEventListener('change', (e) => {
            appState.activeSort = e.target.value;
            loadStories();
        });
    }

    // Search Input in Header
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleGlobalSearch);
    }
}

/**
 * Handle Selection of a State
 */
function selectStateById(stateId) {
    const st = appState.states.find(s => s.id === stateId);
    if (!st) return;

    appState.selectedState = st;

    // Update state dropdown
    const stateSelector = document.getElementById('state-selector');
    if (stateSelector && stateSelector.value != stateId) {
        stateSelector.value = stateId;
    }

    // Fly to state on the God's Eye map
    flyToState(st);

    // Update HUD Info panel
    updateMapHUD(st);

    // Render district pills in HUD & pins on map
    renderDistrictControls(st);
}

/**
 * Reset State Selection & return to India overview
 */
function resetStateSelection() {
    appState.selectedState = null;
    appState.selectedDistrict = null;

    const stateSelector = document.getElementById('state-selector');
    if (stateSelector) stateSelector.value = "";

    resetIndiaView();
    hideMapHUD();
    closeDistrictDrawer();
}

/**
 * Update Map HUD (Head-Up Display) with selected state info
 */
function updateMapHUD(st) {
    const hud = document.getElementById('map-hud');
    const hudTitle = document.getElementById('hud-state-title');
    const hudCapital = document.getElementById('hud-state-capital');
    const hudType = document.getElementById('hud-state-type');
    const hudDesc = document.getElementById('hud-state-desc');

    if (!hud) return;

    hud.classList.remove('hidden');
    if (hudTitle) hudTitle.textContent = st.name;
    if (hudCapital) hudCapital.textContent = `Capital: ${st.capital}`;
    if (hudType) hudType.textContent = st.type === 'UT' ? 'Union Territory' : 'State of India';
    if (hudDesc) hudDesc.textContent = st.description;
}

function hideMapHUD() {
    const hud = document.getElementById('map-hud');
    if (hud) hud.classList.add('hidden');
}

/**
 * Render District interactive controls
 */
function renderDistrictControls(st) {
    const districtContainer = document.getElementById('hud-districts-list');
    if (!districtContainer) return;

    districtContainer.innerHTML = '';

    const districts = st.districts || [];

    if (districts.length === 0) {
        districtContainer.innerHTML = `
            <div class="no-districts-note">
                <i class="fas fa-landmark"></i> Explore rich cultural heritage sites across ${st.name}.
                <button class="btn-micro" onclick="openStoryForState('${st.name}')">Share Culture</button>
            </div>
        `;
        return;
    }

    // Render district pins on Leaflet map
    renderDistrictMarkers(districts, st.name);

    // Render district pills in HUD
    districts.forEach(dst => {
        const pill = document.createElement('button');
        pill.className = 'district-pill';
        pill.innerHTML = `<i class="fas fa-map-pin"></i> ${dst.name}`;
        pill.title = dst.whyFamous || dst.description || "";
        pill.addEventListener('click', () => {
            flyToDistrict(dst.lat, dst.lng);
            openDistrictDrawer(dst.id);
        });
        districtContainer.appendChild(pill);
    });
}

/**
 * Open Cultural Heritage Drawer for a District
 */
function openDistrictDrawer(districtId) {
    let district = null;
    let parentState = null;

    // Locate district across states
    for (const st of appState.states) {
        if (st.districts) {
            const found = st.districts.find(d => d.id === districtId);
            if (found) {
                district = found;
                parentState = st;
                break;
            }
        }
    }

    if (!district) return;

    appState.selectedDistrict = district;

    // Update Drawer Header
    const titleEl = document.getElementById('drawer-district-title');
    const stateEl = document.getElementById('drawer-state-name');
    const heroImageEl = document.getElementById('drawer-hero-image');

    if (titleEl) titleEl.textContent = district.name;
    if (stateEl) stateEl.textContent = parentState ? parentState.name : 'India';
    if (heroImageEl) {
        heroImageEl.src = district.heroImage || "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80";
        heroImageEl.alt = district.name;
    }

    // Populate Tab Contents
    populateDrawerContent(district, parentState);

    // Switch to first tab (Why Famous)
    switchCulturalTab('why-famous');
    const firstTabBtn = document.querySelector('.cultural-tab-btn[data-tab="why-famous"]');
    if (firstTabBtn) {
        document.querySelectorAll('.cultural-tab-btn').forEach(b => b.classList.remove('active'));
        firstTabBtn.classList.add('active');
    }

    // Open Drawer & Backdrop
    const drawer = document.getElementById('district-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
}

/**
 * Close Cultural Heritage Drawer
 */
function closeDistrictDrawer() {
    const drawer = document.getElementById('district-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
}

/**
 * Populate Cultural Heritage Drawer Tabs
 */
function populateDrawerContent(dst, parentState) {
    // 1. Tab: Why Famous & History
    const whyFamousText = document.getElementById('tab-why-famous-text');
    const historicalText = document.getElementById('tab-historical-text');
    const descText = document.getElementById('tab-district-desc');

    if (whyFamousText) whyFamousText.textContent = dst.whyFamous || "Renowned center of cultural heritage, traditional arts, and monumental historical significance.";
    if (historicalText) historicalText.textContent = dst.historicalSignificance || "Preserved through centuries of vibrant cultural patronage and indigenous traditions.";
    if (descText) descText.textContent = dst.description || "";

    // 2. Tab: Famous Places & Monuments
    const placesGrid = document.getElementById('tab-places-grid');
    if (placesGrid) {
        placesGrid.innerHTML = '';
        const places = dst.places || [];
        if (places.length === 0) {
            placesGrid.innerHTML = '<p class="empty-tab-notice">Exploring historical landmarks and monuments of this cultural hub.</p>';
        } else {
            places.forEach(p => {
                const card = document.createElement('div');
                card.className = 'place-card';
                card.innerHTML = `
                    <div class="place-card-img" style="background-image: url('${p.image || p.imageUrl || ''}')">
                        <span class="place-badge">${p.category || 'HERITAGE'}</span>
                    </div>
                    <div class="place-card-body">
                        <h4 class="place-title">${p.name}</h4>
                        ${p.period ? `<div class="place-period"><i class="fas fa-clock"></i> ${p.period}</div>` : ''}
                        <p class="place-desc">${p.description}</p>
                    </div>
                `;
                placesGrid.appendChild(card);
            });
        }
    }

    // 3. Tab: Famous Dances
    const dancesGrid = document.getElementById('tab-dances-grid');
    if (dancesGrid) {
        dancesGrid.innerHTML = '';
        const dances = dst.dances || [];
        if (dances.length === 0) {
            dancesGrid.innerHTML = '<p class="empty-tab-notice">Traditional folk dances celebrating festivals and community seasons.</p>';
        } else {
            dances.forEach(d => {
                const card = document.createElement('div');
                card.className = 'culture-card dance-card';
                card.innerHTML = `
                    <div class="culture-icon"><i class="fas fa-theater-masks"></i></div>
                    <div class="culture-content">
                        <h4>${d.name}</h4>
                        ${d.origin ? `<div class="culture-meta"><strong>Origin:</strong> ${d.origin}</div>` : ''}
                        <p>${d.description}</p>
                        ${d.significance ? `<div class="culture-highlight"><em>"${d.significance}"</em></div>` : ''}
                    </div>
                `;
                dancesGrid.appendChild(card);
            });
        }
    }

    // 4. Tab: Famous Food & Cuisines
    const foodGrid = document.getElementById('tab-food-grid');
    if (foodGrid) {
        foodGrid.innerHTML = '';
        const foods = dst.food || [];
        if (foods.length === 0) {
            foodGrid.innerHTML = '<p class="empty-tab-notice">Authentic local cuisines, festive sweets, and secret spices.</p>';
        } else {
            foods.forEach(f => {
                const card = document.createElement('div');
                card.className = 'culture-card food-card';
                card.innerHTML = `
                    <div class="culture-icon"><i class="fas fa-utensils"></i></div>
                    <div class="culture-content">
                        <h4>${f.name}</h4>
                        ${f.origin ? `<div class="culture-meta"><strong>Tradition:</strong> ${f.origin}</div>` : ''}
                        <p>${f.description}</p>
                        ${f.significance ? `<div class="culture-highlight"><em>"${f.significance}"</em></div>` : ''}
                    </div>
                `;
                foodGrid.appendChild(card);
            });
        }
    }

    // 5. Tab: Famous Music & Songs
    const songsGrid = document.getElementById('tab-songs-grid');
    if (songsGrid) {
        songsGrid.innerHTML = '';
        const songs = dst.songs || [];
        if (songs.length === 0) {
            songsGrid.innerHTML = '<p class="empty-tab-notice">Soulful folk melodies, classical ragas, and traditional acoustic instruments.</p>';
        } else {
            songs.forEach(s => {
                const card = document.createElement('div');
                card.className = 'culture-card song-card';
                card.innerHTML = `
                    <div class="culture-icon"><i class="fas fa-music"></i></div>
                    <div class="culture-content">
                        <h4>${s.name}</h4>
                        ${s.origin ? `<div class="culture-meta"><strong>Tradition:</strong> ${s.origin}</div>` : ''}
                        <p>${s.description}</p>
                        ${s.significance ? `<div class="culture-highlight"><em>"${s.significance}"</em></div>` : ''}
                    </div>
                `;
                songsGrid.appendChild(card);
            });
        }
    }

    // 6. Tab: Underrated Cultural Gems
    const underratedEl = document.getElementById('tab-underrated-text');
    if (underratedEl) {
        underratedEl.textContent = dst.underratedGems || "Discover hidden folk rituals, ancient stepwells, secret artisan crafts, and untold oral folklore of this historic city.";
    }

    // Setup "Share story for this district" button
    const shareStoryBtn = document.getElementById('btn-share-for-district');
    if (shareStoryBtn) {
        shareStoryBtn.onclick = () => {
            closeDistrictDrawer();
            openPostModal(parentState ? parentState.name : '', dst.name);
        };
    }
}

/**
 * Switch Active Cultural Tab
 */
function switchCulturalTab(tabKey) {
    const tabPanes = document.querySelectorAll('.cultural-tab-pane');
    tabPanes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.id === `tab-content-${tabKey}`) {
            pane.classList.add('active');
        }
    });
}

/**
 * Render Community Stories Feed
 */
function renderStoriesFeed() {
    const feedContainer = document.getElementById('stories-grid');
    if (!feedContainer) return;

    feedContainer.innerHTML = '';

    // Apply category & state filters
    let filtered = [...appState.stories];

    if (appState.activeCategoryFilter !== 'ALL') {
        filtered = filtered.filter(s => s.category.toLowerCase().includes(appState.activeCategoryFilter.toLowerCase()));
    }

    if (appState.activeStateFilter !== 'ALL') {
        filtered = filtered.filter(s => s.stateName.toLowerCase() === appState.activeStateFilter.toLowerCase());
    }

    if (filtered.length === 0) {
        feedContainer.innerHTML = `
            <div class="empty-feed-card">
                <i class="fas fa-feather-alt fa-3x"></i>
                <h3>Be the first to share an underrated story!</h3>
                <p>No stories found for the selected filter. Share your local culture, recipes, or rare traditions with India!</p>
                <button class="btn-royal" onclick="openPostModal()">
                    <i class="fas fa-plus-circle"></i> Share Your Culture
                </button>
            </div>
        `;
        return;
    }

    filtered.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';

        // Media Element (Image or Video)
        let mediaHtml = '';
        if (story.mediaType === 'VIDEO') {
            const embedUrl = convertToEmbedUrl(story.mediaUrl);
            if (embedUrl) {
                mediaHtml = `
                    <div class="story-media video-container">
                        <iframe src="${embedUrl}" title="${story.title}" frameborder="0" allowfullscreen></iframe>
                    </div>
                `;
            } else {
                mediaHtml = `
                    <div class="story-media video-container">
                        <video src="${story.mediaUrl}" controls preload="metadata"></video>
                    </div>
                `;
            }
        } else if (story.mediaUrl) {
            mediaHtml = `
                <div class="story-media image-container" style="background-image: url('${story.mediaUrl}')">
                    <span class="story-category-tag">${story.category}</span>
                </div>
            `;
        }

        card.innerHTML = `
            ${mediaHtml}
            <div class="story-body">
                <div class="story-header">
                    <span class="story-state"><i class="fas fa-map-marker-alt"></i> ${story.districtName ? `${story.districtName}, ` : ''}${story.stateName}</span>
                    <span class="story-time">${story.createdAt || 'Recently'}</span>
                </div>
                <h3 class="story-title">${story.title}</h3>
                <p class="story-text">${story.storyText}</p>
                <div class="story-footer">
                    <div class="story-author">
                        <i class="fas fa-user-circle"></i> ${story.authorName || 'Heritage Contributor'}
                    </div>
                    <button class="btn-upvote" onclick="upvoteStory(${story.id}, this)">
                        <i class="fas fa-heart"></i> <span class="vote-count">${story.upvotes || 0}</span>
                    </button>
                </div>
            </div>
        `;

        feedContainer.appendChild(card);
    });
}

/**
 * Convert normal YouTube / Vimeo URLs to proper embed URLs
 */
function convertToEmbedUrl(url) {
    if (!url) return null;
    if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('vimeo.com/')) {
        const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
        return `https://player.vimeo.com/video/${videoId}`;
    }
    return null;
}

/**
 * Handle Story Upvote
 */
async function upvoteStory(storyId, buttonEl) {
    // Optimistic UI update
    const story = appState.stories.find(s => s.id === storyId);
    if (story) {
        story.upvotes = (story.upvotes || 0) + 1;
        const countSpan = buttonEl.querySelector('.vote-count');
        if (countSpan) countSpan.textContent = story.upvotes;
        buttonEl.classList.add('upvoted');
    }

    try {
        await fetch(`${API_BASE}/api/stories/${storyId}/upvote`, {
            method: 'POST'
        });
    } catch (err) {
        console.log("Upvoted locally (offline fallback mode)");
    }
}

/**
 * Open Post Cultural Story Modal
 */
function openPostModal(prefillState = '', prefillDistrict = '') {
    const modal = document.getElementById('post-modal');
    const backdrop = document.getElementById('post-modal-backdrop');

    if (prefillState) {
        const stateSelect = document.getElementById('post-state-select');
        if (stateSelect) stateSelect.value = prefillState;
    }

    if (prefillDistrict) {
        const districtInput = document.getElementById('post-district-input');
        if (districtInput) districtInput.value = prefillDistrict;
    }

    if (modal) modal.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
}

/**
 * Close Post Cultural Story Modal
 */
function closePostModal() {
    const modal = document.getElementById('post-modal');
    const backdrop = document.getElementById('post-modal-backdrop');
    if (modal) modal.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');

    // Reset Form
    const form = document.getElementById('story-form');
    if (form) form.reset();
    const previewContainer = document.getElementById('post-preview-container');
    if (previewContainer) {
        previewContainer.innerHTML = '';
        previewContainer.classList.add('hidden');
    }
}

/**
 * Toggle Media Input type in Post Modal
 */
function toggleMediaInputType(type) {
    const photoInputGroup = document.getElementById('group-photo-upload');
    const videoInputGroup = document.getElementById('group-video-url');

    if (type === 'VIDEO') {
        if (photoInputGroup) photoInputGroup.classList.add('hidden');
        if (videoInputGroup) videoInputGroup.classList.remove('hidden');
    } else {
        if (photoInputGroup) photoInputGroup.classList.remove('hidden');
        if (videoInputGroup) videoInputGroup.classList.add('hidden');
    }
}

/**
 * Handle File upload preview
 */
function handleFilePreview(e) {
    const file = e.target.files[0];
    if (!file) return;

    const previewContainer = document.getElementById('post-preview-container');
    if (!previewContainer) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        previewContainer.innerHTML = `<img src="${evt.target.result}" alt="Preview" class="media-preview-img" />`;
        previewContainer.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
}

/**
 * Handle Story Form Submission
 */
async function handleStorySubmit(e) {
    e.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const authorName = document.getElementById('post-author').value.trim() || 'Heritage Lover';
    const stateName = document.getElementById('post-state-select').value;
    const districtName = document.getElementById('post-district-input').value.trim();
    const category = document.getElementById('post-category-select').value;
    const storyText = document.getElementById('post-story-text').value.trim();
    const mediaType = document.querySelector('input[name="mediaType"]:checked').value;
    const videoUrl = document.getElementById('post-video-url')?.value.trim();
    const fileInput = document.getElementById('post-file-input');

    if (!title || !stateName || !storyText) {
        alert("Please enter a Title, State, and Story narrative!");
        return;
    }

    let finalMediaUrl = "";

    // 1. If photo upload with file, upload to Spring Boot /api/upload
    if (mediaType === 'IMAGE' && fileInput && fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        try {
            const uploadRes = await fetch(`${API_BASE}/api/upload`, {
                method: 'POST',
                body: formData
            });
            if (uploadRes.ok) {
                const uploadData = await uploadRes.json();
                finalMediaUrl = uploadData.fileUrl;
            }
        } catch (err) {
            console.warn("Backend upload failed, creating local object URL fallback");
            finalMediaUrl = URL.createObjectURL(fileInput.files[0]);
        }
    } else if (mediaType === 'VIDEO' && videoUrl) {
        finalMediaUrl = videoUrl;
    } else {
        // Fallback heritage photo
        finalMediaUrl = "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80";
    }

    const newStory = {
        title,
        authorName,
        stateName,
        districtName,
        category,
        storyText,
        mediaType,
        mediaUrl: finalMediaUrl,
        upvotes: 1
    };

    // Try sending to Spring Boot backend
    try {
        const response = await fetch(`${API_BASE}/api/stories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStory)
        });

        if (response.ok) {
            const savedStory = await response.json();
            appState.stories.unshift(savedStory);
        } else {
            newStory.id = Date.now();
            newStory.createdAt = "Just now";
            appState.stories.unshift(newStory);
        }
    } catch (err) {
        newStory.id = Date.now();
        newStory.createdAt = "Just now";
        appState.stories.unshift(newStory);
    }

    closePostModal();
    renderStoriesFeed();

    // Smooth scroll to stories section
    const storiesSec = document.getElementById('stories-section');
    if (storiesSec) {
        storiesSec.scrollIntoView({ behavior: 'smooth' });
    }

    alert("✨ Your cultural story has been shared successfully with the nation!");
}

/**
 * Handle Global Search in Header
 */
function handleGlobalSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    if (!query) return;

    // Search for match in States
    const matchedState = appState.states.find(s => s.name.toLowerCase().includes(query));
    if (matchedState && query.length >= 3) {
        selectStateById(matchedState.id);
        return;
    }

    // Search for match in Districts
    for (const st of appState.states) {
        if (st.districts) {
            const matchedDistrict = st.districts.find(d => d.name.toLowerCase().includes(query));
            if (matchedDistrict && query.length >= 3) {
                selectStateById(st.id);
                flyToDistrict(matchedDistrict.lat, matchedDistrict.lng);
                openDistrictDrawer(matchedDistrict.id);
                break;
            }
        }
    }
}

/**
 * Shortcut to open story modal prefilled for a state
 */
function openStoryForState(stateName) {
    openPostModal(stateName, '');
}
