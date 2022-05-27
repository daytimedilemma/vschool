
function sum(x, y) {
    try {
        if (!Number.isInteger(y)) {
            throw y
        }
        if (!Number.isInteger(x)) {
            throw x
        }
        return x + y
    } catch (err) {
        console.log(`${err} is not a number`)
    } finally {
        console.log("Runs no matter what!")
    }
}


var user = {username: "sam", password: "12bc"};
function login(username, password){
    try {
        if (username === "sam"){
            throw username
        }
        if (password === "123abc"){
            throw password
        }
        return `Welcome ${user.username}`
    } catch (err) {
        console.log("Invalid Username or password")
    } finally {
        console.log("Runs no matter what!")
    }
}
console.log(login())