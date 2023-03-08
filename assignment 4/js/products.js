/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "gamep1",
    title: "PlayStation 5 console",
    description: "gaming at a new level, includes the PlayStation 5 console and a controller",
    price: 62999,
    discontinued: false,
    categories: ["gamec1"]
  },
  {
    id: "gamep2",
    title: "Xbox Series X",
    description: "gaming at a new level, includes the Xbox Series X console and a controller",
    price: 85099,
    discontinued: false,
    categories: ["gamec2"]
  },
  {
    id: "gamep3",
    title: "FIFA 2022 standard edition",
    description: "Football game, play online to defeat your friends",
    price: 7999,
    discontinued: false,
    categories: ["gamec3", "gamec4", "gamec5"]
  },
  {
    id: "gamep4",
    title: "FIFA 2022 definitive edition",
    description: "Football game, play online to defeat your friends",
    price: 9999,
    discontinued: false,
    categories: ["gamec3", "gamec4", "gamec5"]
  },
  {
    id: "gamep5",
    title: "God of War",
    description: "fights to survive and teaches his sun to do the same",
    price: 5999,
    discontinued: false,
    categories: ["gamec5"]
  },
  {
    id: "gamep6",
    title: "Syberia: The World Before",
    description: "classic-adventure game, singleplayer and multiplayer game",
    price: 4549,
    discontinued: false,
    categories: ["gamec5"]
  },
  {
    id: "gamep7",
    title: "Syberia: The World Before deluxe edition",
    description: "classic-adventure game, singleplayer and multiplayer game",
    price: 5668,
    discontinued: false,
    categories: ["gamec5"]
  },
  {
    id: "gamep8",
    title: "NBA 2K21",
    description: "best basketball gameplay with multiple formats to play",
    price: 7999,
    discontinued: false,
    categories: ["gamec3", "gamec4", "gamec5"]
  },
  {
    id: "gamep9",
    title: "Buy NBA 2K21 Mamba Forever",
    description: "best basketball gameplay with multiple formats to play",
    price: 11999,
    discontinued: false,
    categories: ["gamec3", "gamec4", "gamec5"]
  },
  {
    id: "gamep10",
    title: "WWE 2K22",
    description: "Play WWE with your friends and online",
    price: 7999,
    discontinued: false,
    categories: ["gamec5"]
  },
  {
    id: "gamep11",
    title: "WWE 2K22 Deluxe Edition",
    description: "Play WWE with your friends and online",
    price: 11999,
    discontinued: false,
    categories: ["gamec5"]
  },
  {
    id: "gamep12",
    title: "WWE 2K22 nWo Edition",
    description: "Play WWE with your friends and online",
    price: 14999,
    discontinued: false,
    categories: ["gamec5"]
  },
  {
    id: "gamep13",
    title: "It Takes Two",
    description: "adventure 2 player game offline",
    price: 5499,
    discontinued: false,
    categories: ["gamec5"]
  },
  {
    id: "gamep14",
    title: "F1 2021",
    description: "formula 1 game, online, single player and two player mode available",
    price: 7999,
    discontinued: false,
    categories: ["gamec3", "gamec4", "gamec5"]
  },
  {
    id: "gamep15",
    title: "2021 Deluxe Edition",
    description: "formula 1 game, online, single player and two player mode available",
    price: 9499,
    discontinued: false,
    categories: ["gamec3", "gamec4", "gamec5"]
  },
  {
    id: "gamep16",
    title: "MotoGP™21",
    description: "moto gp game 2 weel racing experience with lots of tracks and bikes",
    price: 4999,
    discontinued: false,
    categories: ["gamec5"]
  },
  {
    id: "gamep17",
    title: "AO Tennis 2",
    description: "experince real life tennis game",
    price: 6899,
    discontinued: false,
    categories: ["gamec5"]
  },
  {
    id: "gamep18",
    title: "Need for Speed™ Heat Deluxe Edition",
    description: "thrilling racing experience fight against other racers and police",
    price: 8999,
    discontinued: false,
    categories: ["gamec3", "gamec4", "gamec5"]
  },
  {
    id: "gamep19",
    title: "Forza Horizon 5 - Standard Edition",
    description:
      "landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars",
    price: 7999,
    discontinued: false,
    categories: ["gamec3", "gamec4", "gamec5"]
  },
  {
    id: "gamep20",
    title: "Forza Horizon 5 - Deluxe Edition",
    description:
      "landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars",
    price: 9999,
    discontinued: false,
    categories: ["gamec3", "gamec4", "gamec5"]
  },
  {
    id: "gamep21",
    title: "Forza Horizon 5 - Premium Edition",
    description:
      "landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars",
    price: 12999,
    discontinued: false,
    categories: ["gamec3", "gamec4", "gamec5"]
  },
  {
    id: "gamep22",
    title: "PlayStation 4 console",
    description: "gaming at a new level, includes the PlayStation 4 console and a controller",
    price: 37999,
    discontinued: true,
    categories: ["gamec1"]
  },
  {
    id: "gamep23",
    title: "PlayStation 3 console",
    description: "gaming at a new level, includes the PlayStation 3 console and a controller",
    price: 22999,
    discontinued: true,
    categories: ["gamec1"]
  },
  {
    id: "gamep24",
    title: "Xbox 360",
    description: "gaming at a new level, includes the Xbox 360 console and a controller",
    price: 29999,
    discontinued: true,
    categories: ["gamec2"]
  }
];
