var Letter = require('./letter');

// word js
function Word(movie) {
    this.title = movie;
    this.titlelowercase = movie.toLowerCase().split('');
    this.phraseArr = movie.split('');
    this.numLetters = movie.length;
    this.correctGuesses = 0;
    this.createArr = function () {
        for (let i = 0; i < this.phraseArr.length; i++) {
            this.phraseArr[i]  = new Letter(this.phraseArr[i], this.titlelowercase[i]);
            this.phraseArr[i].displayLetter();
        }
    };
    this.displayArr = function () {
        var arr = [];
        this.phraseArr.forEach(function (value) {
            arr.push(value.charDisplay);
        });
        this.displayWord = arr.join(' ');
    };
    this.displayWord = '';
    this.guessLetter = function (guess) {
        var x = guess;
        var y = 0;
        this.phraseArr.forEach(function (value) {
            value.guessCorrect(x);
            if (value.isGuessed) {
                y += 1;
            }
            value.displayLetter();
        });
        this.correctGuesses = y;
    }
}

module.exports = Word;