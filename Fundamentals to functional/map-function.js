const weapons = ["candlestick", "lead pipe", "revolver"]

const makeBroken = function(item) {
    return `broken ${item}`
}

_.map(weapons, makeBroken) 