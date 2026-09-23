package com.sih.sanskriti.config;

import com.sih.sanskriti.model.*;
import com.sih.sanskriti.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final StateRepository stateRepository;
    private final DistrictRepository districtRepository;
    private final PlaceRepository placeRepository;
    private final CultureItemRepository cultureItemRepository;
    private final CultureStoryRepository cultureStoryRepository;

    public DataInitializer(
            StateRepository stateRepository,
            DistrictRepository districtRepository,
            PlaceRepository placeRepository,
            CultureItemRepository cultureItemRepository,
            CultureStoryRepository cultureStoryRepository) {
        this.stateRepository = stateRepository;
        this.districtRepository = districtRepository;
        this.placeRepository = placeRepository;
        this.cultureItemRepository = cultureItemRepository;
        this.cultureStoryRepository = cultureStoryRepository;
    }

    @Override
    public void run(String... args) {
        if (stateRepository.count() > 0) {
            System.out.println("Cultural heritage data already initialized.");
            return;
        }

        System.out.println("Initializing rich pan-Indian cultural heritage dataset...");

        // ==========================================
        // 1. RAJASTHAN
        // ==========================================
        State rajasthan = new State("Rajasthan", "RJ", "STATE", "Jaipur",
                "The Land of Kings, renowned for majestic hill forts, Thar desert folklore, royal palaces, and vibrant craft traditions.",
                26.9124, 75.7873, 7);
        stateRepository.save(rajasthan);

        District jaipur = new District("Jaipur",
                "Renowned globally as the 'Pink City' and UNESCO World Heritage City, famous for royal Rajput architecture, terracotta-pink stone facades, astronomical marvels, and gem handicrafts.",
                "Founded in 1727 by Maharaja Sawai Jai Singh II, designed on the principles of Vastu Shastra and Shilpa Shastra, representing India's first planned city.",
                "A vibrant cultural hub where timeless royal palaces meet bustling traditional bazaars alive with tie-dye bandhej and blue pottery.",
                26.9124, 75.7873,
                "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80");
        jaipur.setState(rajasthan);
        districtRepository.save(jaipur);

        placeRepository.save(new Place(jaipur, "Hawa Mahal (Palace of Winds)", "PALACE",
                "A five-story pink sandstone palace with 953 intricately carved jharokhas (windows) designed to allow royal ladies to observe street life.",
                "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80", "Built in 1799"));
        placeRepository.save(new Place(jaipur, "Amber Fort & Sheesh Mahal", "FORT",
                "Majestic hilltop fort blending Rajput and Mughal architecture, famous for its hall of mirrors (Sheesh Mahal) reflecting flickering candlelight.",
                "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80", "16th Century"));
        placeRepository.save(new Place(jaipur, "Jantar Mantar", "HERITAGE",
                "UNESCO World Heritage astronomical observatory featuring nineteen architectural astronomical instruments, including the world's largest stone sundial.",
                "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80", "1734 CE"));

        cultureItemRepository.save(new CultureItem(jaipur, "DANCE", "Ghoomar Dance",
                "A graceful traditional folk dance performed by women twirling in vibrant flared ghagras, celebrating royal festivals and weddings.",
                "Bhil tribe folk tradition adopted by royal Rajput courts",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "Recognized internationally as one of the world's most elegant folk dances."));
        cultureItemRepository.save(new CultureItem(jaipur, "FOOD", "Dal Baati Churma & Ghevar",
                "Signature Rajasthani platter consisting of crispy baked whole wheat dumplings (Baati), slow-cooked spiced lentils (Dal), and sweet crumbled wheat (Churma), paired with honeycomb Ghevar dessert.",
                "Arid Marwar region survival gastronomy enriched with pure ghee",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Royal culinary staple symbolizing warm hospitality and nutrition."));
        cultureItemRepository.save(new CultureItem(jaipur, "SONG_MUSIC", "Kesariya Balam & Manganiyar Folk",
                "Legendary desert folk song welcoming travelers ('Padharo Mhare Desh'), played with traditional instruments like the Kamayacha and Sarangi.",
                "Hereditary Manganiyar and Langa desert bards",
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", null,
                "Soul-stirring classical Thar desert melodies passed down orally across generations."));

        District udaipur = new District("Udaipur",
                "The 'City of Lakes' and 'Venice of the East', famous for romantic marble palaces floating in Lake Pichola and heroic Mewar heritage.",
                "Historic capital of the Mewar Kingdom founded in 1559 by Maharana Udai Singh II after the siege of Chittorgarh.",
                "Famed for serene lake reflections, Bagore-ki-Haveli cultural performances, and miniature Rajput paintings.",
                24.5854, 73.7125,
                "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80");
        udaipur.setState(rajasthan);
        districtRepository.save(udaipur);

        placeRepository.save(new Place(udaipur, "City Palace & Lake Pichola", "PALACE",
                "Spectacular granite and marble palace complex perched over Lake Pichola with ornate courtyards and mirror mosaics.",
                "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80", "16th Century"));
        cultureItemRepository.save(new CultureItem(udaipur, "DANCE", "Bhavai Dance",
                "Daring balance dance where skilled women pirouette while balancing up to 9 brass pitchers on their head over swords or brass thalis.",
                "Tribal communities of southern Rajasthan and Gujarat",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "Requires immense poise and core strength; celebrates feminine grit."));

        // ==========================================
        // 2. UTTAR PRADESH
        // ==========================================
        State uttarPradesh = new State("Uttar Pradesh", "UP", "STATE", "Lucknow",
                "Cradle of Indian spiritual civilisations, Vedic learning, Ganga-Jamuni Tehzeeb, and monumental architectural marvels.",
                26.8467, 80.9462, 7);
        stateRepository.save(uttarPradesh);

        District varanasi = new District("Varanasi (Kashi)",
                "One of the world's oldest continually inhabited cities, the spiritual heart of Hinduism, renowned for sacred Ganga Ghats, Kashi Vishwanath Temple, Banarasi silk weaving, and Indian classical music.",
                "Documented in ancient Puranas as the abode of Lord Shiva; celebrated by Mark Twain as 'older than history, older than tradition, older even than legend'.",
                "Where sacred rituals, mystical Ganga Aarti, evening sitar ragas, and philosopher traditions converge.",
                25.3176, 82.9739,
                "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80");
        varanasi.setState(uttarPradesh);
        districtRepository.save(varanasi);

        placeRepository.save(new Place(varanasi, "Dashashwamedh Ghat & Evening Ganga Aarti", "TEMPLE",
                "Spectacular riverfront ghat where priests perform choreographed fire aartis with multi-tiered brass lamps each twilight.",
                "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80", "Ancient Ghat"));
        placeRepository.save(new Place(varanasi, "Kashi Vishwanath Jyotirlinga Temple", "TEMPLE",
                "One of the 12 most revered Jyotirlinga shrines, capped with pure golden spire atop the sacred inner sanctum.",
                "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80", "Rebuilt 1780 CE by Ahilyabai Holkar"));
        placeRepository.save(new Place(varanasi, "Sarnath Deer Park & Dhamek Stupa", "HERITAGE",
                "Sacred site where Gautama Buddha delivered his first sermon (Dhammacakkappavattana Sutta) after attaining enlightenment.",
                "https://images.unsplash.com/photo-1600100397608-f010e42e5bf8?auto=format&fit=crop&w=800&q=80", "500 CE"));

        cultureItemRepository.save(new CultureItem(varanasi, "SONG_MUSIC", "Banaras Gharana & Shehnai of Bismillah Khan",
                "Celebrated Indian classical music school renowned for Tabla phrasing, Thumri, Kajri, and the divine Shehnai echoes pioneered by Bharat Ratna Ustad Bismillah Khan.",
                "Ganga river spiritual and vocal traditions",
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", null,
                "UNESCO City of Music honor."));
        cultureItemRepository.save(new CultureItem(varanasi, "FOOD", "Banarasi Paan & Malaiyyo",
                "Aromatic betel leaf preparation stuffed with gulkand, supari, and spices; paired with winter froth dessert Malaiyyo infused with saffron and dew drops.",
                "Ancient culinary craft celebrated in Indian folklore",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Symbol of cordial welcome and delicate culinary finesse."));
        cultureItemRepository.save(new CultureItem(varanasi, "DANCE", "Kathak (Banaras Gharana)",
                "Classical dance style characterized by lightning-fast tatkar (footwork), dizzying chakkars (spins), and expressive abhinaya interpreting Radha-Krishna epics.",
                "Ancient storytelling bards (Kathakars) of northern temples",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "One of the eight major Indian classical dance forms."));

        District agra = new District("Agra",
                "Home to the Taj Mahal—one of the New Seven Wonders of the World—and grand Mughal monuments, marble inlay pietra dura, and Petha delicacy.",
                "Imperial seat of the Mughal Empire during the 16th and 17th centuries under Akbar, Jahangir, and Shah Jahan.",
                "A riverside historic treasure trove on the Yamuna.",
                27.1767, 78.0081,
                "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80");
        agra.setState(uttarPradesh);
        districtRepository.save(agra);

        placeRepository.save(new Place(agra, "Taj Mahal", "MONUMENT",
                "Ivory-white marble mausoleum commission by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.",
                "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80", "1632–1653 CE"));
        cultureItemRepository.save(new CultureItem(agra, "FOOD", "Agra Petha & Bedmi Puri",
                "Translucent soft candy made from ash gourd infused with rose water, kewra, and saffron.",
                "Royal Mughal confectionery kitchens",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "GI-tagged legendary sweetmeat."));

        // ==========================================
        // 3. KERALA
        // ==========================================
        State kerala = new State("Kerala", "KL", "STATE", "Thiruvananthapuram",
                "God's Own Country, famed for serene tropical backwaters, Ayurvedic wellness heritage, spice coast history, and dramatic Kathakali dance.",
                10.8505, 76.2711, 7);
        stateRepository.save(kerala);

        District kochi = new District("Kochi (Cochin)",
                "The 'Queen of the Arabian Sea', famous for its historic maritime trade, iconic cantilevered Chinese Fishing Nets, colonial Jew Town, and Kerala murals.",
                "Major spice trading port since the 14th century, attracting Arab, Chinese, Portuguese, Dutch, and British merchants.",
                "A cosmopolitan tapestry of ancient spice warehouses, waterfront promenades, and contemporary art biennales.",
                9.9312, 76.2673,
                "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80");
        kochi.setState(kerala);
        districtRepository.save(kochi);

        placeRepository.save(new Place(kochi, "Chinese Fishing Nets (Cheenavala)", "HERITAGE",
                "Iconic shore-operated cantilevered fishing nets introduced by Chinese explorer Zheng He's fleet in the 14th century.",
                "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80", "14th Century"));
        placeRepository.save(new Place(kochi, "Mattancherry Palace (Dutch Palace)", "PALACE",
                "Palace featuring mythological Kerala temple murals depicting scenes of the Ramayana in vivid vegetable dyes.",
                "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80", "1555 CE"));

        cultureItemRepository.save(new CultureItem(kochi, "DANCE", "Kathakali & Mohiniyattam",
                "Dramatic classical dance-drama noted for elaborate facial makeup (Chutti), towering headgear, and intricate eye expressions (Navarasas).",
                "Temple and royal courts of southwestern India",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "Visually mesmerizing art form narrating ancient Indian epics."));
        cultureItemRepository.save(new CultureItem(kochi, "FOOD", "Kerala Sadya & Malabar Fish Curry",
                "Grand vegetarian feast served on fresh banana leaf comprising 24+ items including Avial, Sambar, Payasam; paired with coconut-rich fish curries.",
                "Ancient agrarian and coastal spice culinary lore",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Celebrated centerpiece of Onam festival."));
        cultureItemRepository.save(new CultureItem(kochi, "SONG_MUSIC", "Sopana Sangeetham & Chenda Melam",
                "Traditional rhythmic temple percussion ensemble (Chenda Melam) and classical devotional music sung beside the sanctum sanctorum steps (Sopanam).",
                "Sacred temple traditions of Malabar and Travancore",
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", null,
                "Electrifying percussion symphony featured in Thrissur Pooram."));

        // ==========================================
        // 4. PUNJAB
        // ==========================================
        State punjab = new State("Punjab", "PB", "STATE", "Chandigarh",
                "Land of the Five Rivers, vibrant energetic folklore, valorous history, fertile golden fields, and the Golden Temple.",
                31.1471, 75.3412, 7);
        stateRepository.save(punjab);

        District amritsar = new District("Amritsar",
                "Spiritual and cultural capital of Sikhism, famous for the revered Sri Harmandir Sahib (Golden Temple), world's largest community kitchen (Langar), Wagah Border patriotism, and Phulkari embroidery.",
                "Founded in 1577 by Guru Ram Das, the fourth Sikh Guru, around a sacred pool of immortal nectar ('Amrit Sarovar').",
                "A holy sanctuary of unconditional equality, selfless service, soulful Gurbani kirtan, and rich Punjabi hospitality.",
                31.6340, 74.8723,
                "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80");
        amritsar.setState(punjab);
        districtRepository.save(amritsar);

        placeRepository.save(new Place(amritsar, "Golden Temple (Sri Harmandir Sahib)", "TEMPLE",
                "Sacred gurdwara covered in 500 kg of pure gold foil, open to people of all faiths, featuring the tranquil Amrit Sarovar.",
                "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80", "1589–1604 CE"));
        placeRepository.save(new Place(amritsar, "Jallianwala Bagh Memorial", "HERITAGE",
                "Historic public garden memorial commemorating the martyrs of the 1919 massacre, featuring preserved bullet marks and the martyr's well.",
                "https://images.unsplash.com/photo-1600100397608-f010e42e5bf8?auto=format&fit=crop&w=800&q=80", "Historic Memorial"));

        cultureItemRepository.save(new CultureItem(amritsar, "DANCE", "Bhangra & Giddha",
                "High-octane harvest folk dances driven by the deep resonant beat of the Dhol, celebrating Baisakhi and joyous life victories.",
                "Agrarian folklore of Punjab's harvest season",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "Globally recognized symbol of Indian celebration and boundless energy."));
        cultureItemRepository.save(new CultureItem(amritsar, "FOOD", "Amritsari Kulcha, Makki Di Roti & Sarson Da Saag",
                "Crispy tandoori multi-layered flatbread stuffed with spiced potatoes and paneer, served with spicy chole, fresh butter, and winter mustard greens.",
                "Centuries-old clay tandoor culinary tradition",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Legendary culinary delight beloved across the subcontinent."));
        cultureItemRepository.save(new CultureItem(amritsar, "SONG_MUSIC", "Gurbani Kirtan & Tumbi Folk",
                "Divine, continuous spiritual singing of hymns in classical ragas echoing across the holy waters of the Golden Temple 24 hours a day.",
                "Classical Sikh musical traditions structured in 31 ragas",
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", null,
                "Deep meditative resonance instilling profound peace."));

        // ==========================================
        // 5. TAMIL NADU
        // ==========================================
        State tamilNadu = new State("Tamil Nadu", "TN", "STATE", "Chennai",
                "Dravidian heritage fortress, classical Tamil literature spanning millennia, soaring temple gopurams, and Bharatanatyam dance.",
                11.1271, 78.6569, 7);
        stateRepository.save(tamilNadu);

        District madurai = new District("Madurai",
                "The 'Athens of the East', one of India's oldest continuously inhabited heritage cities, renowned for the colossal Meenakshi Amman Temple and fragrant Madurai Malli jasmine.",
                "Seat of the ancient Tamil Sangam literary assemblies and capital of the historic Pandya Kingdom.",
                "A lotus-shaped temple city where vibrant festivals, bronze crafts, and banana-leaf feasts flourish around the clock.",
                9.9252, 78.1198,
                "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80");
        madurai.setState(tamilNadu);
        districtRepository.save(madurai);

        placeRepository.save(new Place(madurai, "Meenakshi Amman Temple", "TEMPLE",
                "Architectural wonder featuring 14 soaring gopurams covered in thousands of vibrant mythological sculptures, and the 1,000-pillar hall.",
                "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80", "Expanded in 16th-17th Century"));
        cultureItemRepository.save(new CultureItem(madurai, "DANCE", "Bharatanatyam",
                "India's premier classical dance form celebrated for sculptural postures, geometric arm lines, expressive mudras, and brisk rhythmic footwork.",
                "Ancient temple Devadasi traditions formalized in Natya Shastra",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "Considered the fire dance (Bhava, Raga, Tala, Natya)."));
        cultureItemRepository.save(new CultureItem(madurai, "FOOD", "Madurai Jigarthanda & Chettinad Spices",
                "Refreshing cooling royal beverage made of almond gum (badam pisin), nannari syrup, reduced milk, and rich ice cream.",
                "Introduced during the Nayak and Mughal reign",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Beloved summer elixir that translates literally to 'heart cooler'."));

        // ==========================================
        // 6. WEST BENGAL
        // ==========================================
        State westBengal = new State("West Bengal", "WB", "STATE", "Kolkata",
                "Cultural capital of artistic intellectual renaissance, Nobel laureates, Durga Puja UNESCO heritage, and terracotta temple architecture.",
                22.9868, 87.8550, 7);
        stateRepository.save(westBengal);

        District kolkata = new District("Kolkata",
                "The 'City of Joy', famous for grand colonial architecture, Kolkata tramways, intellectual adda coffee houses, Howrah Bridge, and Durga Puja.",
                "Capital of British India until 1911; breeding ground of the Indian Renaissance led by Rabindranath Tagore, Swami Vivekananda, and Netaji Subhash Chandra Bose.",
                "A vibrant metropolis where poetry, cinema, street art, and heritage sweets weave into everyday life.",
                22.5726, 88.3639,
                "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80");
        kolkata.setState(westBengal);
        districtRepository.save(kolkata);

        placeRepository.save(new Place(kolkata, "Victoria Memorial & Howrah Bridge", "MONUMENT",
                "Iconic white Makrana marble monument and the monumental cantilever bridge spanning the sacred Hooghly river.",
                "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80", "Early 20th Century"));
        cultureItemRepository.save(new CultureItem(kolkata, "DANCE", "Chhau Dance & Dhunuchi Naach",
                "Martial tribal dance wearing giant hand-painted papier-mâché masks, and the ecstatic devotional incense burner dance during Durga Puja.",
                "Purulia and tribal Bengal traditions",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "UNESCO Intangible Cultural Heritage."));
        cultureItemRepository.save(new CultureItem(kolkata, "FOOD", "Kolkata Biryani, Kosha Mangsho & Rosogolla",
                "Spiced long-grain biryani made unique by tender golden potatoes and boiled egg; followed by syrupy spongy cottage cheese Rosogolla.",
                "Royal culinary heritage of exiled Nawab Wajid Ali Shah",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "GI-tagged confection that conquered the sweet tooth of the nation."));
        cultureItemRepository.save(new CultureItem(kolkata, "SONG_MUSIC", "Rabindra Sangeet & Baul Songs",
                "Philosophical spiritual music of the mystical wandering minstrels (Bauls) playing the Ektara, and songs composed by Rabindranath Tagore.",
                "Bengal mystic philosophy and literature",
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", null,
                "UNESCO recognized intangible oral tradition celebrating human oneness."));

        // ==========================================
        // 7. ASSAM
        // ==========================================
        State assam = new State("Assam", "AS", "STATE", "Dispur",
                "Gateway to North-East India, world-famous for Assam orthodox black tea, one-horned rhinoceros in Kaziranga, and golden Muga silk.",
                26.2006, 92.9376, 7);
        stateRepository.save(assam);

        District guwahati = new District("Guwahati & Majuli",
                "Cultural hub along the mighty Brahmaputra river, home to the sacred Kamakhya Devi Temple, and nearby Majuli—the world's largest inhabited river island.",
                "Ancient city known in the Mahabharata as Pragjyotishpura ('City of Eastern Light').",
                "Center of neo-Vaishnavite Satra monasteries, mask-making, and riverine biodiversity.",
                26.1445, 91.7362,
                "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=800&q=80");
        guwahati.setState(assam);
        districtRepository.save(guwahati);

        placeRepository.save(new Place(guwahati, "Kamakhya Devi Temple", "TEMPLE",
                "One of the oldest and most revered 51 Shakti Peethas perched on Nilachal Hill, celebrating female creative cosmic power.",
                "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80", "Reconstructed 1565 CE"));
        cultureItemRepository.save(new CultureItem(guwahati, "DANCE", "Bihu Dance",
                "Joyous spring folk dance characterized by rapid hand movements, rhythmic hip sways, and traditional red-and-white Muga silk attire.",
                "Rongali Bihu agricultural festival celebrating Assamese New Year",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "Broke Guinness World Records with over 11,000 dancers performing together in 2023."));
        cultureItemRepository.save(new CultureItem(guwahati, "FOOD", "Khaar, Masor Tenga & Pitha",
                "Tangy sour fish curry cooked with fermented bamboo shoot or elephant apple (Ou Tenga), and steamed rice cakes.",
                "Indigenous riverine Assamese palate",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Subtle, organic flavours made with minimal spices and local herbs."));

        // ==========================================
        // 8. LADAKH (UT)
        // ==========================================
        State ladakh = new State("Ladakh", "LA", "UT", "Leh",
                "The 'Land of High Passes', stark cold desert moonscapes, ancient Tibetan Buddhist gompas, Pangong Tso lake, and Pashmina shawls.",
                34.1526, 77.5771, 7);
        stateRepository.save(ladakh);

        District leh = new District("Leh",
                "High-altitude mountain oasis at 3,500m above sea level, famous for Leh Palace, Hemis Monastery festival, and magnetic mountain valleys.",
                "Historic crossroad of the ancient Silk Route connecting India with Tibet, Central Asia, and China.",
                "A realm of prayer flags fluttering in pure Himalayan winds, butter tea, and ancient stone architecture.",
                34.1526, 77.5771,
                "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80");
        leh.setState(ladakh);
        districtRepository.save(leh);

        placeRepository.save(new Place(leh, "Thiksey & Hemis Monasteries", "TEMPLE",
                "Spectacular 12-story hilltop Tibetan Buddhist monastery resembling the Potala Palace of Lhasa, housing a 49-foot statue of Maitreya Buddha.",
                "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80", "15th Century"));
        cultureItemRepository.save(new CultureItem(leh, "DANCE", "Cham Dance (Mask Dance)",
                "Sacred mystical masked and costumed dance performed by Buddhist monks accompanied by long horns (Dungchen) and cymbals.",
                "Tantric Buddhist rituals depicting triumph of dharma over ego",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "Visual meditation that blesses all who behold it."));
        cultureItemRepository.save(new CultureItem(leh, "FOOD", "Thukpa, Momos & Butter Tea (Gur Gur Chai)",
                "Steaming noodle soup packed with winter vegetables and Himalayan herbs, paired with salty pink tea churned with yak butter.",
                "High altitude survival nutrition",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Warm comfort food sustaining communities in sub-zero Himalayan winters."));

        // ==========================================
        // 9. MAHARASHTRA
        // ==========================================
        State maharashtra = new State("Maharashtra", "MH", "STATE", "Mumbai",
                "Land of Chhatrapati Shivaji Maharaj, monumental Maratha sea forts, Ajanta-Ellora cave art, Lavani dance, and Bollywood.",
                19.7515, 75.7139, 7);
        stateRepository.save(maharashtra);

        District pune = new District("Pune",
                "The 'Oxford of the East' and cultural capital of Maharashtra, famous for the majestic Shaniwar Wada, Ganeshotsav festival, and Peshwa heritage.",
                "Center of the 18th-century Maratha Empire under the Peshwas and prime hub for Indian freedom movement education.",
                "Vibrant confluence of classical music gharanas, historical forts like Sinhagad, and modern tech innovation.",
                18.5204, 73.8567,
                "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80");
        pune.setState(maharashtra);
        districtRepository.save(pune);

        placeRepository.save(new Place(pune, "Shaniwar Wada", "FORT",
                "Historic 7-story fortification palace seat of the Peshwa rulers built in 1732, celebrated for its massive Dilli Darwaza spiked gates.",
                "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80", "1732 CE"));
        cultureItemRepository.save(new CultureItem(pune, "DANCE", "Lavani Dance",
                "Electrifying folk dance genre blending foot-tapping beats of the Dholki, nine-yard Nauvari sarees, and spirited storytelling.",
                "Peshwa court and Maratha soldier entertainment tradition",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "A powerful testament to female vocal and theatrical vitality."));
        cultureItemRepository.save(new CultureItem(pune, "FOOD", "Misal Pav, Puran Poli & Vada Pav",
                "Fiery sprouted bean curry topped with farsan, onions, and lemon served with soft pav buns; alongside sweet jaggery-lentil stuffed flatbread.",
                "Rustic Marathi home culinary tradition",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Voted among the tastiest street dishes in global culinary awards."));

        // ==========================================
        // 10. GUJARAT
        // ==========================================
        State gujarat = new State("Gujarat", "GJ", "STATE", "Gandhinagar",
                "Land of the White Rann of Kutch, Asiatic Lions in Gir, Mahatma Gandhi's Sabarmati ashram, and world's biggest dance festival Garba.",
                22.2587, 71.1924, 7);
        stateRepository.save(gujarat);

        District kutch = new District("Kutch & Ahmedabad",
                "The White Salt Desert of Kutch and India's first UNESCO World Heritage City Ahmedabad, world-famous for Rann Utsav and intricate Rogan art.",
                "Ancient Harappan civilization roots (Dholavira) and vibrant textile craftsmanship.",
                "Famous for pristine white desert moonlit nights, Pol architecture, and mirror-work handicrafts.",
                23.2420, 69.6669,
                "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80");
        kutch.setState(gujarat);
        districtRepository.save(kutch);

        cultureItemRepository.save(new CultureItem(kutch, "DANCE", "Garba & Dandiya Raas",
                "UNESCO Intangible Cultural Heritage folk dance performed in concentric circles around a clay lantern during 9 nights of Navratri.",
                "Devotional folk worship of Goddess Shakti",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "Largest open-air community dance festival in the entire world."));
        cultureItemRepository.save(new CultureItem(kutch, "FOOD", "Gujarati Thali, Dhokla & Khandvi",
                "Sublime balance of sweet, salty, and spicy flavours including steamed gram flour dhoklas, thepla, undhiyu, and shrikhand.",
                "Centuries of vegetarian Jain and Vaishnav culinary refinement",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Pure vegetarian gastronomic masterpiece."));

        // ==========================================
        // 11. REMAINING STATES & UTS (Comprehensive Coverage)
        // ==========================================
        State karnataka = new State("Karnataka", "KA", "STATE", "Bengaluru", "Hampi ruins, Hoysala temples, Mysore Dasara, Yakshagana theatre, and sandalwood.", 15.3173, 75.7139, 7);
        State odisha = new State("Odisha", "OD", "STATE", "Bhubaneswar", "Jagannath Puri Rath Yatra, Sun Temple of Konark, Odissi classical dance, and silver filigree.", 20.9517, 85.0985, 7);
        State madhyaPradesh = new State("Madhya Pradesh", "MP", "STATE", "Bhopal", "The Heart of India, Khajuraho erotic temples, Sanchi Stupa, Ujjain Mahakal, and tiger reserves.", 22.9734, 78.6569, 7);
        State himachal = new State("Himachal Pradesh", "HP", "STATE", "Shimla", "Land of Gods, snow-capped Himalayas, Kullu Nati dance, Kangra tea, and Buddhist monasteries.", 31.1048, 77.1734, 7);
        State uttarakhand = new State("Uttarakhand", "UK", "STATE", "Dehradun", "Devbhumi, holy Char Dham pilgrimage, Valley of Flowers, Rishikesh yoga capital, and Ganges source.", 30.0668, 79.0193, 7);
        State bihar = new State("Bihar", "BR", "STATE", "Patna", "Ancient Nalanda University, Bodh Gaya Mahabodhi temple, Madhubani folk paintings, and Chhath Puja.", 25.0961, 85.3131, 7);
        State goa = new State("Goa", "GA", "STATE", "Panaji", "Portuguese baroque churches, sun-kissed golden beaches, spice plantations, and Fado music.", 15.2993, 74.1240, 9);
        State telangana = new State("Telangana", "TG", "STATE", "Hyderabad", "City of Pearls, Charminar, Hyderabadi Biryani, Kakatiya architecture, and Bathukamma floral festival.", 18.1124, 79.0193, 7);
        State andhra = new State("Andhra Pradesh", "AP", "STATE", "Amaravati", "Tirupati Balaji sacred shrine, Kuchipudi classical dance, Kalamkari textiles, and spicy Andhra curries.", 15.9129, 79.7400, 7);
        State haryana = new State("Haryana", "HR", "STATE", "Chandigarh", "Battleground of the Mahabharata at Kurukshetra, agricultural heartland, and wrestling wrestling heritage.", 29.0588, 76.0856, 7);
        State jharkhand = new State("Jharkhand", "JH", "STATE", "Ranchi", "Tribal Sarhul festival, waterfalls of Ranchi, Betla National Park, and Sohrai mural art.", 23.6102, 85.2799, 7);
        State chhattisgarh = new State("Chhattisgarh", "CG", "STATE", "Raipur", "Bastar tribal woodcraft, Chitrakote 'Niagara of India' waterfalls, and ancient Sirpur temples.", 21.2787, 81.8661, 7);
        State meghalaya = new State("Meghalaya", "ML", "STATE", "Shillong", "Abode of Clouds, living root bridges of Cherrapunji, cleanest village Mawlynnong, and rock music.", 25.4670, 91.3662, 8);
        State manipur = new State("Manipur", "MN", "STATE", "Imphal", "Jewel of India, Manipuri classical dance, Loktak floating phumdis lake, and polo birthplace.", 24.6637, 93.9063, 8);
        State nagaland = new State("Nagaland", "NL", "STATE", "Kohima", "Land of 16 vibrant Naga tribes, colorful Hornbill Festival, and warrior shawls.", 26.1584, 94.5624, 8);
        State tripura = new State("Tripura", "TR", "STATE", "Agartala", "Ujjayanta royal palace, Unakoti rock-carved Shiva reliefs, and bamboo craft.", 23.9408, 91.9882, 8);
        State mizoram = new State("Mizoram", "MZ", "STATE", "Aizawl", "Land of rolling blue hills, Cheraw bamboo dance, and peaceful community values.", 23.1645, 92.9376, 8);
        State arunachal = new State("Arunachal Pradesh", "AR", "STATE", "Itanagar", "Land of the Dawn-Lit Mountains, Tawang Buddhist monastery, and pristine eastern Himalayan forests.", 28.2180, 94.7278, 7);
        State sikkim = new State("Sikkim", "SK", "STATE", "Gangtok", "Under Mt. Kanchenjunga, Rumtek monastery, India's first 100% organic state, and high alpine passes.", 27.5330, 88.5122, 8);

        // Union Territories
        State delhi = new State("Delhi", "DL", "UT", "New Delhi", "Historic capital of seven empires, Red Fort, Qutub Minar, Chandni Chowk street cuisine, and cultural melting pot.", 28.6139, 77.2090, 10);
        State jammuKashmir = new State("Jammu and Kashmir", "JK", "UT", "Srinagar", "Paradise on Earth, Dal Lake Shikaras, Mughal gardens, saffron fields, and Pashmina shawls.", 33.7782, 76.5762, 7);
        State andaman = new State("Andaman and Nicobar Islands", "AN", "UT", "Port Blair", "Cellular Jail national memorial, emerald turquoise beaches, coral reefs, and indigenous tribes.", 11.7401, 92.6586, 7);
        State chandigarh = new State("Chandigarh", "CH", "UT", "Chandigarh", "The Beautiful City, designed by Le Corbusier, famous for Nek Chand's Rock Garden and urban serenity.", 30.7333, 76.7794, 11);
        State dadra = new State("Dadra and Nagar Haveli and Daman and Diu", "DN", "UT", "Daman", "Coastal Portuguese forts, golden beaches, and tribal folk culture.", 20.4283, 72.8397, 8);
        State lakshadweep = new State("Lakshadweep", "LD", "UT", "Kavaratti", "Pristine coral atolls, coconut groves, turquoise lagoons, and scuba heritage.", 10.5667, 72.6417, 9);
        State puducherry = new State("Puducherry", "PY", "UT", "Puducherry", "French colonial French Quarter, seaside Promenade, Sri Aurobindo Ashram, and universal city Auroville.", 11.9416, 79.8083, 10);

        stateRepository.saveAll(List.of(
                karnataka, odisha, madhyaPradesh, himachal, uttarakhand, bihar, goa,
                telangana, andhra, haryana, jharkhand, chhattisgarh, meghalaya,
                manipur, nagaland, tripura, mizoram, arunachal, sikkim,
                delhi, jammuKashmir, andaman, chandigarh, dadra, lakshadweep, puducherry
        ));

        // Add some famous districts to additional key states
        District mysuru = new District("Mysuru (Mysore)",
                "The 'Cultural Capital of Karnataka', famous for the illuminated Mysore Palace, Chamundeshwari Temple, Mysore Pak sweet, and Mysore Silk.",
                "Historic capital of the Kingdom of Mysore ruled by the Wadiyars from 1399 to 1950.",
                "Center of heritage yoga, Sandalwood carving, and the grand 10-day Dasara elephant procession.",
                12.2958, 76.6394,
                "https://images.unsplash.com/photo-1600100397608-f010e42e5bf8?auto=format&fit=crop&w=800&q=80");
        mysuru.setState(karnataka);
        districtRepository.save(mysuru);

        placeRepository.save(new Place(mysuru, "Mysore Palace (Amba Vilas)", "PALACE",
                "Indo-Saracenic royal palace illuminated by 100,000 incandescent bulbs on Sundays and festive occasions.",
                "https://images.unsplash.com/photo-1600100397608-f010e42e5bf8?auto=format&fit=crop&w=800&q=80", "1912 CE"));
        cultureItemRepository.save(new CultureItem(mysuru, "FOOD", "Mysore Pak & Mysore Masala Dosa",
                "Mouth-melting fudge made of chickpea flour, generous pure ghee, and sugar; paired with crispy dosa spread with spicy red garlic chutney.",
                "Royal kitchen of Maharaja Krishna Raja Wadiyar IV",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Iconic dessert invented in royal courts, celebrated globally."));
        cultureItemRepository.save(new CultureItem(mysuru, "DANCE", "Yakshagana",
                "Traditional theatre dance performance combining dance, music, dialogue, and extravagant costumes depicting ancient Indian epics.",
                "Coastal Karnataka temple folk drama",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "Spellbinding all-night traditional performance with booming drums."));

        District puri = new District("Puri & Konark",
                "Spiritual seashore city of the sacred Jagannath Temple, the Sun Temple chariot of Konark, and Pattachitra folk painting village Raghurajpur.",
                "One of the original Char Dham pilgrimage sites blessed by Adi Shankaracharya.",
                "Famous for the annual Ratha Yatra (Chariot Festival) and pristine golden beach sand art.",
                19.8135, 85.8312,
                "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80");
        puri.setState(odisha);
        districtRepository.save(puri);

        placeRepository.save(new Place(puri, "Konark Sun Temple", "TEMPLE",
                "UNESCO World Heritage 13th-century temple carved as an enormous stone chariot with 24 elaborately sculpted stone wheels drawn by 7 horses.",
                "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80", "1250 CE"));
        cultureItemRepository.save(new CultureItem(puri, "DANCE", "Odissi Classical Dance",
                "Sensuous, lyrical classical dance known for its sculpturesque Tribhangi (three-bend) stance and intricate eye movements.",
                "Mahari temple dancers and Gotipua traditions of Odisha",
                "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80", null,
                "Oldest surviving classical dance of India based on archaeological evidence."));

        District oldDelhi = new District("Old Delhi & Central Delhi",
                "The historic imperial capital, famous for Shahjahanabad, Chandni Chowk street food, Jama Masjid, Red Fort, and India Gate.",
                "Epicenter of power for the Pandavas (Indraprastha), Tomar Rajputs, Delhi Sultanate, Mughals, and modern Republic of India.",
                "Where centuries of history whisper through ancient bazaars and grand national monuments.",
                28.6562, 77.2410,
                "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80");
        oldDelhi.setState(delhi);
        districtRepository.save(oldDelhi);

        placeRepository.save(new Place(oldDelhi, "Red Fort (Lal Qila)", "FORT",
                "Massive red sandstone fortress where the Prime Minister of India hoists the tricolor flag every Independence Day.",
                "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80", "1648 CE"));

        District srinagar = new District("Srinagar",
                "Summer capital nestled in the Kashmir valley, famous for floating wooden houseboats on Dal Lake, Shalimar Bagh, and saffron kahwa.",
                "Historic valley founded by Emperor Ashoka, celebrated as 'Firdous' (Heaven on Earth) by Mughal poets.",
                "Famed for Shikara rides, delicate walnut wood carvings, and Chinar trees turning scarlet in autumn.",
                34.0837, 74.7973,
                "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80");
        srinagar.setState(jammuKashmir);
        districtRepository.save(srinagar);

        placeRepository.save(new Place(srinagar, "Dal Lake & Shikara Floating Market", "NATURE",
                "Scenic alpine lake famous for floating flower and vegetable markets, surrounded by the Zabarwan mountain range.",
                "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80", "Timeless Natural Wonder"));
        cultureItemRepository.save(new CultureItem(srinagar, "FOOD", "Kashmiri Wazwan & Rogan Josh",
                "Multi-course royal feast of 36 dishes prepared by master chefs (Wazas), paired with aromatic Kahwa green tea with saffron and almonds.",
                "14th-century culinary tradition influenced by Persian and Central Asian trade",
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", null,
                "Peak of royal gastronomic hospitality in the subcontinent."));

        // ==========================================
        // 12. INITIAL USER-CONTRIBUTED CULTURAL STORIES (Underrated Culture)
        // ==========================================
        CultureStory story1 = new CultureStory(
                "The Living Root Bridges of Nohwet: Indigenous Bio-Engineering of Meghalaya",
                "Wanphrang Khongwir", "Meghalaya", "East Khasi Hills", "Hidden Gem",
                "Deep in the rainforests of Meghalaya, the indigenous Khasi tribe trains the aerial roots of Ficus elastica trees across roaring rivers to form living pedestrian bridges. Unlike concrete bridges that decay in moisture, these living root bridges grow stronger with time, lasting over 500 years! It's one of the planet's most brilliant examples of living in harmony with nature.",
                "IMAGE", "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
        );
        story1.setUpvotes(142);
        story1.setCreatedAt(LocalDateTime.now().minusDays(3));

        CultureStory story2 = new CultureStory(
                "Rogan Art of Nirona: India's Rare 400-Year-Old Castor Oil Fabric Craft",
                "Rizwan Khatri", "Gujarat", "Kutch", "Folk Art & Dance",
                "Did you know only one family in the entire world in Nirona village still practices the ancient Persian Rogan art? Boiled castor oil is turned into a gelatinous colored paste, and using a thin 6-inch metal stylus with NO tracing on the fabric, the artisan paints breathtaking symmetrical Tree of Life tapestries purely by muscle memory. Prime Minister Modi even gifted a Rogan painting to President Obama!",
                "IMAGE", "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80"
        );
        story2.setUpvotes(98);
        story2.setCreatedAt(LocalDateTime.now().minusDays(5));

        CultureStory story3 = new CultureStory(
                "Theyyam of Malabar: When Mortals Become Living Deities",
                "Aravind Nambiar", "Kerala", "Kannur", "Ancient Ritual",
                "During winter nights in northern Kerala groves, ordinary men transform into Theyyams—living gods. Wearing 15-foot bamboo headdresses and burning fiery embers, they enter a deep spiritual trance and run through blazing pyres without getting burnt. It is one of humanity's most mesmerizing unbroken sacred performance traditions.",
                "VIDEO", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        );
        story3.setUpvotes(215);
        story3.setCreatedAt(LocalDateTime.now().minusDays(7));

        CultureStory story4 = new CultureStory(
                "The Secret Behind Chettinad's 18 Spices: Beyond the Mainstream Curries",
                "Meenakshi Sundaram", "Tamil Nadu", "Sivaganga", "Traditional Food",
                "Everyone talks about Chettinad chicken, but few know that authentic Nattukotai Chettiar cooking uses sun-dried sundakai berries, kalpasi (black stone flower), and marathi mokku ground fresh on granite ammikallu stones. The spice aroma alone can make a village hungry!",
                "IMAGE", "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
        );
        story4.setUpvotes(84);
        story4.setCreatedAt(LocalDateTime.now().minusDays(1));

        cultureStoryRepository.saveAll(List.of(story1, story2, story3, story4));

        System.out.println("Pan-Indian cultural database successfully seeded with states, districts, monuments, dances, dishes, and folklore!");
    }
}
