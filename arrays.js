console.log("Script loaded")

//create an array / list with this data in it (in-order)
let hand = [7,8,3,9,2]

//find me the highest card in that hand

//start with pseudo-code

//step assign a highest card as the first
let highestCard = hand[0]
//go through each card in list, by using indices
        //hand[0]
        //hand[1]
        //hand[2]
        //hand[3]
        //hand[4]
        //reached end of array
    for(let index = 0; index < 5; index++){
        let card = hand[index]
        console.log(`card at hand[${index}] is ${card}`)

        //compare card to highestCard
        //if the card I compared to is bigger 
        if (card > highestCard){
            //keep that card as highestCard by assigning that value to highestCard
            highestCard = card
        }

        console.log(`end of iteration: ${index}, highestCard: ${highestCard}`)
    }
    

//when done print highest card
console.log("Highest card:", highestCard)

//when this program works correctly what should I see?
//I should see highest card is 9
console.log("My code works?", highestCard === 9)