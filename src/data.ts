export interface Group {
  category: string;
  words: string[];
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
  { category: "Palindromes", words: ["Level", "Radar", "Civic", "Rotor", "Kayak", "Madam", "Racecar", "Refer", "Reviver", "Rotator", "Deified"] },
  { category: "Brand names", words: ["Apple", "Shell", "Canon", "Dove", "Target", "Tide", "Delta", "Subway", "Puma", "Fox", "Chase", "Slack", "Twitch"] },
  { category: "Words to describe hair", words: ["Thin", "Curly", "Thick", "Wawy", "Straight", "Wonky", "Voluminous", "Damaged", "Shiny", "Dry", "Brittle", "Long", "Bouncy"] },
  { category: "Synonyms for caring", words: ["Kind", "Gentle", "Caring", "Considerate", "Warm", "Friendly", "Loving", "Dear", "Tender", "Attached", "Devoted", "Fond"] },
  { category: "Words containing 'nut'", words: ["Nutrition", "Minutes", "Comminuted", "Donuts", "Nutmeg", "Hognut", "Nutshell", "Breadnut", "Butternut", "Nutting"] },
  { category: "Words related to coffe", words: ["Berry", "Brew", "Pressure", "Washed", "Ferment", "Roast", "Grind", "Filter", "Extraction", "Dark", "Medium"] },
  { category: "Words related to golf", words: ["Drive", "Putt", "Aim", "Course", "Score", "Par", "Tee", "Hole", "Technique"] },
  { category: "Words related to berry", words: ["Huckle", "Boysen", "Blue", "Soap", "Dingle", "Cran", "Goose", "Straw", "Elder", "Cloud"] },
  { category: "Words related to apple", words: ["Tree", "Blossom", "Core", "Pie", "Cider", "Juice"] },
  { category: "Words related to fruit", words: ["Jack", "Star", "Bread", "Grape"] },
  { category: "Words related to ball", words: ["Basket", "Foot", "Cannon", "Paint", "Punch", "Puff", "Eye", "Gum", "Pin", "Soft", "Room"] },
  { category: "Words related to bottle", words: ["Water", "Glass", "Baby", "Wine", "Soda", "Beer", "Plastic"] },
  { category: "Words related to car", words: ["Racing", "Fast", "Driver", "Speed", "Engine", "Wheel"] },
  { category: "Words related to dog", words: ["Bark", "Puppy", "Pet", "Tail", "Bone", "Paw"] },
  { category: "Words related to cat", words: ["Fur", "Whisker", "Purr", "Claw"] },
  { category: "Words related to bird", words: ["Feather", "Wing", "Nest", "Beak"] },
  { category: "Words related to fish", words: ["Swim", "Fin", "Scales", "Gill", "Tank"] },
  { category: "Words related to pirates", words: ["Threaten", "Treasure", "Boarding", "Waters", "Bay", "Sword", "Eyepatch", "Plunder", "Hijack"] },
  { category: "Words related to farmers", words: ["Tractor", "Soil", "Land", "Plough", "Field", "Irrigation", "Seed", "Harvest", "Barn", "Crop"] },
];

export const getGameData = () => {
  const randomGroups = shuffle(data).slice(0, 4) as Group[];

  // Select four words per group, but create new instances as to not mutate the groups original word list
  const filteredGroups = randomGroups.map((g) => {
    return {
      words: shuffle(g.words).slice(0, 4) as string[],
      category: g.category,
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
