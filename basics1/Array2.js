// 1. Spread operator( ...arrayName) = to create a shallow copy of an array,to join/concatenate arrays,to add elements to an array.
// 2. .flat(infinity) = to flatten infinity level nested arrays.
// 3. .from = for converting array-like and objects into arrays.
// 4. for creating new arrays from a set of values, regardless of how many values are provided or their type
const marvelheros= ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]
//marvelheros.push(dc)
//console.log(marvelheros);
//console.log(marvelheros[3][1]);
//const allheros = marvelheros.concat(dc)
//console.log(allheros);

const all_new_heros = [...marvelheros,...dc]
//console.log(all_new_heros);
const another_array = [1,2,3,[ 4,5,6 ],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Barsha"))
console.log(Array.from("Barsha"))
console.log(Array.from({name: "Barsha" }))

let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));