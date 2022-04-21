//groom this thing
let sparky = {
    breed, 
    hairColor, 
    petName, 
    cost, 
    time, 
    appointment, 
    owner
}
let fluffly = {
    breed, 
    hairColor, 
    petName, 
    cost, 
    time, 
    appointment, 
    owner
}
function groom (animal){
    console.log("grooming",animal)
}

groom(sparky)
groom(fluffly)

function makeSandWhich(bread, PB, jelly){
    let sandwhich= {bread, PB, jelly}
    return sandwhich
}


s1 = makeSandWhich("white", "cruncy", "grape")
s2 = makeSandWhich("wheat", "creamy", "strawberry")
s3 = makeSandWhich("white", "cruncy", "apple")

sandwhichs = [s1, s2, s3]

let people = ["jon", "steph", "Bob"]

//returns the user's input
let stringAnswer = window.prompt()

let numberAnswer = parseFloat(stringAnswer)

let answer = parseFloat(window.prompt("Question"))