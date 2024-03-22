function getComputerChoice() {
    number = generateRandom(3)
    switch (number) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}

function generateRandom(limit) {
    return Math.floor(Math.random() * (limit))
}

function getUserChoice() {
    input = prompt('Enter choice: ')
    input = input.toLowerCase()
    return input
}

function playRound() {
    user = getUserChoice()
    computer = getComputerChoice()
    if (user === computer) {
        return "draw"
    } else if (user == "rock" && computer == "scissors") {
        return "rock beats scissors, user wins"
    } else if (user == "rock" && computer == "paper") {
        return "paper beats rock, computer wins"
    } else if (user == 'scissors' && computer == 'rock') {
        return 'rock beats scissors, computer wins'
    } else if (user == 'scissors' && computer == 'paper') {
        return 'scissors beats paper, user wins'
    } else if (user == 'paper' && computer == 'rock') {
        return 'paper beats rock, user wins'
    } else if (user == 'paper' && computer == 'scissors') {
        return 'scissors beats paper, computer wins'
    }
}

function playGame(rounds) {
    let userCount = 0
    let compCount = 0
    for (let i = 0; i < rounds; i++) {
        console.log('user wins: '+userCount)
        console.log('computer wins: '+compCount)
        result = playRound()
        console.log(result)
        if (result.includes('user wins')) {
            userCount++
        } else {
            compCount++
        }
    }
    if (userCount == compCount) {
        console.log('game over, draw')
    } else if (userCount > compCount) {
        console.log('game over, user wins')
    } else {
        console.log('game over, computer wins')
    }
    return
}

playGame(5)