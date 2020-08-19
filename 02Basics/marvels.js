const superHeroes = ['Iron Man','Spiderman','Capt. America','Thor']

console.log(superHeroes)
console.log(superHeroes[0])
console.log(superHeroes[2])
console.log(superHeroes[superHeroes.length - 1])

console.log(`we have ${superHeroes.length} super heroes`)

superHeroes[2] = 'tom and jerry' // you can change the property of the array, which does not affect the pointer location
superHeroes = ['tom','jerry'] // you cannot reassign the array, which affect the pointer location.

console.log(superHeroes)
// const a = 10;
// a = 20
