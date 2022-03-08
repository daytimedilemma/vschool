let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (guess !== targetNum){
    attempts++;
    if (guess < targetNum)
        guess = parseInt(prompt("Too low! try again!"));
    else (guess > targetNum)
        guess = parseInt(prompt("Too high, try again!"));   
}
console.log(`You got it! It took you ${attempts} guesses`)



let human = {
    age: 20,
    alive: true,
    hairColor: "Brown",
    friends: ["Bob", "Billy", "Susan", "Sally"]
}

console.log(human.age);
console.log(human["friends"]);

const welcomeButton = document.getElementById("clickMe");
welcomeButton.addEventListener("click", buttonClick);

function buttonClick() {
    document.getElementById("clickMe").innerHTML = "Thanks for Visiting!";
}
