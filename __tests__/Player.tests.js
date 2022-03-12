const Player = require('../lib/Player')
const Potion = require('../lib/Potion')
jest.mock('../lib/Potion')

//log a mocked potion
console.log(new Potion());

test('creates a player obj', () => { 
    const player = new Player('Dave')

    expect(player.name).toBe('Dave')
    expect(player.health).toEqual(expect.any(Number))
    expect(player.strength).toEqual(expect.any(Number))
    expect(player.agility).toEqual(expect.any(Number))
    // check for creation of an inventory
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    )
 })

 test('gets player stats as an obj', () => { 
     const player = new Player('Dave')
    // here we check that player.getStats() returns an obj with 4 specific properties
     expect(player.getStats()).toHaveProperty('potions')
     expect(player.getStats()).toHaveProperty('health')
     expect(player.getStats()).toHaveProperty('strength')
     expect(player.getStats()).toHaveProperty('agility')
  })

  test('gets inventory from player or returns false', () => { 
    const player = new Player('Dave')

    /* On player creation, the inventory should already have something in it, so a call to player.getInventory() should return an array. There's also the case of an empty inventory needing to return false. You can simulate an empty array yourself by setting player.inventory = [] before the next expect() runs.*/
    expect(player.getInventory()).toEqual(expect.any(Array))
    player.inventory = []
    //it will return false if inventory is empty
    expect(player.getInventory()).toEqual(false)
    
   })