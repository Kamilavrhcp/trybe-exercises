const pokemons = [
  {
    id: 25,
    name: "Pikachu",
    type: "Electric",
    averageWeight: {
      value: 6.0,
      measurementUnit: "kg",
    },
    image: "https:cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
    moreInfo: "https:bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",
  },
  {
    id: 4,
    name: "Charmander",
    type: "Fire",
    averageWeight: {
      value: 8.5,
      measurementUnit: "kg",
    },
    image: "https:cdn.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
    moreInfo: "https:bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",
  },
  {
    id: 10,
    name: "Caterpie",
    type: "Bug",
    averageWeight: {
      value: 2.9,
      measurementUnit: "kg",
    },
    image: "https:cdn.bulbagarden.net/upload/8/83/Spr_5b_010.png",
    moreInfo: "https:bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)",
  },
  {
    id: 23,
    name: "Ekans",
    type: "Poison",
    averageWeight: {
      value: 6.9,
      measurementUnit: "kg",
    },
    image: "https:cdn.bulbagarden.net/upload/1/18/Spr_5b_023.png",
    moreInfo: "https:bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)",
  },
  {
    id: 65,
    name: "Alakazam",
    type: "Psychic",
    averageWeight: {
      value: 48.0,
      measurementUnit: "kg",
    },
    image: "https:cdn.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
    moreInfo: "https:bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)",
  },
  {
    id: 151,
    name: "Mew",
    type: "Psychic",
    averageWeight: {
      value: 4.0,
      measurementUnit: "kg",
    },
    image: "https:cdn.bulbagarden.net/upload/4/43/Spr_5b_151.png",
    moreInfo: "https:bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)",
  },
  {
    id: 78,
    name: "Rapidash",
    type: "Fire",
    averageWeight: {
      value: 95.0,
      measurementUnit: "kg",
    },
    image: "https:cdn.bulbagarden.net/upload/5/58/Spr_5b_078.png",
    moreInfo: "https:bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)",
  },
  {
    id: 143,
    name: "Snorlax",
    type: "Normal",
    averageWeight: {
      value: 460.0,
      measurementUnit: "kg",
    },
    image: "https:cdn.bulbagarden.net/upload/4/40/Spr_5b_143.png",
    moreInfo: "https:bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)",
  },
  {
    id: 148,
    name: "Dragonair",
    type: "Dragon",
    averageWeight: {
      value: 16.5,
      measurementUnit: "kg",
    },
    image: "https:cdn.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
    moreInfo: "https:ulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)",
  },

  {
    id: 34,
    name: "Nidoking",
    type: "Poison",
    averageWeight: {
      value: 62,
      measurementUnit: "kg",
    },
    image: "https://archives.bulbagarden.net/media/upload/4/46/Spr_5b_034.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pok%C3%A9mon)",
  },

  {
    id: 150,
    name: "Mewtwo",
    type: "Psychic",
    averageWeight: {
      value: 122,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/5/53/Spr_4d_150.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pok%C3%A9mon)#Biology",
  },

  {
    id: 85,
    name: "Dodrio",
    type: "Flying",
    averageWeight: {
      value: 85.2,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/1/19/Spr_5b_085_m.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dodrio_(Pok%C3%A9mon)",
  },
  {
    id: 54,
    name: "Psyduck",
    type: "Water",
    averageWeight: {
      value: 19.6,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/3/39/Spr_5b_054.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pok%C3%A9mon)",
  },
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass",
    averageWeight: {
      value: 6.9,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/7/76/Spr_5b_001.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)",
  },
  {
    id: 93,
    name: "Haunter",
    type: "Ghost",
    averageWeight: {
      value: 0.1,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/1/12/Spr_5b2_093_s.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Haunter_(Pok%C3%A9mon)",
  },
  {
    id: 56,
    name: "Mankey",
    type: "Fighting",
    averageWeight: {
      value: 28,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/9/9f/Spr_5b_056.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mankey_(Pok%C3%A9mon)",
  },
  {
    id: 27,
    name: "Sandshrew",
    type: "Ground",
    averageWeight: {
      value: 12,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/1/17/Spr_5b_027.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pok%C3%A9mon)",
  },
  {
    id: 142,
    name: "Aerodactyl",
    type: "Rock",
    averageWeight: {
      value: 59,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/7/74/Spr_5b_142_s.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Aerodactyl_(Pok%C3%A9mon)",
  },
  {
    id: 131,
    name: "Lapras",
    type: "Ice",
    averageWeight: {
      value: 220,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/6/62/Spr_5b_131.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pok%C3%A9mon)",
  },
  {
    id: 248,
    name: "Tyranitar",
    type: "Dark",
    averageWeight: {
      value: 202,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/5/5c/Spr_5b_248.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Tyranitar_(Pok%C3%A9mon)",
  },
  {
    id: 81,
    name: "Magnemiter",
    type: "Steel",
    averageWeight: {
      value: 6,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_081.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Magnemite_(Pok%C3%A9mon)",
  },
  {
    id: 35,
    name: "Clefairy",
    type: "Fairy",
    averageWeight: {
      value: 7.5,
      measurementUnit: "kg",
    },
    image:"https://archives.bulbagarden.net/media/upload/7/76/Spr_5b_035.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pok%C3%A9mon)",
  },
];

export default pokemons;
