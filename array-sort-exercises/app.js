// const  arr = [90, 45, 100, 33, 2, 15]
// arr.sort((a, b) => a - b)
// arr.sort((a,b) => a + b)
// arr = ["dog", "wolf", "by", "family", "eaten"]
// arr.sort((a, b) => a.length - b.length)
//***** Sort Alphabetically *****
// arr.sort()
// console.log(arr)
const people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];
people.sort((a, b) => a.age - b.age)
console.log(people)