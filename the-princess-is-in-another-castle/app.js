const readline = require("readline-sync");
let powerupStatus = {
    0: "Dead",
    1: "Small",
    2: "Big",
    3: "Powered Up"
}
class player {
    constructor(name, totalCoins = 0, status = powerupStatus[1], hasStar = false) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked) {
        // namePicked = readline.keyIn('Which hero will you choose? Mario or Luigi?,(m for Mario, l for Luigi', { limit: "ml"})
        if (namePicked === "m") {
            this.name = "Mario"
            console.log(`Greetings ${this.name}`)
            return this.name
        } else if (namePicked === "l") {
            this.Name = "Luigi"
            console.log(`Greetings ${this.name}`)
            return this.name
        }
    }
    gotHit() {
        if (this.status === powerupStatus[3]) {
            this.status = powerupStatus[2]
            this.hasStar = false
            return console.log('Your Star Protected you!')
        } else if (this.status === powerupStatus[2]) {
            return this.status = powerupStatus[1]
        } else if (this.status === powerupStatus[1]) {
            return this.status = powerupStatus[0]
        }
    }
    gotPowerup() {
        //Powerup is received and sets status from "Small" "Big" "Powered Up" When this function is called increase status
        if (this.status === powerupStatus[1]) {
            return this.status = powerupStatus[2]
        } else if (this.status === powerupStatus[2]) {
            this.status = powerupStatus[3]
            this.hasStar = true
            return console.log("Congratulations! You got a star!")
        }

    }
    addCoin() {
        return this.totalCoins = this.totalCoins + 1
    }
    print() {
        console.log(`Name: ${this.name}\n Status:${this.status}\n Total Coins:${this.totalCoins}`)
    }
}
// const randomRange = () => Math.floor((Math.random() * 3) + 1);
let interval = setInterval(randomRange, 1500);
function randomRange() {
    let random = Math.floor((Math.random() * 3))
    if (random === 0) {
        newPlayer.gotHit()
        if (newPlayer.status === powerupStatus[0]) {
             console.log('You are Dead\n GAME OVER!!\nTHANKS FOR PLAYING!')
             return clearInterval(interval)
        } else {
            return newPlayer.print()
        }
    } else if (random === 1) {
        newPlayer.gotPowerup()
        return newPlayer.print()
    } else {
        newPlayer.addCoin()
        return newPlayer.print()
    }
}
let namePicked = readline.keyIn('Which hero will you choose? Mario or Luigi?,(m for Mario, l for Luigi', { limit: "ml" })
if (namePicked === "m") {
    namePicked = "Mario"
    console.log(`Greetings ${namePicked}`)
} else if (namePicked === "l") {
    namePicked = "Luigi"
    console.log(`Greetings ${namePicked}`)
}
const newPlayer = new player(namePicked)
interval








