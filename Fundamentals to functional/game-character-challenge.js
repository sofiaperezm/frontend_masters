var clueGame = {};

// Array literal 
clueGame.confidential = ["Vanessa Fellows", "revolver", "lobby"];
clueGame.characters = ["David Evans", "Vanessa Fellows", "James Darnall", "Brenda Gadd"];

// Make an array of objects
clueGame.weapons = [
   {type: "dagger", location: "living room"},
   {type: "revolver", location: "dining room"},
   {type: "rope", location: "garage"},
   {type: "wrench", location: "bedroom"}
];

// Add elements to an array without using array literal
clueGame.rooms = []
clueGame.rooms[0] = "studio"
clueGame.rooms.push("lobby")
clueGame.rooms.push("pool")
clueGame.rooms.push("kitchen")
