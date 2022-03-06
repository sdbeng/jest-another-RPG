/* 
It's essential that we do not use arrow functions as constructor functions. Arrow functions change the meaning of the keyword this, which is a core piece of constructor functions.
*/

function Potion(name) {
    this.types = ['strength', 'agility', 'health']
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if(this.name === 'health'){
        //rand num between 30 and 40
        this.value = Math.floor(Math.random() * 10 + 30)
    }else{
        //rand num between 7 and 12
        this.value = Math.floor(Math.random() * 5 + 7)
    }
}

module.exports = Potion