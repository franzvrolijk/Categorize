export interface Group {
  category: string;
  words: string[];
  color?: string;
}

const data: Group[] = [
  { category: "Shades of dark grey", words: ["Midnight", "Panther", "Ink", "Raven", "Obsidian", "Coal", "Jet", "Onyx", "Charcoal", "Soot"] },
  { category: "Shades of pink", words: ["Rose", "Coral", "Flamingo", "Blush", "Bubblegum", "Magenta", "Fuchsia", "Salmon", "Raspberry"] },
  { category: "Shades of green", words: ["Emerald", "Jade", "Olive", "Lime", "Pea", "Moss", "Pine"] },
  { category: "Shades of blue", words: ["Azure", "Sapphire", "Sky", "Cobalt", "Ocean", "Navy", "Aqua"] },
  { category: "Shades of white", words: ["Ivory", "Eggshell", "Snow", "Cotton", "Linen", "Pearl", "Porcelain", "Chalk", "Coconut", "Marshmallow"] },
  { category: "Animal groups", words: ["Pride", "Murder", "School", "Pack", "Flock", "Colony", "Herd", "Swarm", "Troop", "Pod", "Gaggle", "Parliament"] },
  { category: "Programming languages", words: ["Python", "Ruby", "Swift", "Go", "Rust", "Basic"] },
  { category: "Types of tea", words: ["Green", "Black", "Oolong", "White", "Herbal", "Chai", "Matcha", "Jasmine"] },
  { category: "Parts of a tree", words: ["Trunk", "Branch", "Root", "Bark", "Twig", "Leaf", "Sap", "Crown"] },
  { category: "Words you can put 'Horse' in front of", words: ["Power", "Shoe", "Race", "Back", "Radish", "Play"] },
  { category: "Words you can put 'Sun' in front of", words: ["Flower", "Screen", "Set", "Rise", "Burn", "Glasses", "Spot", "Beam", "Bath", "Day"] },
  { category: "Words you can put 'Moon' in front of", words: ["Light", "Walk", "Shine", "Phase", "Landing"] },
  { category: "Words you can put 'Snow' in front of", words: ["Ball", "Flake", "Man", "Storm", "Plow", "Cone", "Mobile"] },
  { category: "Words you can put 'Star' in front of", words: ["Fish", "Board", "Ship", "Dust", "Burst", "Gaze", "Fruit"] },
  { category: "Words you can put 'Heart' in front of", words: ["Beat", "Break", "Ache", "Felt", "Sick", "Less"] },
  { category: "Words you can put 'Fire' in front of", words: ["Works", "Place", "Fly", "Arm", "Proof", "Fighter", "Wood", "Truck"] },
  { category: "Words you can put 'Rain' in front of", words: ["Bow", "Coat", "Drop", "Forest", "Fall", "Check", "Maker"] },
  { category: "Words you can put 'Book' in front of", words: ["Keeper", "Mark", "Worm", "Case", "Shelf", "Store", "Club"] },
  { category: "Words you can put 'Eye' in front of", words: ["Sight", "Shadow", "Liner", "Lash", "Brow", "Witness", "Catcher", "Opener"] },
  { category: "Palindromes", words: ["Radar", "Civic", "Rotor", "Kayak", "Madam", "Racecar", "Refer", "Reviver", "Rotator", "Deified"] },
  { category: "Brand names", words: ["Apple", "Shell", "Canon", "Dove", "Target", "Tide", "Delta", "Subway", "Puma", "Fox", "Chase", "Slack", "Twitch"] },
  { category: "Words to describe hair", words: ["Thin", "Curly", "Thick", "Wawy", "Straight", "Wonky", "Voluminous", "Damaged", "Shiny", "Dry", "Brittle", "Long", "Bouncy"] },
  { category: "Synonyms for caring", words: ["Kind", "Gentle", "Considerate", "Warm", "Friendly", "Loving", "Dear", "Tender", "Attached", "Devoted", "Fond"] },
  { category: "Words containing 'nut'", words: ["Nutrition", "Minutes", "Comminuted", "Donuts", "Nutmeg", "Hognut", "Nutshell", "Breadnut", "Butternut", "Nutting"] },
  { category: "Words related to coffe", words: ["Berry", "Brew", "Roast", "Grind", "Filter", "Extraction", "Dark", "Medium"] },
  { category: "Words related to golf", words: ["Drive", "Putt", "Aim", "Course", "Score", "Par", "Tee", "Hole", "Technique"] },
  { category: "Words related to berry", words: ["Huckle", "Boysen", "Blue", "Soap", "Dingle", "Cran", "Goose", "Straw", "Elder", "Cloud"] },
  { category: "Words related to apple", words: ["Tree", "Blossom", "Core", "Pie", "Cider", "Juice"] },
  { category: "Words related to fruit", words: ["Jack", "Star", "Bread", "Grape"] },
  { category: "Words related to ball", words: ["Basket", "Foot", "Cannon", "Paint", "Punch", "Puff", "Eye", "Gum", "Pin", "Soft", "Room"] },
  { category: "Words related to bottle", words: ["Water", "Glass", "Baby", "Wine", "Soda", "Beer", "Plastic"] },
  { category: "Words related to car", words: ["Racing", "Fast", "Driver", "Speed", "Engine", "Wheel"] },
  { category: "Words related to dog", words: ["Puppy", "Pet", "Bone", "Paw"] },
  { category: "Words related to bird", words: ["Feather", "Wing", "Nest", "Beak"] },
  { category: "Words related to fish", words: ["Swim", "Fin", "Scales", "Gill", "Tank"] },
  { category: "Words related to pirates", words: ["Threaten", "Treasure", "Boarding", "Waters", "Bay", "Sword", "Eyepatch", "Plunder", "Hijack"] },
  { category: "Words related to nefarious", words: ["Wicked", "Villainous", "Sinister", "Malevolent"] },
  { category: "Words related to beautiful", words: ["Gorgeous", "Stunning", "Lovely", "Exquisite", "Breathtaking", "Attractive", "Mesmerizing", "Ravishing", "Enchanting"] },
  { category: "Words related to smart", words: ["Intelligent", "Clever", "Wise", "Brilliant", "Sharp", "Astute", "Savvy", "Cognitive"] },
  { category: "Words related to funny", words: ["Humorous", "Amusing", "Comical", "Witty", "Lighthearted", "Jocular", "Entertaining", "Hilarious", "Whimsical", "Laughable"] },
  { category: "Words related to scary", words: ["Frightening", "Terrifying", "Spooky", "Chilling", "Creepy", "Eerie", "Horrifying", "Alarming", "Petrifying"] },
  { category: "Words related to calm", words: ["Tranquil", "Peaceful", "Serene", "Relaxed", "Untroubled", "Placid", "Soothing", "Quiet", "Still", "Balanced"] },
  { category: "Words related to big", words: ["Large", "Huge", "Gigantic", "Massive", "Enormous", "Immense", "Colossal", "Vast", "Mammoth", "Tremendous"] },
  { category: "Words related to small", words: ["Tiny", "Little", "Miniature", "Petite", "Compact", "Minuscule", "Diminutive", "Wee", "Microscopic", "Lilliputian"] },
  { category: "Words related to extravagant", words: ["Lavish", "Opulent", "Sumptuous", "Luxurious", "Grandiose", "Elegant", "Decadent", "Plush", "Ostentatious", "Swanky"] },
  { category: "Words related to nostalgic", words: ["Sentimental", "Yearning", "Longing", "Wistful", "Reminiscent", "Melancholic", "Bittersweet", "Heartfelt", "Pensive", "Lingering"] },
  { category: "Words related to intriguing", words: ["Fascinating", "Engaging", "Compelling", "Provocative", "Mystifying", "Curious", "Entrancing", "Enthralling"] },
  { category: "Words related to resilient", words: ["Tough", "Durable", "Robust", "Sturdy", "Hardy", "Tenacious", "Enduring", "Unyielding", "Adaptable", "Indomitable"] },
  { category: "Words related to vibrant", words: ["Colorful", "Dynamic", "Lively", "Energetic", "Vivid", "Radiant", "Thriving", "Exuberant", "Animated", "Pulsating"] },
  { category: "Words related to mysterious", words: ["Enigmatic", "Cryptic", "Inscrutable", "Puzzling", "Uncanny", "Ambiguous", "Evasive", "Obscure", "Perplexing", "Arcane"] },
  { category: "Words related to gloomy", words: ["Melancholy", "Somber", "Dreary", "Despondent", "Sullen", "Dismal", "Morose", "Forlorn", "Depressed"] },
  { category: "Words related to devious", words: ["Sly", "Crafty", "Cunning", "Wily", "Guileful", "Tricky", "Shrewd", "Artful", "Insidious"] },
  { category: "Espionage", words: ["Bug", "Cipher", "Tail", "Mole", "Decoy", "Microdot", "Surveillance", "Intercept", "Covert", "Espionage"] },
  { category: "Underwater Exploration", words: ["Sonar", "Submersible", "Aqualung", "Deep-sea", "Pressure", "Marine", "Corals", "Dive", "Aquatic"] },
  { category: "Forensic Science", words: ["DNA", "Fingerprint", "Autopsy", "Ballistics", "Trace", "Evidence", "Crime Scene", "Toxin"] },
  { category: "Astrophysics Concepts", words: ["Quasar", "Neutron Star", "Black Hole", "Cosmology", "Redshift", "Supernova", "Dark Matter", "Pulsar"] },
  { category: "Urban Exploration", words: ["Abandoned", "Graffiti", "Catacombs", "Rooftop", "Tunnels", "Decay", "Exploration", "Adventure", "Subterranean", "Forgotten"] },
  { category: "Culinary Techniques", words: ["Sous Vide", "Deglaze", "Emulsify", "Infusion", "Julienne", "Temper", "Poach", "Sear"] },
  { category: "Art Restoration", words: ["Conservation", "Preservation", "Retouching", "Cleaning", "Revarnishing", "Patina", "Authenticity", "Artifacts", "Restorer"] },
  { category: "Cryptocurrency Terms", words: ["Blockchain", "Bitcoin", "Ethereum", "Wallet", "Mining", "Decentralized", "Transaction", "Cryptographic", "Token"] },
  { category: "Mythical Creatures", words: ["Griffin", "Kelpie", "Sphinx", "Chimera", "Phoenix", "Banshee", "Kraken", "Pegasus", "Centaur", "Yeti"] },
  { category: "Mythical Realms", words: ["Avalon", "Narnia", "Valhalla", "Atlantis", "Shangri-La", "El Dorado", "Neverland", "Olympus", "Midgard"] },
  { category: "Kitchen Utensils", words: ["Spatula", "Whisk", "Colander", "Peeler", "Cup", "Tongs", "Bowl", "Grater", "Masher"] },
  { category: "Outdoor Activities", words: ["Hiking", "Camping", "Fishing", "Cycling", "Picnicking", "Kayaking", "Gardening", "Running", "Swimming", "Birdwatching"] },
  { category: "Tools", words: ["Hammer", "Level", "Tape", "Drill", "Saw", "Knife"] },
  { category: "Pets", words: ["Leash", "Catnip", "Bed", "Litter", "Collar", "Brush", "Toys", "Treats"] },
  { category: "Bakery", words: ["Croissant", "Baguette", "Muffin", "Cupcake", "Sourdough", "Pastry", "Cinnamon", "Pretzel", "Eclair", "Biscotti"] },
  { category: "Office", words: ["Desk", "Chair", "Cabinet", "Bookshelf", "Conference", "Printer", "Reception"] },
  { category: "Laundry", words: ["Detergent", "Softener", "Iron", "Clothespins", "Sheets", "Stain", "Rack"] },
  { category: "Words related to time", words: ["Late", "Early", "Soon", "Past", "Before", "After", "Now", "Future"] },
  { category: "Types of sharks", words: ["Great White", "Hammerhead", "Tiger", "Bull", "Whale", "Mako", "Nurse", "Goblin"] },
  { category: "Types of car paint", words: ["Metallic", "Matte", "Gloss", "Satin", "Chrome", "Candy", "Clearcoat"] },
];

const colors = [
  "#348AA7", // Dark Pastel Blue
  "#5DD39E", // Dark Pastel Green
  "#D9598C", // Dark Pastel Red
  "#B18F6A", // Dark Pastel Brown
  "#7768AE", // Dark Pastel Purple
  "#6A0573", // Dark Pastel Violet
  "#83A598", // Dark Pastel Turquoise
  "#A05773", // Dark Pastel Pink
  "#5F9E6E", // Dark Pastel Mint
  "#BC5D2E", // Dark Pastel Amber
];

export const getGameData = () => {
  const randomGroups = shuffle(data).slice(0, 4) as Group[];

  // Select four words per group, but create new instances as to not mutate the groups original word list
  const filteredGroups = randomGroups.map((g, i) => {
    return {
      words: shuffle(g.words).slice(0, 4) as string[],
      category: g.category,
      color: colors[i],
    };
  });

  return filteredGroups;
};

export function shuffle(array: unknown[]) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
