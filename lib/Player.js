const Potion = require('../lib/Potion')

function Player(name='') {
    this.name = name
    this.health = Math.floor(Math.random() * 10+95)
    this.strength = Math.floor(Math.random() * 5+7)
    this.agility = Math.floor(Math.random() * 5+7)

    this.inventory = [new Potion('health'), new Potion()]
    // returns an object with various player properties
    this.getStats = function() {
        return {
          potions: this.inventory.length,
          health: this.health,
          strength: this.strength,
          agility: this.agility
        };
      };
    
      // returns the inventory array or false if empty
      this.getInventory = function() {
        if (this.inventory.length) {
          return this.inventory;
        }
        return false;
      };

      Player.prototype.getHealth = function(){
          return `${this.name}'s health is now ${this.health}`
      }

      Player.prototype.isAlive = function(){
          if(this.health === 0) return false
          return true
      }

      Player.prototype.reduceHealth = function(health) {
        this.health -= health;
      
        if (this.health < 0) {
          this.health = 0;
        }
      };
}


  /* 
  what's the difference? Which one is preferable? At a glance, using this.methodName probably makes more sense. It clearly shows that you are creating methods for each player. Unfortunately, that's also the problem: it creates new methods for each player. If you have a game that creates 100 Player objects, your code will create a hundred getStats() methods.

When using prototype, however, you are only creating the method once on the constructor itself. New player objects simply inherit the method from the constructor rather than having their own instances of that method. Such inheritance can traverse multiple levels, meaning if the method being called doesn't exist on Player(), JavaScript will look for it on the next constructor up the chain. In this case, the next constructor would be the built-in Object data type.
  Player.prototype.getStats = function() {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility
  };
};

Player.prototype.getInventory = function() {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};
  */

module.exports = Player