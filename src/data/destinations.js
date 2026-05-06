export const destinationCategories = [
  {
    category: "India",
    items: [
      { name: "North", path: "/north" },
      { name: "South", path: "/south" },
      { name: "East", path: "/east" },
      { name: "West", path: "/west" },
      { name: "Central", path: "/central" },
    ],
  },
  {
    category: "Sub Continent",
    items: [
      { name: "Nepal", path: "/nepal" },
      { name: "Bhutan", path: "/bhutan" },
      { name: "Sri Lanka", path: "/sri-lanka" },
    ],
  },
];

export const destinationsData = {
  north: {
    hero: {
      title: "North India",
      subtitle: "Journey through the land of Maharajas, ancient forts, and the magnificent Taj Mahal.",
      imageSrc: "/north-india.jpg"
    },
    images: [
      "/north-india1.jpg",
      "/north-india2.jpg"
    ],
    quickFacts: [
      { label: "Best Time To Visit", value: "October to March" },
      { label: "Key Cuisine", value: "Mughlai, Parathas, Chaat" },
      { label: "Primary Vibe", value: "Royal Heritage & Architecture" }
    ],
    highlights: [
      { icon: "Map", title: "Top Attractions", text: "The Taj Mahal, Amber Fort, and Varanasi Ghats." },
      { icon: "Utensils", title: "Local Cuisine", text: "Rich, aromatic curries and world-famous street food." },
      { icon: "Camera", title: "Photography", text: "Vibrant bazaars, ancient stepwells, and incredible monuments." },
      { icon: "Train", title: "Getting Around", text: "Extensive train networks linking all major historical sites." }
    ],
    description: [
      "North India is a tapestry of royal heritage, architectural wonders, and vibrant cultures. It is home to some of the world's most iconic landmarks, including the timeless Taj Mahal in Agra and the magnificent forts of Rajasthan.",
      "From the bustling lanes of Old Delhi where history echoes in every corner, to the spiritual ghats of Varanasi along the sacred Ganges, North India offers an immersive journey for the soul.",
      "Experience luxury redefined in former palaces turned heritage hotels, journey into the wild on tiger safaris in Ranthambore, and witness the captivating desert landscapes of the Thar Desert. Our curated tours to North India ensure an unforgettable encounter with the subcontinent's most legendary wonders."
    ],
    videoData: {
      title: "Highlights of the North",
      videoId: "IgTz0Qn2uE4",
      features: [
        {
          heading: "The Golden Triangle",
          description: "Explore the classic route connecting Delhi, Agra, and Jaipur. Witness the perfect introduction to India's chaotic charm, Mughal architecture, and Rajput grandeur."
        },
        {
          heading: "Spiritual Varanasi",
          description: "Sail along the Ganges at dawn and witness ancient rituals that have continued for millennia in one of the world's oldest continuously inhabited cities."
        },
        {
          heading: "Royal Rajasthan",
          description: "Wander through the blue city of Jodhpur, take a boat ride on Lake Pichola in Udaipur, and sleep in centuries-old forts under the desert sky."
        }
      ]
    }
  },
  south: {
    hero: {
      title: "South India",
      subtitle: "Discover lush backwaters, ancient temple towns, and the tranquil pace of the deep south.",
      imageSrc: "/south-india.jpg"
    },
    images: [
      "/south-india1.jpg",
      "/south-india2.jpg"
    ],
    quickFacts: [
      { label: "Best Time To Visit", value: "November to February" },
      { label: "Key Cuisine", value: "Dosas, Seafood, Coconut Curries" },
      { label: "Primary Vibe", value: "Tropical, Spiritual, Relaxing" }
    ],
    highlights: [
      { icon: "Map", title: "Top Attractions", text: "Kerala Backwaters, Hampi, and Meenakshi Temple." },
      { icon: "Utensils", title: "Local Cuisine", text: "Spicy coastal curries heavily featuring fresh coconut." },
      { icon: "Leaf", title: "Nature", text: "Lush tea plantations in Munnar and spice gardens." },
      { icon: "Heart", title: "Wellness", text: "The birthplace of authentic Ayurvedic treatments." }
    ],
    description: [
      "South India offers a serene contrast to the bustling north, defined by its tropical landscapes, towering Dravidian temples, and intricate waterways.",
      "Float along the palm-fringed backwaters of Kerala in a traditional houseboat, breathing in the scent of spices and lush green tea estates in the Western Ghats.",
      "Immerse yourself in the rich classical dance traditions, explore the ruins of Hampi, and savor the distinct, coconut-infused coastal cuisines. South India is an invitation to slow down and embrace the rhythm of nature."
    ],
    videoData: {
      title: "Highlights of the South",
      videoId: "_mED2I1_mUo",
      features: [
        {
          heading: "Kerala Backwaters",
          description: "Glide through the tranquil network of canals and lagoons on a private luxury houseboat, experiencing the unique ecosystem."
        },
        {
          heading: "Temple Architecture",
          description: "Marvel at the vividly colored, towering gopurams of Tamil Nadu's ancient temples, true masterclasses of Dravidian architecture."
        },
        {
          heading: "Hill Stations & Spices",
          description: "Retreat to the cool climes of Munnar or Coorg, wandering through misty tea plantations and fragrant cardamom forests."
        }
      ]
    }
  },
  east: {
    hero: {
      title: "East India",
      subtitle: "Explore tea gardens, colonial heritage, and untouched eastern frontiers.",
      imageSrc: "/east-india.jpg"
    },
    images: [
      "/east-india1.jpg",
      "/east-india2.jpg"
    ],
    quickFacts: [
      { label: "Best Time To Visit", value: "October to April" },
      { label: "Key Cuisine", value: "Bengali Sweets, Fish curry, Momos" },
      { label: "Primary Vibe", value: "Intellectual, Wild, Colonial" }
    ],
    highlights: [
      { icon: "Map", title: "Top Attractions", text: "Victoria Memorial, Kaziranga, Darjeeling Railway." },
      { icon: "Utensils", title: "Local Cuisine", text: "Distinct mustard oil curries and world-class sweets." },
      { icon: "Camera", title: "Wildlife", text: "One-horned rhinos and varied birdlife in eastern plains." },
      { icon: "Coffee", title: "Tea Estates", text: "The sprawling, pristine tea gardens of Assam and Darjeeling." }
    ],
    description: [
      "East India is a fascinating blend of British colonial history, deeply rooted tribal cultures, and dramatic landscapes stepping up into the Himalayas.",
      "From the bustling intellectual hub of Kolkata to the serene monasteries of Sikkim, the East presents an entirely different face of the subcontinent.",
      "Discover the rolling tea hills of Darjeeling, take a ride on the historic Himalayan Railway, and venture into lush national parks tracking the elusive one-horned rhinoceros."
    ],
    videoData: {
      title: "Highlights of the East",
      videoId: "O4-B6G2R9I8",
      features: [
        {
          heading: "Colonial Kolkata",
          description: "Walk through the former capital of British India, soaking in the grand architecture and vibrant art scene."
        },
        {
          heading: "Darjeeling Tea",
          description: "Sample the 'Champagne of Teas' directly from the misty mountain estates overlooking the Himalayas."
        },
        {
          heading: "Wildlife Safaris",
          description: "Explore Kaziranga National Park to witness rare wildlife in vast grassy floodplains."
        }
      ]
    }
  },
  west: {
    hero: {
      title: "West India",
      subtitle: "A land of stark deserts, vibrant coasts, and economic powerhouses.",
      imageSrc: "/west-india.jpg"
    },
    images: [
      "/west-india1.jpg",
      "/west-india2.jpg"
    ],
    quickFacts: [
      { label: "Best Time To Visit", value: "November to March" },
      { label: "Key Cuisine", value: "Gujarati Thali, Goan Seafood" },
      { label: "Primary Vibe", value: "Coastal Relaxation & Metro Buzz" }
    ],
    highlights: [
      { icon: "Map", title: "Top Attractions", text: "Mumbai's Marine Drive, Rann of Kutch, Goan beaches." },
      { icon: "Utensils", title: "Local Cuisine", text: "Incredible seafood and sweet & savory vegetarian thalis." },
      { icon: "Sun", title: "Beaches", text: "India's greatest coastline featuring soft sand and palm trees." },
      { icon: "Shopping", title: "Handicrafts", text: "World-renowned textiles and mirror work from Gujarat." }
    ],
    description: [
      "Western India stretches from the salt marshes of Gujarat to the sun-soaked beaches of Goa, anchored by the megacity of Mumbai.",
      "It is a region of dramatic contrasts, where ancient stepwells and Portuguese-infused coastal towns coexist with modern metropolises.",
      "Whether you are seeking the vibrant textile traditions of Kutch, the ultimate relaxation on the Konkan coast, or the energetic pulse of Bollywood, the West offers diverse and engaging experiences."
    ],
    videoData: {
      title: "Highlights of the West",
      videoId: "E7yJgKnt8D8",
      features: [
        {
          heading: "Maximum City",
          description: "Dive into the organized chaos of Mumbai, a city of dreamers, heritage architecture, and incredible street food."
        },
        {
          heading: "Goan Rhythms",
          description: "Relax on pristine beaches, explore centuries-old Portuguese churches, and enjoy the laid-back susegad lifestyle."
        },
        {
          heading: "Rann of Kutch",
          description: "Witness the surreal, endless white salt desert in Gujarat, especially beautiful under a full moon."
        }
      ]
    }
  },
  central: {
    hero: {
      title: "Central India",
      subtitle: "The wild heart of India, rich in ancient erotica and dense jungle safaris.",
      imageSrc: "/central-india.jpg"
    },
    images: [
      "/central-india1.jpg",
      "/central-india2.jpg"
    ],
    quickFacts: [
      { label: "Best Time To Visit", value: "October to April" },
      { label: "Key Cuisine", value: "Bhopali Meat Curries, Poha" },
      { label: "Primary Vibe", value: "Untamed Wilderness & History" }
    ],
    highlights: [
      { icon: "Map", title: "Top Attractions", text: "Khajuraho temples, Kanha National Park, Gwalior Fort." },
      { icon: "Camera", title: "Wildlife", text: "The greatest density of Bengal Tigers in the country." },
      { icon: "Users", title: "Tribal Culture", text: "Deeply rooted cultures with unique arts, beliefs, and markets." },
      { icon: "Landmark", title: "Heritage", text: "Intricate sand-stone temples and massive hilltop fortresses." }
    ],
    description: [
      "Often referred to as the 'Heart of India', Central India is geologically and historically profound, dominated by dense forests and tribal heritage.",
      "Here, you'll find the majestic Bengal Tiger roaming free in world-renowned national parks like Kanha and Bandhavgarh.",
      "Beyond the wildlife, discover the intricate, centuries-old erotic temple carvings of Khajuraho and the ancient rock shelters displaying the dawn of human life."
    ],
    videoData: {
      title: "Highlights of Central India",
      videoId: "8F8gV4l1Vxs",
      features: [
        {
          heading: "Tiger Safaris",
          description: "Embark on thrilling game drives in pristine habitats that inspired Rudyard Kipling's 'The Jungle Book'."
        },
        {
          heading: "Khajuraho Temples",
          description: "Marvel at the spectacular medieval Hindu and Jain temples adorned with incredibly detailed sculptures."
        },
        {
          heading: "Tribal Encounters",
          description: "Engage with indigenous communities, learning about their ancient art, culture, and deep connection to the forest."
        }
      ]
    }
  },
  nepal: {
    hero: {
      title: "Nepal",
      subtitle: "The spiritual sanctuary in the shadow of the world's highest peaks.",
      imageSrc: "/nepal.jpg"
    },
    images: [
      "/nepal1.jpg",
      "/nepal2.jpg"
    ],
    quickFacts: [
      { label: "Best Time To Visit", value: "Oct-Nov and Mar-May" },
      { label: "Key Cuisine", value: "Dal Bhat, Momos, Thukpa" },
      { label: "Primary Vibe", value: "Mountain Adventure & Spirituality" }
    ],
    highlights: [
      { icon: "Map", title: "Top Attractions", text: "Kathmandu Valley, Pokhara, Annapurna Circuit." },
      { icon: "Mountain", title: "Trekking", text: "Home to 8 of the 10 highest peaks in the world." },
      { icon: "Heart", title: "Spirituality", text: "The birthplace of Buddha and a massive hub for Hinduism." },
      { icon: "Camera", title: "Scenery", text: "Unmatched vistas of the Himalayas from almost anywhere." }
    ],
    description: [
      "Nestled entirely within the Himalayas, Nepal is a breathtakingly beautiful country where spirituality and adventure meet.",
      "Explore the chaotic medieval charm of Kathmandu and the serene, lake-reflected mountains of Pokhara.",
      "Whether you are taking a scenic flight past Mount Everest, trekking the Annapurna circuit, or finding peace at Buddha's birthplace in Lumbini, Nepal elevates the soul."
    ],
    videoData: {
      title: "Highlights of Nepal",
      videoId: "bU40YyWw778",
      features: [
        {
          heading: "Kathmandu Valley",
          description: "Wander through durbar squares filled with pagoda-style temples, intricate wood carvings, and vibrant prayer flags."
        },
        {
          heading: "Himalayan Vistas",
          description: "Experience the sheer scale of the greatest mountain range on earth, accessible by foot or scenic flight."
        },
        {
          heading: "Jungle Safaris",
          description: "Visit Chitwan National Park in the southern plains to spot rhinos and occasionally, the elusive Bengal tiger."
        }
      ]
    }
  },
  bhutan: {
    hero: {
      title: "Bhutan",
      subtitle: "The last great Himalayan kingdom, measuring success by Gross National Happiness.",
      imageSrc: "/bhutan.jpg"
    },
    images: [
      "/bhutan1.jpg",
      "/bhutan2.jpg"
    ],
    quickFacts: [
      { label: "Best Time To Visit", value: "Oct-Dec and Mar-May" },
      { label: "Key Cuisine", value: "Ema Datshi, Red Rice" },
      { label: "Primary Vibe", value: "Peaceful, Exclusive, Pristine" }
    ],
    highlights: [
      { icon: "Map", title: "Top Attractions", text: "Tiger's Nest, Punakha Dzong, Thimphu." },
      { icon: "Shield", title: "Culture", text: "Rich, undisturbed Buddhist traditions influencing all life." },
      { icon: "Leaf", title: "Ecotourism", text: "The only carbon-negative country in the entire world." },
      { icon: "Heart", title: "Festivals", text: "Colorful Tsechus featuring masked dances and incredible music." }
    ],
    description: [
      "Bhutan remains one of the world's most exclusive and unspoiled destinations, intentionally preserved from mass tourism.",
      "It is a country where deeply ingrained Buddhist traditions guide modern life, and dzongs (fortress monasteries) dominate the mountainous landscapes.",
      "Hike to the gravity-defying Tiger's Nest monastery, witness colorful religious festivals, and experience the profound peace of a nation deeply connected to its heritage."
    ],
    videoData: {
      title: "Highlights of Bhutan",
      videoId: "Hw2yAObM9-A",
      features: [
        {
          heading: "Tiger's Nest",
          description: "Trek to the iconic Taktsang Palphug Monastery, clinging to a sheer cliff 900 meters above the Paro Valley."
        },
        {
          heading: "Majestic Dzongs",
          description: "Visit grand fortresses like Punakha Dzong, architectural marvels serving as religious and administrative centers."
        },
        {
          heading: "Pristine Nature",
          description: "Breathe the cleanest mountain air while hiking through untouched valleys speckled with rhododendrons."
        }
      ]
    }
  },
  "sri-lanka": {
    hero: {
      title: "Sri Lanka",
      subtitle: "The teardrop of India, offering a condensed paradise of ruins, beaches, and tea.",
      imageSrc: "/sri-lanka.jpg"
    },
    images: [
      "/sri-lanka-1.jpg",
      "/sri-lanka-2.jpg",
    ],
    quickFacts: [
      { label: "Best Time To Visit", value: "Dec-Mar (West), May-Sep (East)" },
      { label: "Key Cuisine", value: "Rice and Curry, Hoppers" },
      { label: "Primary Vibe", value: "Tropical, Compact, Diverse" }
    ],
    highlights: [
      { icon: "Map", title: "Top Attractions", text: "Sigiriya Rock, Ella, Yala National Park." },
      { icon: "Sun", title: "Beaches", text: "Stunning golden coasts spanning the entire island border." },
      { icon: "Coffee", title: "Tea Plantations", text: "Beautiful high-altitude tea-growing regions in Nuwara Eliya." },
      { icon: "Camera", title: "Wildlife", text: "One of the best spots to view leopards and wild elephants." }
    ],
    description: [
      "Sri Lanka is an incredibly diverse island packing an astronomical variety of experiences into a small footprint.",
      "You can summit historic rock fortresses, watch wild elephants roam, and relax on golden beaches—all in a matter of days.",
      "With its remarkably spicy cuisine, deep Buddhist roots, and incredibly welcoming people, Sri Lanka is the ultimate tropical escape."
    ],
    videoData: {
      title: "Highlights of Sri Lanka",
      videoId: "D_x5tXz3r8c",
      features: [
        {
          heading: "Cultural Triangle",
          description: "Explore the ancient ruins of Polonnaruwa, the sacred city of Kandy, and the imposing Sigiriya Rock Fortress."
        },
        {
          heading: "Coastal Charm",
          description: "Unwind on the southern palm-fringed shores, perfect for surfing, whale watching, or simple relaxation."
        },
        {
          heading: "Tea Country",
          description: "Take one of the world's most scenic train rides through the emerald hills of Nuwara Eliya."
        }
      ]
    }
  },
  india: {
    hero: {
      title: "India",
      subtitle: "A sub-continent of diversity, heritage, and timeless beauty.",
      imageSrc: "/north-india.jpg"
    },
    images: [
      "/tours/golden-triangle.jpg",
      "/tours/royal-rajasthan.jpg"
    ],
    quickFacts: [
      { label: "Regions", value: "North, South, East, West, Central" },
      { label: "Culture", value: "Vibrant & Diverse" },
      { label: "Experience", value: "Luxury & Heritage" }
    ],
    highlights: [
      { icon: "Map", title: "Cultural Depth", text: "From Himalayan foothills to tropical shores." },
      { icon: "Utensils", title: "Cuisine", text: "A world of flavors and regional specialties." },
      { icon: "Camera", title: "Architecture", text: "Forts, palaces, and temples beyond imagination." },
      { icon: "Heart", title: "Spirituality", text: "Ancient traditions and soul-stirring rituals." }
    ],
    description: [
      "India is not just a destination; it is an experience that transforms you. From the snow-capped peaks of the Himalayas to the sun-drenched beaches of the South, every corner of this vast land tells a unique story.",
      "Explore the royal grandeur of Rajasthan, the spiritual serenity of the Ganges, the lush backwaters of Kerala, and the untamed wilderness of central India's tiger reserves.",
      "Our curated journeys invite you to discover India's profound history, vibrant festivals, and unparalleled hospitality in absolute luxury."
    ],
    videoData: {
      title: "The Spirit of India",
      videoId: "G3-v4f_Wpbc",
      features: [
        {
          heading: "Timeless Heritage",
          description: "Witness the architectural marvels that have stood for centuries, each a testament to India's glorious past."
        },
        {
          heading: "Natural Wonders",
          description: "From desert sands to emerald tea gardens, experience a landscape as diverse as its people."
        },
        {
          heading: "Modern Luxury",
          description: "Stay in former palaces and world-class retreats that offer the pinnacle of contemporary comfort."
        }
      ]
    }
  },
  subcontinent: {
    hero: {
      title: "Nepal, Bhutan & Sri Lanka",
      subtitle: "Himalayan peaks, serene monasteries, and tropical island bliss.",
      imageSrc: "/nepal.jpg"
    },
    images: [
      "/tours/classical-nepal.jpg",
      "/tours/sri-lanka.jpg"
    ],
    quickFacts: [
      { label: "Destinations", value: "Nepal, Bhutan, Sri Lanka" },
      { label: "Vibe", value: "Pristine & Spiritual" },
      { label: "Landscape", value: "Mountains to Oceans" }
    ],
    highlights: [
      { icon: "Mountain", title: "Himalayan Heights", text: "The majestic peaks of Nepal and Bhutan." },
      { icon: "Sun", title: "Island Paradise", text: "The pristine beaches and tea hills of Sri Lanka." },
      { icon: "Shield", title: "Hidden Kingdoms", text: "Undisturbed traditions and exclusive cultures." },
      { icon: "Leaf", title: "Natural Serenity", text: "Breathtaking landscapes and spiritual sanctuaries." }
    ],
    description: [
      "Beyond India's borders lie some of the world's most enchanting destinations. Nepal, Bhutan, and Sri Lanka offer distinct experiences bound by a shared sense of spirituality and natural beauty.",
      "In Nepal, witness the scale of the world's highest mountains. In Bhutan, the last great Himalayan kingdom, discover a culture where happiness is the ultimate measure of success. In Sri Lanka, explore ancient ruins and lush tea estates fringed by golden sands.",
      "Whether you seek adventure, peace, or a deep connection with nature, these neighboring gems provide a perfect extension or a standalone journey of discovery."
    ],
    videoData: {
      title: "Gems of the Subcontinent",
      videoId: "m-6pS6M-r0w",
      features: [
        {
          heading: "Spiritual Sanctuaries",
          description: "Visit ancient monasteries and sacred sites where time seems to stand still."
        },
        {
          heading: "Untouched Nature",
          description: "Explore pristine valleys and emerald hills far removed from the modern world."
        },
        {
          heading: "Island Treasures",
          description: "Unwind on the tropical shores of Sri Lanka, a condensed paradise of ruins and wildlife."
        }
      ]
    }
  }
};
