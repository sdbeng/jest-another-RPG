const Player = require("../lib/Player");
const Potion = require("../lib/Potion");
jest.mock("../lib/Potion");

//log a mocked potion
console.log(new Potion());

test("creates a player obj", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  // check for creation of an inventory
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

test("gets player stats as an obj", () => {
  const player = new Player("Dave");
  // here we check that player.getStats() returns an obj with 4 specific properties
  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
});

test("gets inventory from player or returns false", () => {
  const player = new Player("Dave");

  /* On player creation, the inventory should already have something in it, so a call to player.getInventory() should return an array. There's also the case of an empty inventory needing to return false. You can simulate an empty array yourself by setting player.inventory = [] before the next expect() runs.*/
  expect(player.getInventory()).toEqual(expect.any(Array));
  player.inventory = [];
  //it will return false if inventory is empty
  expect(player.getInventory()).toEqual(false);
});

test("gets players health value", () => {
  const player = new Player("Dave");
  expect(player.getHealth()).toEqual(
    expect.stringContaining(player.health.toString())
  );
});

test("check if player is alive or not", () => {
  const player = new Player("Dave");
  expect(player.isAlive()).toBeTruthy();
  player.health = 0;
  expect(player.isAlive()).toBeFalsy();
});

test("subtracts from player's health", () => {
  const player = new Player("Dave");
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);
// In this case, we will call the reduceHealth() method twice—the second time with an absurdly high value to make sure that it never goes negative.
  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});

// ** Note
/* Did you notice that we create a new Player instance in every test? We could choose to use the same one in all of our tests, but this might lead to unintended consequences. Now that our tests affect the Player object's property values, if we used the same object every time, we would no longer be testing properties and methods in isolation.

The moral of the story is that it's important to create a new instance of the object we're testing in every test to give that test a fresh start. */