//1
// numbers = [2, 5, 100];
// const doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers)
//2
// const stringItUp = numbers.map(num => num.toString());
// console.log(stringItUp)
//3
// names = ["john", "JACOB", "JinGleHeimer", "schmidt"]
// const capitalizeNames = names.map(function(name){
//     return  name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
// })
// console.log(capitalizeNames)
//4, 5 ,6
const characters = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// const namesOnly = characters.map(function(user){
//     if (user.age < 18) {
//         return `${user.name} is underage!`
//     }
//     if (user.age >= 18) {
//         return `${user.name} can go to the Matrix!`
//     }
       
// })
const namesOnly = characters.map(function(user){
    // let names = document.createElement("h1")
    // names.textContent = user.name
    // document.getElementById("content").append(names)
    // let ages = document.createElement("h2")
    // ages.textContent = user.age
    // document.getElementById("content").append(ages)
    return `<h1>${user.name}</h1>`
})