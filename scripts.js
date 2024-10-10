let weapons = ['Candlestick','Wrench','Pipe','Rope','Dagger','Revolver','Rock','Bomb']
let suspects = ['Miss Scarlet', 'Prof. Plum','Colonel Mustard','Mrs. Peacock','Mr. Green','Dr. Orchid']
let rooms = ['Hall','Loungue','Dining Room', 'Kitchen','Ballroom','Conservation','Billiard Room','Library','Study','Bathroom']
let finalreveal = document.getElementById("final")
let revealButton = document.getElementById("reveal")
revealButton.addEventListener('click', revealMystery)


function selectRandom(x){
     return x[(Math.floor(Math.random()*(x.length)))]
}

function pickMystery(){
    let mystery={
        weapon:selectRandom(weapons),
        suspect:selectRandom(suspects),
        room:selectRandom(rooms)
    }
    return mystery
}
let test
function revealMystery(mystery){
    mystery=pickMystery()
    finalreveal.innerHTML = (`${mystery.suspect} killed Mr. Marist using ${mystery.weapon} in the ${mystery.room}!`)
}