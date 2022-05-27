// const collectAnimals = (...animals) => animals = animals.reduce((previousAnimal, currentAnimal) => `${previousAnimal}  ${currentAnimal}`, [])
// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// const combineFruit = (fruit, sweets, vegetables) => ({fruit,  sweets, vegetables})
// console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }

// const parseSentence = ({location, duration}) => `We're going to have good time in ${location} for ${duration}`
// console.log(parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }))
// let getItem = (...item) => ["cookies", "candy", "chips"]

// let [x, y, ...items] = getItem()
// console.log(x)

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(...arr){
//     /*your code here*/
//     let [firstFav, secondFav, thirdFav] = favoriteActivities
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
// }

// console.log(returnFavorites(favoriteActivities))

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];
// // let combineAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
// function combineAnimals(...arr){
//     return arr.reduce((cur, val) => [...cur, ...val])
// }
// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }
//   console.log(product(1, 2, 3, 4, 5))
// const product = (...num) => num.reduce((acc, number) => acc * number, 1)
// console.log(product(1, 2, 3, 4, 5))

// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }
//   console.log(unshift("greeting", "hi", "hello", "hola", "sup", "wassup"))
// const unshift = (array, ...str) => str.concat(array)
// console.log(unshift("greeting", "hi", "hello", "hola", "sup", "wassup"))


// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         firstName = name[0];
//         lastName = name[1]
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }
// const populatePeople = (names) => names.map((name) => (name = name.split(" "), firstName = name[0], lastName = name[1]))
// const populatePeople = (names) => names.map(name => (name = name.split(" "), ({firstName: name[0], lastName: name[1]})))
// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]




