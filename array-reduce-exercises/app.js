//1
const arr = [1,2,3];
// const sum = arr.reduce(function(final, current){
//     final += current
//     return final
// })
// console.log(sum)


const stringConcat = arr.reduce(function(final, current){
    final += current.toString()
    return final
}, "")
console.log(stringConcat)
console.log(typeof(stringConcat))

//3
// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// const result = voters.reduce(function(final, voter){
//     if(voter.voted){
//         final++
//     }
//     return final
// }, 0)
// console.log(result)

//4
// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
// const shoppingSpree = wishlist.reduce(function(final, current){
//     final += parseInt(*current.price)
//     return final
// }, 0)
// console.log(shoppingSpree)

//5 
// const arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];
// const result = arrays.reduce(function(final, current){
//     return final.concat(current)
// }, [])
// console.log(result)

//6
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const result = voters.reduce(function (final, voter){
    if (voter.age <= 25){
        final.numYoungPeople++
        if (voter.voted === true){
            final.numYoungVotes++
        }
    } else if (voter.age <= 35){
        final.numMidPeople++
        if (voter.voted === true){
            final.numMidVotesPeople++
        }
    } else if  (voter.age >= 35){
        final.numsOldPeople++
        if (voter.voted === true){
            final.numOldVotesPeople++
        }
    }
    return final
}, {numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidPeople: 0, numOldVotesPeople: 0, numsOldPeople: 0})
console.log(result)
