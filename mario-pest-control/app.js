const form = document.myForm
form.addEventListener("submit", (event) =>{
    event.preventDefault()
    let goombaCapt = form.goomba.value;
    let goombaCost = goombaCapt * 5;
    let bobOmbCapt = form.bobOmb.value;
    let bobOmbCost = bobOmbCapt * 7;
    let cheepCheepsCapt = form.cheepCheeps.value;
    let cheepCheepsCost = cheepCheepsCapt * 7;
    let totalBaddies = parseInt(goombaCapt) + parseInt(bobOmbCapt) + parseInt(cheepCheepsCapt);
    totalCost = goombaCost + bobOmbCost + cheepCheepsCost
    // console.log(`Mario's Pest Control has captured ${totalBaddies} Baddies. ${goombaCapt} Goombas, ${bobOmbCapt} Bob-ombs, ${cheepCheepsCapt} Cheep Cheeps. Your total cost comes to ${totalCost} Coins`)
    let invoice = document.createElement("div")
    invoice.textContent = `Mario's Pest Control has captured ${totalBaddies} Baddies. ${goombaCapt} Goombas, ${bobOmbCapt} Bob-ombs, ${cheepCheepsCapt} Cheep Cheeps. Your total cost comes to ${totalCost} Coins. Thank you for allowing Mario Pest Control to serve you!`
    document.getElementById("box6").append(invoice)
})