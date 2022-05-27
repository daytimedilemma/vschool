const myForm = document.myForm

myForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    const firstName = myForm.firstName.value
    const lastName = myForm.lastName.value
    const age = myForm.age.value
    const gender = myForm.gender.value
    const destination = myForm.city.value
    const checkedInputs = []
    
    for(let i = 0; i < myForm.diet.length; i++){
        if(myForm.diet[i].checked){
            checkedInputs.push(myForm.diet[i].value)
        }
    }
    alert(`First name: ${firstName} \r\n Last name: ${lastName} \r\n Age: ${age} \r\n Gender: ${gender} \r\n Location: ${destination} \r\n Dietary rerstrictions: ${checkedInputs}`)

    // const person = `Hello ${firstName} ${lastName}. You are ${age} years old`
    // console.log(person)
})