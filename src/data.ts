import { Home, Tent, TreePine } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Bishnupur Jungle Camp",
  parentCompany: "Total Travellers",
  tagline: "A travel agency for travellers, by travellers!",
  description: "A rustic nature camp and homestay promoting sustainable local tourism. Experience authentic village hospitality in the historic heart of Mallabhum.",
  location: "Bishnupur, Bankura, West Bengal",
  contact: "+91 90380 50239",
  altContact: "+91 91633 56932",
  email: "bishnupurjunglecamp@gmail.com",
  contactNote: "Advance booking via WhatsApp preferred",
  mapLink: "https://maps.google.com/?cid=2744217975290444198&entry=gps",
  address: "Ancient British Air Base Road, Basudebpur Forest Area, Joypur Forest, Bankura District, West Bengal, India. PIN: 722122",
  addressNote: "Nested deep within the eco-preserved Joypur Forest area, accessible via the historical British Air Base runway passage road.",
  bookingHubs: [
    {
      name: "North-East Kolkata Hub",
      address: "AF - 146 Majherpara, Krishnapur, Keshtopur, Kolkata, West Bengal, India",
      pin: "700102"
    },
    {
      name: "Parent Headquarters / South-West Kolkata Hub",
      address: "24, Fakir Para Road, Behala, Kolkata, West Bengal, India",
      pin: "700034"
    }
  ]
};

export const ACCOMMODATIONS = [
  {
    id: 'mud-house',
    title: 'Mud House',
    available: 1,
    icon: Home,
    features: ['Authentic rustic experience', 'Basic & clean amenities', 'Ideal for families'],
    pricing: [
      { occupancy: 'Double Sharing', price: '₹5,000' },
      { occupancy: 'Triple Sharing', price: '₹7,000', note: '1 King Bed + 1 Twin Bed' },
      { occupancy: 'Quadruple Sharing', price: '₹8,000', note: '1 King Bed + 1 Twin Bed' },
    ]
  },
  {
    id: 'swiss-tent',
    title: 'Swiss Tent',
    available: 1,
    icon: Tent,
    features: ['Attached toilet with geyser', 'King Bed + extra bed', 'Spacious interiors'],
    pricing: [
      { occupancy: 'Double Sharing', price: '₹4,000' },
      { occupancy: 'Triple Sharing', price: '₹6,000', note: '1 King Bed + 1 Twin Bed' },
      { occupancy: 'Quadruple Sharing', price: '₹7,000', note: '1 King Bed + 1 Twin Bed' },
    ]
  },
  {
    id: 'adventure-tents',
    title: 'Adventure Tents',
    available: 6,
    icon: TreePine,
    features: ['King mattress inside', '2 common washrooms', 'Immersive nature experience'],
    pricing: [
      { occupancy: 'Double Sharing', price: '₹3,000' },
      { occupancy: 'Triple Sharing', price: '₹4,500' },
      { occupancy: 'Quadruple Sharing', price: '₹6,000' },
    ]
  }
];

export const HOUSE_RULES = [
  "Check-in Window: 12 PM - 6 PM | Check-out Window: 6 AM - 10 AM",
  "No loud music permitted to preserve tranquility.",
  "No leaving the premises after dark for safety.",
  "No washing clothes on-site.",
  "Room service is restricted only to elders or differently-abled guests.",
  "Please respect the local village culture and residents.",
  "Damage to property belongings or structures will be billed to the final statement."
];

export const POLICIES = [
  "50% advance payment required for confirmation (strictly non-refundable).",
  "Remaining 50% balance must be paid immediately at the time of check-in.",
  "Rescheduling allowed up to 16 days before check-in (valid for 6 months, subject to availability).",
  "Cancellations on or after check-in date are invalid; 100% booking amount due.",
  "Inclusions: Room stay + 4 meals (Lunch, Evening Snacks, Dinner, Breakfast).",
  "Exclusions: Extra food items, outside services, or transportation.",
  "Managed securely by Total Travellers."
];

export const ABOUT_US = {
  heading: "Authentic Rural Hospitality",
  subheading: "A True Nature Camp & Homestay Experience",
  content: [
    "Welcome to Bishnupur Jungle Camp. We want to be completely transparent with our guests: this is NOT a luxury resort. Instead, we offer an authentic, rustic nature camp and homestay providing clean, basic, and essential amenities for those seeking a true escape.",
    "Our camp directly supports the local village economy and is managed entirely by passionate local staff dedicated to providing heartfelt rural hospitality. This space is intentionally designed for travelers looking to unplug from the modern world, immerse themselves in local culture, and enjoy stargazing in an undisturbed natural environment."
  ]
};

export const TOTAL_TRAVELLERS = {
  name: "Total Travellers",
  established: "2018",
  base: "Behala, Kolkata, West Bengal",
  identity: "A travel consulting company built for travellers, by travellers.",
  stats: [
    { value: "50,000+", label: "Travelers Assisted" },
    { value: "20,000+", label: "Rooms Booked" },
    { value: "1,000+", label: "Custom Tours" }
  ],
  sections: {
    weAre: [
      "Total Travellers is a travel consulting company based out of Behala, Kolkata, owning multiple homestays in North Bengal and Sikkim and associating with hundreds of homestays/hotels/resorts in all parts of Himalayan regions in India. We are an organization working since 2018 in various tour and travel packages and provided assistance to 50000+ guests, booked 20000+ rooms and arranged 1000+ tour packages since we started. Our commitment to serve our guests has been the main USP behind our proud journey for 5+ years so far and we wish to continue with the same for next decades and grow as one of the most leading travel consulting companies in India.",
      "So, if you are a person in love with Himalayas and all the natural surroundings around you, if you respect local people and their culture and cuisine, we welcome you all to our homestays, plan your trip with us and be our guests to give us a chance to serve you and be a proud organizer of your trip and try our level best to make it a memorable one."
    ],
    ourStory: [
      "We started as a group of travellers, whose love for exploring new places and people, cultures and cuisines, have taken them all over India and nearly a dozen countries worldwide. The wealth of experience gathered while planning and executing these trips, inspired us to come together and create a travel agency. That is how Total Travellers was born - a travel agency for travellers, by travellers!"
    ],
    ourCommitments: [
      "We consider all our guests to be a part of the Total Travellers tribe. This means we design and execute your trip, as if it was our own. You will experience this connection from the very first discussion to the very end of the trip. Our dedicated team is always at hand to answer your queries and take care of any issues before, during and after the trip. We believe that there is no greater reward in this business than a satisfied guest. At the end of the day, if you are happy, we are happy."
    ]
  },
  story: "Founded by a tightly-knit group of passionate, hardcore travelers whose personal journeys spanned across all of India and nearly a dozen countries worldwide. Frustrated by generic tourism packages, they gathered their collective wealth of real-world route planning, local community sourcing, and execution experience to launch an authentic, traveler-first consulting agency.",
  commitments: [
    "The Tribe Mentality: Clients are treated as members of the 'Total Travellers Tribe.'",
    "End-to-End Care: Dedicated support system provides active logistics backup.",
    "Community & Cultural Respect: Deep respect for local indigenous populations and environmental sustainability."
  ]
};

export const TESTIMONIALS = [
  {
    text: "Staying at the Bishnupur Jungle Camp feels like a return to one's roots, but with comfort. The eco-friendly mud cottages and tents blend perfectly with the surroundings, offering a rustic yet cozy charm.",
    author: "Souvik Chatterjee",
    role: "Guest"
  },
  {
    text: "We enjoyed a lot in the serenity & lap of nature here! Specially the foods are of great quality. We recommend all to taste the “shalpata chicken” kebab dish. The camp is in midst of a dense forest.",
    author: "Shubhamoy Mondal",
    role: "Local Guide"
  },
  {
    text: "I recently had the pleasure of staying during the monsoon season, and it was truly an unforgettable experience! The jungle was absolutely breathtaking, with the lush green foliage creating a serene and tranquil escape.",
    author: "Tanusri Chatterjee",
    role: "Local Guide"
  },
  {
    text: "The place is super good with greenery and the caretaker is so hardworking, they were always ready to delight their guest. We got a very nice meal! Excellent hospitality.",
    author: "Mimo Biswas",
    role: "Guest"
  },
  {
    text: "Excellent... Camp's location, food, behavior, decoration all are top-notch. Specially thanks to the manager who is so humble and polite. I would give more than 5 stars if there was an option.",
    author: "Saikat Das",
    role: "Guest"
  }
];

export const ATTRACTIONS = [
  {
    name: "Rasmancha",
    year: "1600 AD",
    description: "Unparalleled pyramidal brick temple with triple circumambulatory galleries and lotus motifs."
  },
  {
    name: "Mrinmoyee Temple",
    year: "997 AD",
    description: "Oldest temple in Bishnupur housing Bengal's oldest continuous Durga Puja legacy (1,000+ years), marked by a traditional cannon fire ritual on Mahastami."
  },
  {
    name: "Jorbangla Temple",
    year: "1655 AD",
    description: "Renowned twin-hut architectural style (\"Do Chala\") featuring panels depicting scenes from the Ramayana, Mahabharata, and Krishna Lila."
  },
  {
    name: "Shyam Rai Temple",
    year: "1643 AD",
    description: "Five-pinnacled \"Panch-chura\" structure hosting elaborate Raschakra terracotta carvings."
  },
  {
    name: "Gar Darja",
    year: "",
    description: "Fortified historical gateways built with secret soldier chambers for royal defense."
  },
  {
    name: "Madanmohan Temple",
    year: "1694 AD",
    description: "An active, single-pinnacled masterpiece showcasing the finest terracotta craftsmanship."
  },
  {
    name: "Jore Shreni Temple / Poramatir Haat",
    year: "",
    description: "A complex of three distinct single-towered (Eka-Ratna) laterite stone temples."
  },
  {
    name: "Archaeological Museum",
    year: "",
    description: "Acharya Yogesh Chandra Purakirti Bhawan, featuring 10th-12th century stone sculptures and over 5,000 rare manuscripts."
  },
  {
    name: "Lalbandh",
    year: "",
    description: "One of seven eco-defense and water-source lakes, famously tied to the history of the Persian dancer Lalbai."
  },
  {
    name: "Sareswar & Saileswar Temples",
    year: "Dihar, 8km",
    description: "Twin laterite temples honoring Lord Shiva, built in the classic Oriya Deul style."
  }
];
