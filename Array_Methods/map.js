// map function returns an array of the same length as the original after calling back each element into a function.
var array = [1, 2, 3, 4]

var newArr = array.map(function (num) {
  return num * 2
})
console.log(newArr)

var animal = ['sheep', 'dog', 'cat', 'cow']

var barn = animal.map(function (spp, index) {
  if (index === 0 || index === 3) {
    return spp + ' lives on a farm'
  }
  console.log(animal)
})
console.log(barn)

var obj = [
  {key: 1, value: 'red'},
  {key: 2, value: 'blue'},
  {key: 3, value: 'green'}
]
var newObj = obj.map(function (things) {
  var robj = {}
  robj[things.key] = things.value
  return robj
})
console.log(newObj)

var name = 'annah'
console.log(name.length)
