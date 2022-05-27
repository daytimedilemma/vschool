const form = document.clickMe
let h1 = document.createElement("h1")
    h1.textContent = 0;
    document.getElementById("content").append(h1)
form.addEventListener("submit", function(event){
    event.preventDefault()
    h1.textContent = h1 + 1;
})
    