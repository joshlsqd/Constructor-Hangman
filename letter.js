//Letter js
function Letter(char, charLower) {
    this.character = char;
    this.characterLower = charLower;
    this.charDisplay = char;
    this.isGuessed = false;
    this.correct = 0;
    this.displayLetter = function () {
        if(this.isGuessed) {
            this.charDisplay = this.character;
        } else if (this.character === ' ') {
            this.charDisplay = ' ';
        } else {
            this.charDisplay = '_';
        }
    };
    this.guessCorrect = function (guess) {
        if(guess.toLowerCase() === this.characterLower || this.characterLower === ' ') {
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;


