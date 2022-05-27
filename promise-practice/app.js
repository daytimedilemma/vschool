//resolve - then
//reject - catch
// New promises always immediately return "pending". Pending is the first stage of every promise

//When a function returns a promise it is known as a THENABLE



// function flipCoin(){
//     return new Promise((resolve, reject) => {
//         const randomNum = Math.floor(Math.random() * 2)

//         if(randomNum === 0){
//             resolve("HEADS")
//         } else if(randomNum === 1){
//             reject("TAILS")
//         }
//     })
// }

// flipCoin()
//     .then(response => console.log(`RESOLVED: ${response}`))
//     .catch(error => console.log(`REJECTED: ${error}`))

// Promise.resolve("Something").then(response => console.log(response))

// function getData(){
//     return new Promise((resolve) => {
//         //setTimeout(resolve, 2000)
//         setTimeout(() => resolve("HELLO WORLD"), 3000)
//     })
// }

// getData()
//     //.then(res => console.log("RESOLVED!")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

