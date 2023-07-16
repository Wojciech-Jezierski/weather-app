// Define the player object
const player = {
  name: "John",
  health: 100,
  inventory: [],
  currentRoom: "kitchen",
};

// Define the rooms and their descriptions
const rooms = {
  kitchen: "You are in a messy kitchen with a strange smell.",
  livingRoom: "The living room is dark and spooky.",
  bedroom: "This is a cozy bedroom with a large bed.",
};

// Define the items and their locations
const items = {
  key: "kitchen",
  flashlight: "bedroom",
  potion: "livingRoom",
};

// Function to move the player to a new room
function movePlayer(newRoom) {
  if (rooms[newRoom]) {
    player.currentRoom = newRoom;
    console.log(`You have entered the ${newRoom}.`);
    displayRoomDescription();
  } else {
    console.log("Invalid room. Try again.");
  }
}

// Function to display the current room description
function displayRoomDescription() {
  console.log(rooms[player.currentRoom]);
}

// Function to pick up an item
function pickUpItem(item) {
  if (items[item] === player.currentRoom) {
    player.inventory.push(item);
    console.log(`You have picked up ${item}.`);
  } else {
    console.log("There's no such item here.");
  }
}

// Function to use an item
function useItem(item) {
  if (player.inventory.includes(item)) {
    switch (item) {
      case "key":
        console.log("You unlock a hidden door.");
        rooms.secretRoom = "You are in a mysterious secret room.";
        items.treasure = "secretRoom";
        break;
      case "flashlight":
        console.log("You turn on the flashlight and brighten the room.");
        break;
      case "potion":
        console.log("You drink the potion and restore 20 health.");
        player.health += 20;
        break;
      default:
        console.log("You can't use this item.");
        break;
    }
  } else {
    console.log("You don't have this item in your inventory.");
  }
}

// Main game loop
console.log("Welcome to the Text Adventure Game!");
displayRoomDescription();

while (player.health > 0) {
  const command = prompt("Enter your command (move/pick up/use/exit):");

  if (command === "move") {
    const newRoom = prompt("Enter the name of the room you want to go to:");
    movePlayer(newRoom);
  } else if (command === "pick up") {
    const item = prompt("Enter the name of the item you want to pick up:");
    pickUpItem(item);
  } else if (command === "use") {
    const item = prompt("Enter the name of the item you want to use:");
    useItem(item);
  } else if (command === "exit") {
    console.log("Goodbye!");
    break;
  } else {
    console.log("Invalid command. Try again.");
  }
}

if (player.health <= 0) {
  console.log("Game over. You are out of health.");
}
