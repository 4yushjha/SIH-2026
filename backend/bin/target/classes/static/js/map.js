/**
 * Sanskriti Darshan - "God's Eye" Satellite & Aerial Map Engine
 * Powered by Leaflet with high-resolution Esri World Imagery and CartoDB labels.
 */

let map;
let stateMarkersLayer;
let districtMarkersLayer;
let currentTileLayer;
let isTilted = false;

// Tile Layer configurations
const TILE_LAYERS = {
    godEye: {
        base: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
            maxZoom: 18
        }),
        labels: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; CartoDB',
            maxZoom: 18,
            subdomains: 'abcd'
        })
    },
    topo: {
        base: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap',
            maxZoom: 17
        })
    },
    culturalAtlas: {
        base: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            maxZoom: 19,
            subdomains: 'abcd'
        })
    }
};

/**
 * Initialize the "God's Eye" Leaflet map
 */
function initGodEyeMap() {
    // Center of India
    const INDIA_CENTER = [22.9734, 78.6569];
    const DEFAULT_ZOOM = 5;

    map = L.map('map', {
        center: INDIA_CENTER,
        zoom: DEFAULT_ZOOM,
        minZoom: 4,
        maxZoom: 18,
        zoomControl: false,
        attributionControl: true
    });

    // Custom Zoom control in bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Add default "God's Eye" Satellite Imagery & Labels
    setMapLayer('godEye');

    // Create marker layers
    stateMarkersLayer = L.layerGroup().addTo(map);
    districtMarkersLayer = L.layerGroup().addTo(map);

    // Initial render of all states on the map
    renderAllStateMarkers();
}

/**
 * Switch map layer between God's Eye satellite, Topo, and Cultural Atlas
 */
function setMapLayer(layerKey) {
    // Remove existing layers
    if (currentTileLayer) {
        if (currentTileLayer.base) map.removeLayer(currentTileLayer.base);
        if (currentTileLayer.labels) map.removeLayer(currentTileLayer.labels);
    }

    currentTileLayer = TILE_LAYERS[layerKey];
    if (currentTileLayer.base) currentTileLayer.base.addTo(map);
    if (currentTileLayer.labels) currentTileLayer.labels.addTo(map);
}

/**
 * Custom Pulsing Icon creator
 */
function createPulseIcon(isDistrict = false, title = "") {
    const className = isDistrict ? "pulse-pin-district" : "pulse-pin-state";
    const iconHtml = `
        <div class="custom-pulse-marker ${className}">
            <div class="ring"></div>
            <div class="dot"></div>
            ${title ? `<span class="marker-caption">${title}</span>` : ""}
        </div>
    `;
    return L.divIcon({
        className: 'pulse-icon-container',
        html: iconHtml,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -18]
    });
}

/**
 * Render pan-India state markers
 */
function renderAllStateMarkers() {
    stateMarkersLayer.clearLayers();

    const states = window.currentStates || CULTURAL_DATA.states;

    states.forEach(st => {
        if (!st.lat || !st.lng) return;

        const icon = createPulseIcon(false, st.name);
        const marker = L.marker([st.lat, st.lng], { icon: icon });

        // Tooltip popup
        const popupContent = `
            <div class="map-popup-card">
                <div class="popup-badge">${st.type === 'UT' ? 'Union Territory' : 'State'}</div>
                <h4 class="popup-title">${st.name}</h4>
                <p class="popup-capital"><strong>Capital:</strong> ${st.capital}</p>
                <p class="popup-desc">${st.description}</p>
                <button class="popup-btn" onclick="selectStateById(${st.id})">
                    Explore State &rarr;
                </button>
            </div>
        `;

        marker.bindPopup(popupContent, { maxWidth: 280, className: 'heritage-popup' });

        marker.on('click', () => {
            selectStateById(st.id);
        });

        stateMarkersLayer.addLayer(marker);
    });
}

/**
 * Render district pins for selected state
 */
function renderDistrictMarkers(districts, stateName) {
    districtMarkersLayer.clearLayers();

    if (!districts || districts.length === 0) return;

    districts.forEach(dst => {
        if (!dst.lat || !dst.lng) return;

        const icon = createPulseIcon(true, dst.name);
        const marker = L.marker([dst.lat, dst.lng], { icon: icon });

        const popupContent = `
            <div class="map-popup-card district-card">
                <div class="popup-badge district-badge">Cultural Hub</div>
                <h4 class="popup-title">${dst.name}</h4>
                <p class="popup-state">${stateName}</p>
                <p class="popup-desc">${dst.whyFamous || dst.description || ''}</p>
                <button class="popup-btn district-btn" onclick="openDistrictDrawer(${dst.id})">
                    Open Cultural Heritage &rarr;
                </button>
            </div>
        `;

        marker.bindPopup(popupContent, { maxWidth: 300, className: 'heritage-popup' });

        marker.on('click', () => {
            openDistrictDrawer(dst.id);
        });

        districtMarkersLayer.addLayer(marker);
    });
}

/**
 * Cinematic fly-to camera animation to a State
 */
function flyToState(st) {
    if (!st || !st.lat || !st.lng) return;
    const targetZoom = st.zoom || 7;
    map.flyTo([st.lat, st.lng], targetZoom, {
        duration: 1.8,
        easeLinearity: 0.25
    });
}

/**
 * Cinematic fly-to camera animation to a District/City
 */
function flyToDistrict(lat, lng) {
    if (!lat || !lng) return;
    map.flyTo([lat, lng], 11, {
        duration: 1.5,
        easeLinearity: 0.3
    });
}

/**
 * Reset map view back to Pan-India overview
 */
function resetIndiaView() {
    map.flyTo([22.9734, 78.6569], 5, {
        duration: 1.5
    });
    districtMarkersLayer.clearLayers();
    renderAllStateMarkers();
}

/**
 * Toggle 3D Bird's-Eye / God's Eye Tilt View
 */
function toggle3DPerspective() {
    const mapEl = document.getElementById('map');
    const tiltBtn = document.getElementById('btn-toggle-tilt');

    isTilted = !isTilted;
    if (isTilted) {
        mapEl.classList.add('map-3d-tilt');
        if (tiltBtn) tiltBtn.classList.add('active');
    } else {
        mapEl.classList.remove('map-3d-tilt');
        if (tiltBtn) tiltBtn.classList.remove('active');
    }

    // Invalidate map size so Leaflet updates smoothly
    setTimeout(() => {
        map.invalidateSize();
    }, 300);
}
