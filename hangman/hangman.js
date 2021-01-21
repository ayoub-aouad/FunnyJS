const hangman = function (word, remainGusses) {
    this.word = word.toLowerCase().split('')
    this.remainGusses = remainGusses
    this.includeFun = ['c']
}

hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.includeFun.includes(letter) || letter === ' ') {
            puzzle += letter
        }else {
            puzzle += '*'
        }
    })
    return puzzle
}

hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.includeFun.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.includeFun.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.remainGusses--
    }
}

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('guesses')
// this is a constructor function 
const word1 = new hangman('ca me fait mal',20)
const word2 = new hangman('ca va ma belle',30)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    word1.makeGuess(guess)
    puzzleEl.textContent= word1.getPuzzle()
    guessesEl.textContent= word1.remainGusses
})


 
