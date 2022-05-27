const addForm = document.add

addForm.addEventListener("submit", function(event){
    event.preventDefault()
    const num1 = parseInt(addForm.add1.value)
    const num2 = parseInt(addForm.add2.value)
    const addResult = document.createElement("div")
    addResult.textContent = num1 + num2
    document.getElementById("add").append(addResult)
    console.log(addResult)
})

const subtractForm = document.subtract
subtractForm.addEventListener("submit", function(event){
    event.preventDefault()
    const num1 = parseInt(subtractForm.subtract1.value)
    const num2 = parseInt(subtractForm.subtract2.value)
    const result = document.createElement("div")
    result.textContent = num1 - num2
    document.getElementById("subtract").append(result)
    console.log(result)
})

const multiForm = document.multiply
multiForm.addEventListener("submit", function(event){
    event.preventDefault()
    const num1 = parseInt(multiForm.multi1.value)
    const num2 = parseInt(multiForm.multi2.value)
    const result = document.createElement("div")
    result.textContent = num1 * num2
    document.getElementById("multiply").append(result)
    console.log(result)
})

