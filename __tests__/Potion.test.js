const Potion = require('../lib/Potion')

test('creates a health potion object', () => { 
    const potion = new Potion('health')

    expect(potion.name).toBe('health')
    expect(potion.value).toEqual(expect.any(Number))
 })

test('creates a random potion obj', () => { 
    const potion = new Potion()

    expect(potion.name).toEqual(expect.any(String))
    expect(potion.name.length).toBeGreaterThan(0)
    expect(potion.value).toEqual(expect.any(Number))
 })


//  saved code snippets
// test('gets random number between 1 and 10', () => {
//     expect(randomNumber()).toBeGreaterThanOrEqual(1);
//     expect(randomNumber()).toBeLessThanOrEqual(10);
//   });