// filter asks a t/f question to each element in the array
// True it will be in the filter array false taken out
// filter returns a modified array

var array = [20, 'e', true, 40]

var b = array.filter(function (item) {
  return item > 30
})
console.log(b)

// filtered is [40] this was using an anoymous function

function isOver30 (age) {
  return age > 30
}
var d = [39, 34, 22]

var ages = d.filter(isOver30)
console.log(ages)

// filtered is [39, 34] this is refering to the function

var pets = [
  {name: 'fluffy', age: 2},
  {name: 'sal', age: 3},
  {name: 'fred', age: 3}
]

var myPet = pets.filter(function (thing) {
  return thing.age < 3
})
console.log(myPet)

// filtered is [{name: 'fluffy', age: 2}]


var things = ['apple', 'bannana', 'orange', 'potato']

var f = things.filter(function (fruit, index) {
  if (index == 3) {
    return fruit
  }
})
console.log(f)

// returns ['potato'] filter can take in three arguments into its function. 1st value of the element 'fruit', 2nd index position number based on 0 base counting, and 3rd the Array obj
