// let name = "John"
// const age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         var name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

//Task 1 ??? How do I write an arrow function with returning a object
// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = (arr) => arr.map(carrot => ({type: "carrot", name: carrot }))

// console.log(mapVegetables(carrots))

//Task 2 
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = (arr) =>  arr.filter((person) => person.friendly)

// console.log(filterForFriendly(people))

//Task 3
// const doMathSum = (a, b) => a + b

// const produceProduct = (a, b) => a * b

// console.log(produceProduct(5, 10))

//Task 4

// const printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
// console.log(printString("Nick", "Miner", 28))

//Task 5
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  const filterForDogs = (arr) =>  arr.filter(animal => (animal.type === "dog") ? true : false)
// console.log(filterForDogs(animals)) 

//Template Literals
// const greeting = (location = "Hawaii", name = "Janice") => ` Hi ${name}! \n Welcome to ${location}. \n I hope you enjoy your stay. Please ask the president of ${location} if you need anything`
// console.log(greeting("Paris", "Nick"))

