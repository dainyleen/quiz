// Store correct answers
let correctAnswer = 0;

// Store the rank of the user
let rank = '';

// Select the <main> html element
const main = document.querySelector('main')

// Ask 5 questions: keep each answer in a variable and keep track of the number of correct answers
const answer1 = prompt('What is another word for lexicon?')
  if (answer1.toUpperCase() === 'DICTIONARY') {
    correctAnswer += 1
  }
const answer2 = prompt("What is the world's largest ocean?")
  if (answer2.toUpperCase() === 'PACIFIC') {
  correctAnswer += 1
}
const answer3 = prompt('What is the capital of Spain?')
  if (answer3.toUpperCase() === 'MADRID') {
  correctAnswer += 1
}
const answer4 = prompt('Who played Neo in The Matrix movie?')
  if (answer4.toUpperCase() === 'KEANNU REEVES') {
  correctAnswer += 1
}
const answer5 = prompt('What chess piece can only move diagonal?')
  if (answer5.toUpperCase() === 'BISHOP') {
  correctAnswer += 1
}

// Rank player 
if (correctAnswer === 5) {
  rank = 'Gold'
} else if (correctAnswer >= 3) {
  rank = 'Silver'
} else if (correctAnswer >= 2) {
  rank = 'Bronze'
} else {
  rank = 'None'
}

// Output the results to the <main> element
main.innerHTML = `
  <h2>You got ${correctAnswer} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${rank}</strong></p>
`