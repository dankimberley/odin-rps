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

const resultText = document.getElementById('result')

let userScore = 0
let compScore = 0

function playRound(user) {
    computer = getComputerChoice()
    if (user === computer) {
        userScore++
        compScore++
        updateScores()
        return "draw"
    } else if (user == "rock" && computer == "scissors") {
        userScore++
        updateScores()
        return "rock beats scissors, user wins"
    } else if (user == "rock" && computer == "paper") {
        compScore++
        updateScores()
        return "paper beats rock, computer wins"
    } else if (user == 'scissors' && computer == 'rock') {
        compScore++
        updateScores()
        return 'rock beats scissors, computer wins'
    } else if (user == 'scissors' && computer == 'paper') {
        userScore++
        updateScores()
        return 'scissors beats paper, user wins'
    } else if (user == 'paper' && computer == 'rock') {
        userScore++
        updateScores()
        return 'paper beats rock, user wins'
    } else if (user == 'paper' && computer == 'scissors') {
        compScore++
        updateScores()
        return 'scissors beats paper, computer wins'
    }
}

const userBox = document.getElementById('user-score')
const compBox = document.getElementById('comp-score')

function updateScores() {
    if (userScore == 5) {
        resultText.textContent = 'User wins! Play again'
        userScore = 0
        compScore = 0
    } else if (compScore == 5) {
        resultText.textContent = 'Computer wins! Play again'
        userScore = 0
        compScore = 0
    }
    userBox.textContent = `User: ${userScore}`
    compBox.textContent = `Computer: ${compScore}`
    
}



const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id)
    })
})



function announceScore(res) {
    console.log(res)
    resultText.textContent = res
}


/* function playGame(rounds) {
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
 */
