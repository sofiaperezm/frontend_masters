const game = {
    'suspects' : [
        {
            name: "Rusty",
            color: "orange"
        }, 
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

// Looping exercise part 1
for (let value of game.suspects) {
    console.log(value)
}

// Looping exercise part 2
for (let suspect of game.suspects) {
    console.log(suspect.name)
    if (suspect.name === "Rusty") {
        suspect.isGuilty = true
    } else {
        suspect.isGuilty = false
    }
}


// Looping exercise part 3
var suspects = [
    {
        name: "Rusty",
        color: "orange"
    }, 
    {
        name: "Miss Scarlet",
        color: "red"
    }
]

const firstColor = game.suspects[0].color
const secondColor = game.suspects[1].color

const [color1, color2] = [game.suspects[0].color, game.suspects[1].color]

// Bianca's solution in part 3
var [{color: colorOne}, {color: colorTwo}] = suspects