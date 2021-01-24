class hangman {
    constructor (word, remainGusses) {
        this.word = word.toLowerCase().split('')
        this.remainGusses = remainGusses
        this.includeFun = []
        this.status = 'playing'
    }
    calculatStatus () {
        const letterUnguessed = this.word.every((letters) => this.includeFun.includes(letters) || letters === ' ')
        if (this.remainGusses === 0) {
            this.status = 'failed'
        } else if (letterUnguessed) {
            this.status = 'finished'
        }else {
            this.status = 'playing'
        } 
    }
    get getPuzzle () {
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

    get getBackStatues () {
        if (this.status === 'playing') {
            return `You have ${this.remainGusses} left`
        }else if (this.status === 'failed') {
            return `Nice try the word was "${this.word.join('')}"`
        }else {
            return `Congradulation you guessed the word` 
        }
    }

    makeGuess  (guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.includeFun.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if(this.status !== 'playing') {
            return
        }
    
        if (isUnique) {
            this.includeFun.push(guess)
        }
    
        if (isUnique && isBadGuess) {
            this.remainGusses--  
        }
    
        this.calculatStatus()
    }
}


 
