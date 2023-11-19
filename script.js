// Ternary 1 uzduotis

var vardas = "meu"

vardas.length < 5 ? alert("Trumpas vardas") : alert("Ilgas vardas")

console.log("=================")



// Ternary 2 uzduotis

var clientAge = prompt(" Your age")
var legalAge = 18

clientAge < 0 || clientAge > 120 ? alert("Invalid age") : clientAge >= legalAge ? alert("Can drive") : alert("Can't drive")

console.log("=================")



// Ternary 3 uzduotis

var phone = "iPhone"
var isIphoneUser = true

phone == "iPhone" ? console.log(isIphoneUser) : console.log(!isIphoneUser)