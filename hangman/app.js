const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
// this is a constructor function 
const game1 = new hangman('Java Script',3)
puzzleEl.textContent= game1.getPuzzle
guessesEl.textContent= game1.getBackStatues
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent= game1.getPuzzle
    guessesEl.textContent= game1.getBackStatues
})


// making an http request   

const request = new XMLHttpRequest()


request.open('GET','http://puzzle.mead.io/puzzle')
request.send()

request.addEventListener('readystatechange',(e) => {
    if (e.target.readyState === 4) {
        console.log(e.target)
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }
})

