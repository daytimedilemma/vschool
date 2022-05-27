const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
//Reduce?, Map?, Sort for last name, filter for 18+
// console.log(sortedOfAge)
const sortedOfAge = peopleArray.filter(isAge => isAge.age > 18)
const sortedOfName = sortedOfAge.sort((a, b) => {
    const nameA = a.lastName.toUpperCase();
    const nameB = b.lastName.toUpperCase();
    if( nameA < nameB){
        return -1
    }
    if (nameA > nameB){
        return 1
    }
})
const final = sortedOfName.map(people => `<li>${people.firstName} ${people.lastName} is ${people.age}</li>`);
console.log(final)