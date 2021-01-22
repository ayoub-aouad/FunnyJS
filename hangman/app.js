const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
// this is a constructor function 
const game1 = new hangman('Cat',2)
puzzleEl.textContent= game1.getPuzzle()
guessesEl.textContent= game1.getBackStatues()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent= game1.getPuzzle()
    guessesEl.textContent= game1.getBackStatues()
})

