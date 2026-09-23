/**
 * Sanskriti Darshan - Pan-India Cultural & Heritage Dataset
 * Covers all 28 States & 8 Union Territories with comprehensive cultural details.
 */
const CULTURAL_DATA = {
    states: [
        {
            id: 1,
            name: "Rajasthan",
            code: "RJ",
            type: "STATE",
            capital: "Jaipur",
            description: "The Land of Kings, renowned for majestic hill forts, Thar desert folklore, royal palaces, and vibrant craft traditions.",
            lat: 26.9124,
            lng: 75.7873,
            zoom: 7,
            districts: [
                {
                    id: 101,
                    name: "Jaipur",
                    whyFamous: "The 'Pink City' and UNESCO World Heritage City, world-renowned for Rajput palace architecture, terracotta-pink stone facades, astronomical observatories, and vibrant bazaars.",
                    historicalSignificance: "Founded in 1727 by Maharaja Sawai Jai Singh II, planned according to Vedic Vastu Shastra principles as India's first planned city.",
                    description: "Where royal grandeur lives on through majestic forts, bustling gem markets, and rich hospitality.",
                    lat: 26.9124,
                    lng: 75.7873,
                    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Hawa Mahal (Palace of Winds)",
                            category: "PALACE",
                            description: "Five-story pink sandstone palace with 953 honeycomb jharokhas built in 1799 for royal ladies to view street processions unseen.",
                            image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
                            period: "1799 CE"
                        },
                        {
                            name: "Amber Fort & Sheesh Mahal",
                            category: "FORT",
                            description: "Hilltop fortress featuring the world-famous Sheesh Mahal (hall of mirrors) reflecting single candlelight across thousands of Belgian mirrors.",
                            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
                            period: "16th Century"
                        },
                        {
                            name: "Jantar Mantar",
                            category: "HERITAGE",
                            description: "UNESCO World Heritage collection of nineteen architectural astronomical instruments, including the world's largest stone sundial (Vrihat Samrat Yantra).",
                            image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
                            period: "1734 CE"
                        }
                    ],
                    dances: [
                        {
                            name: "Ghoomar Dance",
                            origin: "Bhil tribe adopted by Rajput royalty",
                            description: "Graceful folk dance performed by women twirling in vibrant flared ghagras, symbolizing feminine grace and celebration.",
                            significance: "Ranked among the world's most elegant cultural dances."
                        },
                        {
                            name: "Kalbelia Dance",
                            origin: "Kalbelia nomadic snake-charmer community",
                            description: "Sensuous, high-tempo dance replicating serpent movements in black swirling costumes, designated as UNESCO Intangible Cultural Heritage.",
                            significance: "Intangible Cultural Heritage of Humanity."
                        }
                    ],
                    food: [
                        {
                            name: "Dal Baati Churma",
                            origin: "Arid Marwar gastronomy",
                            description: "Crispy baked wheat balls dipped in pure desi ghee, served with spicy five-lentil curry (Panchmel Dal) and sweet powdered wheat Churma.",
                            significance: "Signature royal feast of Rajasthan."
                        },
                        {
                            name: "Ghevar & Pyaz Kachori",
                            origin: "Traditional Halwai confectionery of Jaipur",
                            description: "Honeycomb-patterned disc sweet soaked in saffron syrup, paired with crisp flaky pastry stuffed with fiery spiced onions.",
                            significance: "Teej festival traditional delicacy."
                        }
                    ],
                    songs: [
                        {
                            name: "Kesariya Balam (Padharo Mhare Desh)",
                            origin: "Traditional Mand & Manganiyar folk melody",
                            description: "Soulful desert raga welcoming travelers with the iconic call 'Padharo Mhare Desh' (Welcome to my land).",
                            significance: "Official cultural anthem of Rajasthan's royal hospitality."
                        }
                    ],
                    underratedGems: "The stepwell of Chand Baori in nearby Abhaneri features 3,500 narrow steps carved in geometric symmetry descending 13 stories, a masterclass in ancient hydraulic engineering."
                },
                {
                    id: 102,
                    name: "Udaipur",
                    whyFamous: "The 'City of Lakes' and 'Venice of the East', famous for romantic white marble palaces floating in Lake Pichola and heroic Mewar history.",
                    historicalSignificance: "Founded in 1559 by Maharana Udai Singh II as the capital of Mewar, celebrated for unyielding resistance against imperial subjugation.",
                    description: "Enchanting lakeside heritage with serene water views, vintage car museums, and Rajput miniature art.",
                    lat: 24.5854,
                    lng: 73.7125,
                    heroImage: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "City Palace Complex",
                            category: "PALACE",
                            description: "Flamboyant palace complex perched atop Lake Pichola featuring peacock mosaics, inlaid tilework, and mirror-work chambers.",
                            image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80",
                            period: "1559 CE"
                        },
                        {
                            name: "Lake Palace (Jag Niwas)",
                            category: "PALACE",
                            description: "Floating white marble pleasure palace built on an island in Lake Pichola, now celebrated globally as a heritage luxury icon.",
                            image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
                            period: "1746 CE"
                        }
                    ],
                    dances: [
                        {
                            name: "Bhavai Dance",
                            origin: "Mewar & Marwar folk traditions",
                            description: "Daring balance dance where women pirouette while balancing 7 to 9 brass pitchers on their head atop sharp swords.",
                            significance: "Spectacular exhibition of feminine balance and poise."
                        }
                    ],
                    food: [
                        {
                            name: "Gatte Ki Sabzi & Ker Sangri",
                            origin: "Desert forage gastronomy",
                            description: "Gram flour dumplings simmered in curd gravy, paired with wild desert beans and capers cooked in mustard oil.",
                            significance: "Ancient Marwari drought-resilient culinary wisdom."
                        }
                    ],
                    songs: [
                        {
                            name: "Mewari Folk Ballads & Ravanahatha",
                            origin: "Court bards of Mewar",
                            description: "Ancient bowed string instrument (Ravanahatha) recounting ballads of Maharana Pratap and Chetak's valor.",
                            significance: "One of the earliest ancestors of the modern violin."
                        }
                    ],
                    underratedGems: "The massive Kumbhalgarh Fort wall nearby stretches over 36 kilometers—the second-longest continuous wall on Earth after the Great Wall of China!"
                }
            ]
        },
        {
            id: 2,
            name: "Uttar Pradesh",
            code: "UP",
            type: "STATE",
            capital: "Lucknow",
            description: "Spiritual heart of India, ancient cradle of Vedic philosophy, holy Ganga Ghats, Awadhi court culture, and monumental architectural wonders.",
            lat: 26.8467,
            lng: 80.9462,
            zoom: 7,
            districts: [
                {
                    id: 201,
                    name: "Varanasi (Kashi)",
                    whyFamous: "One of the oldest continually inhabited cities in human history, the spiritual epicenter of Hinduism, sacred river Ganga, Banarasi silk, and Indian classical music.",
                    historicalSignificance: "Revered in ancient scriptures as the eternal city of Lord Shiva; celebrated by Mark Twain as 'older than history, older than tradition, older even than legend'.",
                    description: "Where twilight brings fire aartis, sitar ragas float over misty ghats, and spiritual transcendence meets everyday life.",
                    lat: 25.3176,
                    lng: 82.9739,
                    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Dashashwamedh Ghat & Evening Ganga Aarti",
                            category: "TEMPLE",
                            description: "Legendary riverfront steps where saffron-robed priests synchronize grand brass lamps and conch shell calls every evening at sunset.",
                            image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
                            period: "Ancient Ghat"
                        },
                        {
                            name: "Kashi Vishwanath Jyotirlinga Temple",
                            category: "TEMPLE",
                            description: "One of the 12 most sacred Jyotirlingas, capped with a towering golden dome donated by Maharaja Ranjit Singh.",
                            image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
                            period: "Rebuilt 1780 CE"
                        },
                        {
                            name: "Sarnath Dhamek Stupa",
                            category: "HERITAGE",
                            description: "Sacred Buddhist deer park where Gautama Buddha delivered his first sermon after enlightenment, turning the Wheel of Law.",
                            image: "https://images.unsplash.com/photo-1600100397608-f010e42e5bf8?auto=format&fit=crop&w=800&q=80",
                            period: "500 CE"
                        }
                    ],
                    dances: [
                        {
                            name: "Kathak (Banaras Gharana)",
                            origin: "Varanasi temple storytelling traditions",
                            description: "Classical dance characterized by intricate footwork (Tatkar), rapid pirouettes (Chakkars), and deep emotional facial abhinaya.",
                            significance: "Major classical dance form preserved across centuries."
                        }
                    ],
                    food: [
                        {
                            name: "Banarasi Paan & Malaiyyo",
                            origin: "Varanasi culinary heritage",
                            description: "GI-tagged aromatic betel leaf stuffed with gulkand, silver foil, and spices; paired with winter saffron milk foam (Malaiyyo) infused with morning dew.",
                            significance: "Immortalized in Indian pop culture and folklore."
                        },
                        {
                            name: "Kachori Jalebi & Tamatar Chaat",
                            origin: "Old alleyways of Vishwanath Gali",
                            description: "Spiced lentil-filled crisp kachori served with steaming aloo curry, hot crispy syrupy jalebis, and tangy baked clay-pot tomato chaat.",
                            significance: "The morning fuel of Varanasi locals for centuries."
                        }
                    ],
                    songs: [
                        {
                            name: "Thumri, Kajri & Shehnai of Bismillah Khan",
                            origin: "Banaras Gharana of Classical Music",
                            description: "Semi-classical monsoon song Kajri and the divine Shehnai music popularized worldwide by Bharat Ratna Ustad Bismillah Khan.",
                            significance: "UNESCO City of Music honor."
                        }
                    ],
                    underratedGems: "In the narrow alleyways of Madanpura, master weavers still operate ancient wooden handlooms to weave real silver and gold Zari threads into royal Banarasi silks that take up to 6 months per piece."
                },
                {
                    id: 202,
                    name: "Agra",
                    whyFamous: "Home to the world wonder Taj Mahal, Agra Fort, Fatehpur Sikri, exquisite marble inlay work (Pietra Dura), and royal confectionery Petha.",
                    historicalSignificance: "Capital of the Mughal Empire under Akbar, Jahangir, and Shah Jahan, serving as the cultural epicenter of northern India in the 16th-17th centuries.",
                    description: "A monumental city bathed in white marble and red sandstone on the serene banks of the Yamuna.",
                    lat: 27.1767,
                    lng: 78.0081,
                    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Taj Mahal",
                            category: "MONUMENT",
                            description: "Monumental ivory-white marble mausoleum built by Mughal Emperor Shah Jahan for Mumtaz Mahal, recognized as an epitome of timeless love.",
                            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
                            period: "1632–1653 CE"
                        },
                        {
                            name: "Agra Fort",
                            category: "FORT",
                            description: "Massive 94-acre red sandstone fortress containing the Diwan-i-Khas, Jahangiri Mahal, and the balcony where Shah Jahan gazed upon the Taj Mahal in captivity.",
                            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
                            period: "1565 CE"
                        }
                    ],
                    dances: [
                        {
                            name: "Mughal Court Dance Traditions",
                            origin: "Imperial court salons",
                            description: "Court adaptations of Kathak emphasizing subtle hand gestures, lyrical Persian poetry interpretation, and ghazal aesthetics.",
                            significance: "Synthesized Persian court aesthetics with ancient Indian Natya."
                        }
                    ],
                    food: [
                        {
                            name: "Agra Petha & Bedmi Puri",
                            origin: "Mughal royal sweet-makers",
                            description: "Translucent candy crafted from ash gourd infused with saffron, kewra, and rose water; paired with lentil-stuffed fried bread and sour potato curry.",
                            significance: "GI-tagged confectionery delicacy with 350+ years of heritage."
                        }
                    ],
                    songs: [
                        {
                            name: "Brajbhasha Folk Songs & Haveli Sangeet",
                            origin: "Braj cultural circuit",
                            description: "Devotional songs celebrating the playful pastimes of Radha and Krishna, sung in the lyrical Brajbhasha dialect.",
                            significance: "Classical roots of Dhrupad and Haveli musical formats."
                        }
                    ],
                    underratedGems: "Kachhpura village across the Yamuna provides an unspoiled village walk where artisans create Sanjhi paper-cutting art and Mughal heritage views without tourist crowds."
                },
                {
                    id: 203,
                    name: "Lucknow",
                    whyFamous: "The 'City of Nawabs', famous for refined Awadhi etiquette (Tehzeeb), monumental Bara Imambara labyrinth, delicate Chikankari embroidery, and melt-in-mouth Galouti kebabs.",
                    historicalSignificance: "Capital of the Nawabs of Awadh who fostered an extraordinary golden era of arts, architecture, Urdu poetry, and haute cuisine.",
                    description: "Where courtesy is a lifestyle, architecture defies gravity, and culinary traditions are guarded like state secrets.",
                    lat: 26.8467,
                    lng: 80.9462,
                    heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Bara Imambara & Bhulbhulaiya",
                            category: "MONUMENT",
                            description: "Monolithic arched hall built without any central pillars or beams, housing a 3D acoustic maze of 1,000 interlocking passageways.",
                            image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
                            period: "1784 CE"
                        },
                        {
                            name: "Rumi Darwaza",
                            category: "MONUMENT",
                            description: "Colossal 60-foot ornamental gate modeled after the Sublime Porte of Constantinople, standing as the grand symbol of Lucknow.",
                            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
                            period: "1784 CE"
                        }
                    ],
                    dances: [
                        {
                            name: "Lucknow Gharana Kathak",
                            origin: "Court of Nawab Wajid Ali Shah",
                            description: "Celebrated for Nazakat (grace), subtle wrist movements, lyrical Bhava, and abhinaya pioneered by Pandit Birju Maharaj's lineage.",
                            significance: "Peak of expressive Indian classical choreography."
                        }
                    ],
                    food: [
                        {
                            name: "Galouti Kebab & Sheermal",
                            origin: "Nawabi royal kitchens",
                            description: "Velvety spiced meat patties tenderized with raw papaya and 160 aromatic spices so soft they dissolve on the tongue without teeth, served on saffron flatbread.",
                            significance: "Created specially for toothless Nawab Asaf-ud-Daula."
                        }
                    ],
                    songs: [
                        {
                            name: "Ghazal & Dadra Poetry",
                            origin: "Awadhi literary salons",
                            description: "Musical renditions of romantic and philosophical Urdu couplets composed by Meer, Ghalib, and Begum Akhtar.",
                            significance: "Benchmark of poetic music in northern India."
                        }
                    ],
                    underratedGems: "Chikankari needlework—a delicate 400-year-old embroidery technique using 36 distinct stitches on muslin—was perfected by Empress Nur Jahan."
                }
            ]
        },
        {
            id: 3,
            name: "Kerala",
            code: "KL",
            type: "STATE",
            capital: "Thiruvananthapuram",
            description: "God's Own Country, famed for emerald backwaters, Ayurvedic healthcare wisdom, spice-scented hills, and the hypnotic Kathakali classical dance drama.",
            lat: 10.8505,
            lng: 76.2711,
            zoom: 7,
            districts: [
                {
                    id: 301,
                    name: "Kochi (Cochin)",
                    whyFamous: "The 'Queen of the Arabian Sea', famous for historic spice trade warehouses, iconic Chinese Fishing Nets, Portuguese Fort Kochi, colonial synagogues, and modern art biennales.",
                    historicalSignificance: "Major trading port since 1341 CE, drawing Arab, Jewish, Chinese, Portuguese, and Dutch merchants; site of the first European fort and church in India.",
                    description: "A maritime sanctuary where ancient spice aromas blend with sea breezes, colonial avenues, and vibrant arts.",
                    lat: 9.9312,
                    lng: 76.2673,
                    heroImage: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Chinese Fishing Nets (Cheenavala)",
                            category: "HERITAGE",
                            description: "Spectacular cantilevered shore-operated fishing mechanisms erected in the 14th century, silhouetted against Arabian Sea sunsets.",
                            image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
                            period: "14th Century"
                        },
                        {
                            name: "Mattancherry Dutch Palace",
                            category: "PALACE",
                            description: "Palace featuring mythological murals depicting Ramayana episodes in exquisite detail using natural organic pigments.",
                            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
                            period: "1555 CE"
                        }
                    ],
                    dances: [
                        {
                            name: "Kathakali & Mohiniyattam",
                            origin: "Ancient temple theatres (Koodiyattam roots)",
                            description: "Elaborate stylized dance-drama with green face makeup (Paccha), towering crowns, and 24 classical hand mudras depicting cosmic battles.",
                            significance: "One of the most complex performance arts in human history."
                        },
                        {
                            name: "Theyyam Ritual Dance",
                            origin: "Sacred groves of northern Malabar",
                            description: "Ritualistic worship where performers embody living deities in 20-foot bamboo headdresses and leap through embers.",
                            significance: "Ancient living prehistoric ritual tradition."
                        }
                    ],
                    food: [
                        {
                            name: "Kerala Sadya on Plantain Leaf",
                            origin: "Traditional agrarian Onam harvest feast",
                            description: "Grand vegetarian banquet of 24+ dishes including Avial, Olan, Thoran, Kalan, and Payasam served on fresh banana leaf.",
                            significance: "Celebrates equality and nature's bounty."
                        },
                        {
                            name: "Malabar Parotta & Karimeen Pollichathu",
                            origin: "Coastal spice kitchens",
                            description: "Flaky layered flatbread paired with pearl spot fish marinated in shallots, coconut milk, and green chillies, wrapped in banana leaf and slow-roasted.",
                            significance: "Kerala's most celebrated coastal delicacy."
                        }
                    ],
                    songs: [
                        {
                            name: "Chenda Melam & Sopana Sangeetham",
                            origin: "Sacred Kerala temple sanctums",
                            description: "Thunderous synchronous percussion of 100+ Chenda drums (Panchavadyam) and meditative devotional vocals sung at temple steps.",
                            significance: "Intense acoustic spectacle of Thrissur Pooram."
                        }
                    ],
                    underratedGems: "Kumbalangi Integrated Tourism Village—India's first designated eco-tourism village—where travelers can experience crab farming, coir weaving, and glowing bio-luminescent plankton (Kavaru) in night backwaters."
                }
            ]
        },
        {
            id: 4,
            name: "Punjab",
            code: "PB",
            type: "STATE",
            capital: "Chandigarh",
            description: "Land of the Five Rivers, vibrant energetic folklore, valorous history, fertile golden fields, and the revered Golden Temple.",
            lat: 31.1471,
            lng: 75.3412,
            zoom: 7,
            districts: [
                {
                    id: 401,
                    name: "Amritsar",
                    whyFamous: "Spiritual and cultural capital of Sikhism, famous for the magnificent Sri Harmandir Sahib (Golden Temple), world's largest community free kitchen (Langar), patriotic Wagah Border ceremony, and Phulkari embroidery.",
                    historicalSignificance: "Founded in 1577 by Guru Ram Das, the fourth Sikh Guru, around the sacred pool of immortal nectar ('Amrit Sarovar').",
                    description: "An oasis of selfless service, soulful 24/7 Gurbani kirtan, legendary tandoori dining, and golden hospitality.",
                    lat: 31.6340,
                    lng: 74.8723,
                    heroImage: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Sri Harmandir Sahib (Golden Temple)",
                            category: "TEMPLE",
                            description: "Gilded holy shrine clad in 500kg pure gold foil, open to all humans irrespective of religion, caste, or background.",
                            image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
                            period: "1589–1604 CE"
                        },
                        {
                            name: "Jallianwala Bagh Memorial",
                            category: "HERITAGE",
                            description: "Sacred national memorial preserving bullet indentations on brick walls from the fateful 1919 massacre that galvanized India's freedom struggle.",
                            image: "https://images.unsplash.com/photo-1600100397608-f010e42e5bf8?auto=format&fit=crop&w=800&q=80",
                            period: "Historic Memorial"
                        },
                        {
                            name: "Wagah-Attari Border",
                            category: "HERITAGE",
                            description: "International border ceremony featuring high-kick military drills, trumpets, and thunderous patriotic cheers at sunset.",
                            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
                            period: "1959-Present"
                        }
                    ],
                    dances: [
                        {
                            name: "Bhangra & Giddha",
                            origin: "Harvest festivals across Punjab plains",
                            description: "High-octane, joyous acrobatic dance powered by the deep resonant rhythm of the Dhol and clapping circles of Giddha.",
                            significance: "Global symbol of exuberant human joy and vitality."
                        }
                    ],
                    food: [
                        {
                            name: "Amritsari Kulcha & Lassi",
                            origin: "Generational tandoor bakeries",
                            description: "Super-crisp, multi-layered tandoori bread filled with spiced potato and pomegranate seeds, drenched in homemade white butter, served with pindi chole and sweet churned lassi.",
                            significance: "World-renowned breakfast tradition."
                        },
                        {
                            name: "Makki Di Roti & Sarson Da Saag",
                            origin: "Agrarian winter harvest culinary roots",
                            description: "Cornmeal flatbread paired with slow-cooked mustard greens infused with ginger, garlic, green chilies, and jaggery.",
                            significance: "The soul of Punjabi winter gastronomy."
                        }
                    ],
                    songs: [
                        {
                            name: "Gurbani Kirtan in 31 Ragas",
                            origin: "Sacred Sikh musical scriptures",
                            description: "Devotional poetry sung in classical ragas accompanied by harmonium, dilruba, and jori tabla across the waters of the Sarovar.",
                            significance: "A continuous 400-year unbroken acoustic meditation."
                        }
                    ],
                    underratedGems: "The Guru Ka Langar feeds over 100,000 pilgrims daily for free, where royal ambassadors and humble laborers sit side-by-side on floor mats—the ultimate living embodiment of equality."
                }
            ]
        },
        {
            id: 5,
            name: "Tamil Nadu",
            code: "TN",
            type: "STATE",
            capital: "Chennai",
            description: "Fortress of classical Dravidian culture, ancient Sangam literature spanning 2,000+ years, towering granite temple gopurams, and Bharatanatyam dance.",
            lat: 11.1271,
            lng: 78.6569,
            zoom: 7,
            districts: [
                {
                    id: 501,
                    name: "Madurai",
                    whyFamous: "The 'Athens of the East' and 'City that Never Sleeps' (Thoonga Nagaram), famous for the massive Meenakshi Amman Temple, fragrant Madurai Malli jasmine, and ancient Tamil Sangam poetry.",
                    historicalSignificance: "Ancient capital of the Pandya kings, documented by Greek traveler Megasthenes in the 3rd century BCE as a bustling international gem capital.",
                    description: "Built in the shape of a sacred blooming lotus, with streets named after Tamil months radiating from the temple center.",
                    lat: 9.9252,
                    lng: 78.1198,
                    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Meenakshi Sundareswarar Temple",
                            category: "TEMPLE",
                            description: "Colossal Dravidian temple complex spanning 14 acres with 14 gopurams (towers) adorned with 33,000 polychrome stone sculptures and the Hall of 1,000 Pillars.",
                            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
                            period: "16th-17th Century expansion"
                        },
                        {
                            name: "Thirumalai Nayakkar Mahal",
                            category: "PALACE",
                            description: "Stately 17th-century palace blending Dravidian and Islamic architecture, celebrated for giant 82-foot circular masonry pillars.",
                            image: "https://images.unsplash.com/photo-1600100397608-f010e42e5bf8?auto=format&fit=crop&w=800&q=80",
                            period: "1636 CE"
                        }
                    ],
                    dances: [
                        {
                            name: "Bharatanatyam",
                            origin: "Tamil temple Devadasi tradition",
                            description: "Exquisite classical dance characterized by geometric arm lines, crisp stamping foot rhythms (Jathis), and deep emotional facial abhinaya.",
                            significance: "Oldest classical dance tradition of India."
                        }
                    ],
                    food: [
                        {
                            name: "Madurai Jigarthanda & Bun Parotta",
                            origin: "Royal Nayak refreshing drink",
                            description: "Cooling beverage made with almond gum, nannari root syrup, condensed milk cream, and ice cream; paired with fluffy, layered bun-shaped parottas.",
                            significance: "Iconic beverage literally meaning 'Cool Heart'."
                        }
                    ],
                    songs: [
                        {
                            name: "Nadaswaram & Thavil Temple Music",
                            origin: "Mangala Isai temple ritual traditions",
                            description: "Powerful wind instrument (Nadaswaram) paired with the booming Thavil barrel drum to welcome deities and auspicious ceremonies.",
                            significance: "Considered the most auspicious sound in South Indian culture."
                        }
                    ],
                    underratedGems: "Madurai Malli (Jasmine) has a distinct thick petal geometry and hypnotic fragrance that retains scent for over 36 hours; it holds a GI tag and is flown fresh daily to global perfume houses."
                }
            ]
        },
        {
            id: 6,
            name: "West Bengal",
            code: "WB",
            type: "STATE",
            capital: "Kolkata",
            description: "Land of Nobel Laureates, intellectual Renaissance, UNESCO Intangible Heritage Durga Puja, terracotta temples, and mystical Baul music.",
            lat: 22.9868,
            lng: 87.8550,
            zoom: 7,
            districts: [
                {
                    id: 601,
                    name: "Kolkata",
                    whyFamous: "The 'City of Joy' and Cultural Capital of India, celebrated for colonial architectural heritage, iconic Howrah Bridge, intellectual Adda culture, tramways, and the world's biggest open-air art installation—Durga Puja.",
                    historicalSignificance: "Capital of British India until 1911; breeding ground of the Indian Renaissance led by Rabindranath Tagore, Swami Vivekananda, Bankim Chandra, and Netaji Bose.",
                    description: "Where literature, cinema, hand-pulled rickshaws, steaming earthen cups of Cha, and artistic passions flourish side-by-side.",
                    lat: 22.5726,
                    lng: 88.3639,
                    heroImage: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Victoria Memorial & Maidan",
                            category: "MONUMENT",
                            description: "Magnificent white Makrana marble palace commemorating the Queen Empress, surrounded by lush green public gardens.",
                            image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
                            period: "1921 CE"
                        },
                        {
                            name: "Howrah Bridge (Rabindra Setu)",
                            category: "HERITAGE",
                            description: "Engineering marvel cantilever truss bridge spanning the Hooghly River without a single pillar in the river bed, carrying 100,000 vehicles daily.",
                            image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
                            period: "1943 CE"
                        }
                    ],
                    dances: [
                        {
                            name: "Dhunuchi Naach & Purulia Chhau",
                            origin: "Durga Puja & tribal martial lore",
                            description: "Fervent rhythmic dance balancing smoking earthen pots filled with burning coconut husk during Durga Puja, and acrobatic mask-dance Chhau.",
                            significance: "UNESCO Intangible Cultural Heritage."
                        }
                    ],
                    food: [
                        {
                            name: "Kolkata Biryani, Kosha Mangsho & Rosogolla",
                            origin: "Nawab Wajid Ali Shah's exile chefs & Nobin Chandra Das",
                            description: "Fragrant biryani distinguished by slow-cooked golden potato and boiled egg; alongside spongy cottage cheese spheres boiled in sugar syrup.",
                            significance: "Culinary crown jewels of Bengal."
                        }
                    ],
                    songs: [
                        {
                            name: "Rabindra Sangeet & Baul Folk",
                            origin: "Tagore's compositions & wandering mystic bards",
                            description: "Philosophical acoustic songs sung with the single-stringed Ektara and Dotara exploring love, nature, and divine unity.",
                            significance: "UNESCO Intangible Oral Heritage of Humanity."
                        }
                    ],
                    underratedGems: "Kumartuli is a 300-year-old labyrinth district on the riverbank where hereditary sculptors mold sacred idols of Goddess Durga entirely out of holy Ganga river clay and straw, shipping them to 80+ nations."
                }
            ]
        },
        {
            id: 7,
            name: "Assam",
            code: "AS",
            type: "STATE",
            capital: "Dispur",
            description: "Gateway to North-East India, world-famous for single-origin Assam tea, one-horned rhinos in Kaziranga, and shimmering golden Muga silk.",
            lat: 26.2006,
            lng: 92.9376,
            zoom: 7,
            districts: [
                {
                    id: 701,
                    name: "Guwahati & Majuli",
                    whyFamous: "Ancient riverine citadel on the Brahmaputra, home to the sacred Kamakhya Shakti Peetha, and the world's largest river island Majuli with neo-Vaishnavite Satras.",
                    historicalSignificance: "Mentioned in Mahabharata as Pragjyotishpura ('City of Eastern Astrology') and ruled by the legendary Ahom Dynasty who successfully repelled Mughal invasions 17 times.",
                    description: "Land of misty tea gardens, serene river dolphin waters, handloom weaving, and vibrant spring festivities.",
                    lat: 26.1445,
                    lng: 91.7362,
                    heroImage: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Kamakhya Devi Temple",
                            category: "TEMPLE",
                            description: "Ancient hilltop shrine honoring the Mother Goddess, representing the sacred feminine creative power of the cosmos.",
                            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
                            period: "1565 CE reconstruction"
                        },
                        {
                            name: "Majuli Island Satras",
                            category: "HERITAGE",
                            description: "Neo-Vaishnavite monasteries founded in the 15th century by Saint Srimanta Sankardev, preserving ancient mask-making, classical dance, and drama.",
                            image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=800&q=80",
                            period: "15th Century"
                        }
                    ],
                    dances: [
                        {
                            name: "Bihu Dance & Sattriya Classical",
                            origin: "Spring agricultural rites & monastery traditions",
                            description: "Brisk, cheerful dance characterized by rapid hand maneuvers and waist-sways in traditional red-and-white Muga silk, alongside Sattriya classical dance.",
                            significance: "Broke Guinness World Records with 11,304 performers dancing simultaneously."
                        }
                    ],
                    food: [
                        {
                            name: "Masor Tenga & Khaar",
                            origin: "Indigenous Assamese culinary heritage",
                            description: "Tangy light river fish curry simmered with sour tomatoes or elephant apple (Ou Tenga); preceded by alkaline Khaar filtered through banana peel ash.",
                            significance: "Delicate organic cuisine focused on gut health and natural balance."
                        }
                    ],
                    songs: [
                        {
                            name: "Bihu Geet & Tokari Geet",
                            origin: "Brahmaputra valley folk bards",
                            description: "Festive songs accompanied by the buffalo-horn trumpet (Pepa), bamboo clapper (Toka), and double-faced Dhol.",
                            significance: "Irresistible rhythm of northeastern spring renewal."
                        }
                    ],
                    underratedGems: "Muga Silk—produced only in Assam—has a natural shimmering golden hue that actually becomes shinier with every wash and outlasts the wearer for over a century!"
                }
            ]
        },
        {
            id: 8,
            name: "Ladakh",
            code: "LA",
            type: "UT",
            capital: "Leh",
            description: "The 'Land of High Passes', stark cold desert moonscapes, ancient Tibetan Buddhist gompas, azure high-altitude lakes, and genuine Pashmina wool.",
            lat: 34.1526,
            lng: 77.5771,
            zoom: 7,
            districts: [
                {
                    id: 801,
                    name: "Leh & Nubra",
                    whyFamous: "High-altitude mountain oasis at 3,500m, famous for nine-story Leh Palace, cliffside monasteries, Pangong Tso lake, and double-humped Bactrian camels.",
                    historicalSignificance: "Crucial nexus on the ancient Silk Route connecting India with Tibet, Yarkand, and China for caravan trade in silk, tea, and pashm wool.",
                    description: "Prayer flags dancing in crisp mountain breezes against a backdrop of snow-crested Trans-Himalayan summits.",
                    lat: 34.1526,
                    lng: 77.5771,
                    heroImage: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Thiksey & Hemis Monasteries",
                            category: "TEMPLE",
                            description: "12-story hilltop complex resembling the Potala Palace of Lhasa, housing a 49-foot gilded statue of Maitreya Future Buddha.",
                            image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
                            period: "15th Century"
                        },
                        {
                            name: "Pangong Tso & Magnetic Hill",
                            category: "NATURE",
                            description: "Endorheic salt lake at 14,270 feet that shifts colors from emerald green to deep cobalt blue throughout the day.",
                            image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
                            period: "Geological Wonder"
                        }
                    ],
                    dances: [
                        {
                            name: "Cham Sacred Mask Dance",
                            origin: "Tibetan Tantric Buddhist monastic rituals",
                            description: "Lamas in silk robes and terrifying deity masks perform ritual choreographies to conquer destructive psychological delusions and bring cosmic peace.",
                            significance: "Deep spiritual ritual performed at Hemis festival."
                        }
                    ],
                    food: [
                        {
                            name: "Thukpa, Skyu & Gur Gur Butter Tea",
                            origin: "Cold-desert winter survival gastronomy",
                            description: "Hand-rolled wheat pasta stew cooked with root vegetables, accompanied by salty pink tea churned with yak butter in wooden cylinders.",
                            significance: "Provides vital thermal energy in sub-zero Himalayan altitudes."
                        }
                    ],
                    songs: [
                        {
                            name: "Dungchen Horns & Monastic Chants",
                            origin: "Himalayan Buddhist liturgy",
                            description: "Resonant, low-frequency drones produced by 10-foot brass horns (Dungchen) echoing across the Indus valley.",
                            significance: "Infrasonic acoustic tradition evoking deep inner stillness."
                        }
                    ],
                    underratedGems: "The Ice Stupas of Ladakh: pioneered by innovator Sonam Wangchuk, artificial ice towers freeze winter meltwater into 100-foot stupas that gradually thaw in spring, irrigating arid desert apple orchards."
                }
            ]
        },
        {
            id: 9,
            name: "Maharashtra",
            code: "MH",
            type: "STATE",
            capital: "Mumbai",
            description: "Empire of Chhatrapati Shivaji Maharaj, monumental hill & sea forts, Ajanta-Ellora rock-cut cave wonders, fiery cuisine, and Mumbai's cosmopolitan spirit.",
            lat: 19.7515,
            lng: 75.7139,
            zoom: 7,
            districts: [
                {
                    id: 901,
                    name: "Pune & Chhatrapati Sambhajinagar",
                    whyFamous: "The cultural heartbeat of Maharashtra, famous for the invincible hill forts of Shivaji Maharaj, Shaniwar Wada, UNESCO Ajanta & Ellora caves, and grand Ganeshotsav.",
                    historicalSignificance: "Seat of the 18th-century Maratha confederacy under the Peshwas and home to the Kailash Temple—the largest monolithic rock-cut structure on Earth.",
                    description: "A dynamic cultural hub where classical music, historical valor, and cutting-edge education converge.",
                    lat: 18.5204,
                    lng: 73.8567,
                    heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "Kailash Temple (Ellora Cave 16)",
                            category: "TEMPLE",
                            description: "Carved from top to bottom out of a single basalt cliff face, removing 200,000 tons of rock over 18 years without a single error.",
                            image: "https://images.unsplash.com/photo-1600100397608-f010e42e5bf8?auto=format&fit=crop&w=800&q=80",
                            period: "8th Century (Rashtrakuta Dynasty)"
                        },
                        {
                            name: "Shaniwar Wada",
                            category: "FORT",
                            description: "Historic 7-story fortification palace seat of the Peshwa rulers built in 1732, celebrated for its massive Dilli Darwaza spiked gates.",
                            image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
                            period: "1732 CE"
                        }
                    ],
                    dances: [
                        {
                            name: "Lavani & Koli Dance",
                            origin: "Maratha soldier entertainment & fisherfolk communities",
                            description: "High-tempo rhythmic dance accompanied by the sharp beat of the Dholki, performed in traditional nine-yard Nauvari sarees.",
                            significance: "Celebrates feminine boldness, humor, and joy."
                        }
                    ],
                    food: [
                        {
                            name: "Misal Pav, Puran Poli & Vada Pav",
                            origin: "Marathi rustic home kitchens",
                            description: "Spicy sprouted bean curry topped with farsan, onions, and lemon served with soft pav buns; alongside sweet jaggery-lentil stuffed flatbread.",
                            significance: "Global favorite street food of millions."
                        }
                    ],
                    songs: [
                        {
                            name: "Powada & Natya Sangeet",
                            origin: "Maratha military bards (Shahirs)",
                            description: "Heroic ballads commemorating battles and bravery of Shivaji Maharaj, and musical theatre tradition.",
                            significance: "Inspirational oral historical tradition."
                        }
                    ],
                    underratedGems: "Murud-Janjira Fort sits completely surrounded by the Arabian Sea with 19 intact bastions; it remained unconquered by the British, Portuguese, and Dutch for over 350 years."
                }
            ]
        },
        {
            id: 10,
            name: "Gujarat",
            code: "GJ",
            type: "STATE",
            capital: "Gandhinagar",
            description: "Land of the White Desert Rann of Kutch, Asiatic Lions in Gir, Mahatma Gandhi's Sabarmati Ashram, and the world's longest dance festival Garba.",
            lat: 22.2587,
            lng: 71.1924,
            zoom: 7,
            districts: [
                {
                    id: 1001,
                    name: "Kutch & Ahmedabad",
                    whyFamous: "The vast White Salt Desert of Kutch, UNESCO World Heritage City Ahmedabad, vibrant Rann Utsav, and exquisite Rogan and Ajrakh textile crafts.",
                    historicalSignificance: "Home to Dholavira, one of the most prominent cities of the 4,500-year-old Indus Valley Civilization with sophisticated water reservoirs.",
                    description: "Endless white salt plains glowing under full moon nights, vibrant tribal embroidery, and warm community feasts.",
                    lat: 23.2420,
                    lng: 69.6669,
                    heroImage: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
                    places: [
                        {
                            name: "White Rann of Kutch",
                            category: "NATURE",
                            description: "One of the largest seasonal salt marshes in the world, transforming into an ethereal glittering white expanse during winter.",
                            image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
                            period: "Natural Wonder"
                        },
                        {
                            name: "Adalaj Stepwell (Vav)",
                            category: "HERITAGE",
                            description: "Intricately carved 5-story subterranean stepwell built in 1498 showcasing Hindu, Jain, and Islamic architectural harmony.",
                            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
                            period: "1498 CE"
                        }
                    ],
                    dances: [
                        {
                            name: "Garba & Dandiya Raas",
                            origin: "Devotional Shakti worship during Navratri",
                            description: "Millions of people dancing in concentric circles clapping and tapping decorated sticks to the beat of Dhol for nine ecstatic nights.",
                            significance: "UNESCO Intangible Cultural Heritage of Humanity."
                        }
                    ],
                    food: [
                        {
                            name: "Gujarati Thali, Dhokla, Thepla & Undhiyu",
                            origin: "Ahimsa vegetarian culinary culture",
                            description: "Artful balance of sweet, tangy, and spiced elements: steamed gram flour cakes, winter mixed vegetable casserole, and crisp bread.",
                            significance: "World's most elaborate vegetarian dining experience."
                        }
                    ],
                    songs: [
                        {
                            name: "Dayro & Sugam Sangeet",
                            origin: "Saurashtra village gathering folklore",
                            description: "All-night storytelling musical session where folk singers discuss ethics, humor, and heroism with rustic instruments.",
                            significance: "Living folk tradition of community bonding."
                        }
                    ],
                    underratedGems: "Rogan Art in Nirona village: painted using a metal rod and boiled castor-oil jelly directly onto fabric without any preliminary sketch, practiced by only one master family on Earth!"
                }
            ]
        },
        // Remaining States & UTs with core coordinates & cultural highlights
        { id: 11, name: "Karnataka", code: "KA", type: "STATE", capital: "Bengaluru", description: "Hampi ruins, Hoysala temples, Mysore Palace, Yakshagana dance, and filter coffee.", lat: 15.3173, lng: 75.7139, zoom: 7, districts: [] },
        { id: 12, name: "Odisha", code: "OD", type: "STATE", capital: "Bhubaneswar", description: "Puri Jagannath Rath Yatra, Konark Sun Temple chariot, Odissi classical dance, and silver filigree.", lat: 20.9517, lng: 85.0985, zoom: 7, districts: [] },
        { id: 13, name: "Madhya Pradesh", code: "MP", type: "STATE", capital: "Bhopal", description: "The Heart of India, Khajuraho temples, Sanchi Stupa, Ujjain Mahakal, and tiger reserves.", lat: 22.9734, lng: 78.6569, zoom: 7, districts: [] },
        { id: 14, name: "Himachal Pradesh", code: "HP", type: "STATE", capital: "Shimla", description: "Land of Gods, snow-capped Himalayas, Kullu Nati dance, Kangra tea, and wooden temples.", lat: 31.1048, lng: 77.1734, zoom: 7, districts: [] },
        { id: 15, name: "Uttarakhand", code: "UK", type: "STATE", capital: "Dehradun", description: "Devbhumi, holy Char Dham shrines, Valley of Flowers, Rishikesh yoga capital, and the Ganges source.", lat: 30.0668, lng: 79.0193, zoom: 7, districts: [] },
        { id: 16, name: "Bihar", code: "BR", type: "STATE", capital: "Patna", description: "Ancient Nalanda University, Bodh Gaya Mahabodhi tree, Madhubani folk paintings, and Chhath Puja.", lat: 25.0961, lng: 85.3131, zoom: 7, districts: [] },
        { id: 17, name: "Goa", code: "GA", type: "STATE", capital: "Panaji", description: "Portuguese baroque churches, spice plantations, golden beaches, Fado ballads, and Bebinca sweet.", lat: 15.2993, lng: 74.1240, zoom: 9, districts: [] },
        { id: 18, name: "Telangana", code: "TG", type: "STATE", capital: "Hyderabad", description: "City of Pearls, Charminar, Hyderabadi Biryani, Kakatiya Thousand Pillar temple, and Bathukamma festival.", lat: 18.1124, lng: 79.0193, zoom: 7, districts: [] },
        { id: 19, name: "Andhra Pradesh", code: "AP", type: "STATE", capital: "Amaravati", description: "Tirupati Balaji sacred shrine, Kuchipudi classical dance, Kalamkari art, and spicy gongura pickles.", lat: 15.9129, lng: 79.7400, zoom: 7, districts: [] },
        { id: 20, name: "Haryana", code: "HR", type: "STATE", capital: "Chandigarh", description: "Kurukshetra Mahabharata battlefield, agrarian heartland, folk Saang theatre, and Olympic wrestling heritage.", lat: 29.0588, lng: 76.0856, zoom: 7, districts: [] },
        { id: 21, name: "Jharkhand", code: "JH", type: "STATE", capital: "Ranchi", description: "Tribal Sarhul festival, waterfalls of Ranchi, Betla National Park, and Sohrai mural art.", lat: 23.6102, lng: 85.2799, zoom: 7, districts: [] },
        { id: 22, name: "Chhattisgarh", code: "CG", type: "STATE", capital: "Raipur", description: "Bastar tribal brass Dhokra art, Chitrakote horseshoe falls, and ancient Sirpur Buddhist monuments.", lat: 21.2787, lng: 81.8661, zoom: 7, districts: [] },
        { id: 23, name: "Meghalaya", code: "ML", type: "STATE", capital: "Shillong", description: "Abode of Clouds, living root bridges of Cherrapunji, cleanest village Mawlynnong, and matrilineal Khasi traditions.", lat: 25.4670, lng: 91.3662, zoom: 8, districts: [] },
        { id: 24, name: "Manipur", code: "MN", type: "STATE", capital: "Imphal", description: "Jewel of India, Manipuri classical Raas Leela dance, Loktak floating Phumdis lake, and polo birthplace.", lat: 24.6637, lng: 93.9063, zoom: 8, districts: [] },
        { id: 25, name: "Nagaland", code: "NL", type: "STATE", capital: "Kohima", description: "Land of 16 warrior tribes, colorful Hornbill Festival, geometric Naga shawls, and rich oral traditions.", lat: 26.1584, lng: 94.5624, zoom: 8, districts: [] },
        { id: 26, name: "Tripura", code: "TR", type: "STATE", capital: "Agartala", description: "Ujjayanta royal palace, Unakoti rock-cut Shiva carvings, and intricate cane and bamboo handicrafts.", lat: 23.9408, lng: 91.9882, zoom: 8, districts: [] },
        { id: 27, name: "Mizoram", code: "MZ", type: "STATE", capital: "Aizawl", description: "Land of rolling blue hills, Cheraw bamboo dance, Chapchar Kut festival, and tranquil community spirit.", lat: 23.1645, lng: 92.9376, zoom: 8, districts: [] },
        { id: 28, name: "Arunachal Pradesh", code: "AR", type: "STATE", capital: "Itanagar", description: "Land of the Dawn-Lit Mountains, Tawang Buddhist monastery, Sela Pass, and vibrant indigenous tribes.", lat: 28.2180, lng: 94.7278, zoom: 7, districts: [] },
        { id: 29, name: "Sikkim", code: "SK", type: "STATE", capital: "Gangtok", description: "Guardian Mt. Kanchenjunga, Rumtek monastery, India's first 100% organic state, and alpine rhododendron valleys.", lat: 27.5330, lng: 88.5122, zoom: 8, districts: [] },
        // Union Territories
        { id: 30, name: "Delhi", code: "DL", type: "UT", capital: "New Delhi", description: "Historic imperial capital of seven empires, Red Fort, Qutub Minar, Chandni Chowk street food, and cultural melting pot.", lat: 28.6139, lng: 77.2090, zoom: 10, districts: [] },
        { id: 31, name: "Jammu and Kashmir", code: "JK", type: "UT", capital: "Srinagar", description: "Paradise on Earth, Dal Lake Shikaras, Mughal gardens, saffron fields of Pampore, and Pashmina weaving.", lat: 33.7782, lng: 76.5762, zoom: 7, districts: [] },
        { id: 32, name: "Andaman and Nicobar Islands", code: "AN", type: "UT", capital: "Port Blair", description: "Cellular Jail national memorial, turquoise coral reefs, virgin tropical beaches, and indigenous island tribes.", lat: 11.7401, lng: 92.6586, zoom: 7, districts: [] },
        { id: 33, name: "Chandigarh", code: "CH", type: "UT", capital: "Chandigarh", description: "The City Beautiful, planned by Le Corbusier, famous for Nek Chand's Rock Garden and Sukhna Lake.", lat: 30.7333, lng: 76.7794, zoom: 11, districts: [] },
        { id: 34, name: "Dadra and Nagar Haveli and Daman and Diu", code: "DN", type: "UT", capital: "Daman", description: "Coastal Portuguese fortresses, quiet palm beaches, and Warli indigenous tribal painting heritage.", lat: 20.4283, lng: 72.8397, zoom: 8, districts: [] },
        { id: 35, name: "Lakshadweep", code: "LD", type: "UT", capital: "Kavaratti", description: "Pristine coral atolls, coconut lagoons, scuba reefs, and warm islander seafaring culture.", lat: 10.5667, lng: 72.6417, zoom: 9, districts: [] },
        { id: 36, name: "Puducherry", code: "PY", type: "UT", capital: "Puducherry", description: "French Quarter with pastel colonial villas, seaside Promenade, Sri Aurobindo Ashram, and universal township Auroville.", lat: 11.9416, lng: 79.8083, zoom: 10, districts: [] }
    ],

    // Community / User-submitted culture stories (photos, videos, folklore)
    initialStories: [
        {
            id: 1,
            title: "The Living Root Bridges of Nohwet: Indigenous Bio-Engineering of Meghalaya",
            authorName: "Wanphrang Khongwir",
            stateName: "Meghalaya",
            districtName: "East Khasi Hills",
            category: "Hidden Gem",
            storyText: "Deep in the rainforests of Meghalaya, the indigenous Khasi tribe trains the aerial roots of Ficus elastica trees across roaring rivers to form living pedestrian bridges. Unlike concrete bridges that decay in moisture, these living root bridges grow stronger with time, lasting over 500 years! It is one of humanity's greatest examples of living in harmony with nature.",
            mediaType: "IMAGE",
            mediaUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            upvotes: 142,
            createdAt: "3 days ago"
        },
        {
            id: 2,
            title: "Rogan Art of Nirona: India's Rare 400-Year-Old Castor Oil Fabric Craft",
            authorName: "Rizwan Khatri",
            stateName: "Gujarat",
            districtName: "Kutch",
            category: "Folk Art & Dance",
            storyText: "Did you know only one family in the entire world in Nirona village still practices ancient Rogan art? Boiled castor oil is turned into a gelatinous colored paste, and using a thin 6-inch metal stylus with NO tracing on the fabric, the artisan paints breathtaking symmetrical Tree of Life tapestries purely by muscle memory.",
            mediaType: "IMAGE",
            mediaUrl: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
            upvotes: 98,
            createdAt: "5 days ago"
        },
        {
            id: 3,
            title: "Theyyam of Malabar: When Mortals Become Living Deities",
            authorName: "Aravind Nambiar",
            stateName: "Kerala",
            districtName: "Kannur",
            category: "Ancient Ritual",
            storyText: "During winter nights in northern Kerala sacred groves, ordinary men transform into Theyyams—living gods. Wearing 15-foot bamboo headdresses and burning fiery embers, they enter a deep spiritual trance and run through blazing pyres without getting burnt. It is one of humanity's most mesmerizing unbroken sacred performance traditions.",
            mediaType: "VIDEO",
            mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            upvotes: 215,
            createdAt: "1 week ago"
        },
        {
            id: 4,
            title: "The Secret Behind Chettinad's 18 Spices: Beyond the Mainstream Curries",
            authorName: "Meenakshi Sundaram",
            stateName: "Tamil Nadu",
            districtName: "Sivaganga",
            category: "Traditional Food",
            storyText: "Everyone talks about Chettinad chicken, but few know that authentic Nattukotai Chettiar cooking uses sun-dried sundakai berries, kalpasi (black stone flower), and marathi mokku ground fresh on granite ammikallu stones. The spice aroma alone can make an entire street hungry!",
            mediaType: "IMAGE",
            mediaUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            upvotes: 84,
            createdAt: "Yesterday"
        }
    ]
};
