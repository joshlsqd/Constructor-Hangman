var prompt = require('prompt');
var Word = require('./word');

// movies to pick from
const movies = ['The Shape of Water', 'Thor Ragnarok', 'The Greatest Showman', 'Three Billboards Outside Ebbing Missouri', 'Jumanji Welcome to the Jungle',
    'The Post', 'Call Me by Your Name', 'Darkest Hour', 'Blade Runner 2049', 'Phantom Thread', 'I Tonya', 'Get Out', 'It', 'Star Wars The Last Jedi',
    'Lady Bird', 'Hostiles'  , 'Mollys Game' , 'Coco', 'Dunkirk', 'Downsizing'];

var movieTitle = '';
var guessRemaining = 0;
var diff = 0;

newGame();


function newGame() {
    movieTitle = new Word(movies[Math.round(Math.random() * 19)]);
    guessRemaining = 9;

    movieTitle.createArr();
    movieTitle.displayArr();
    movieTitle.guessLetter(' ');
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log('Can you guess one of the top 20 movies from last year?');
    console.log(movieTitle.displayWord);
    diff = movieTitle.title.length;
    gamePrompt();
// Start the prompt
}

function gameGuess() {

    if (diff === movieTitle.numLetters - movieTitle.correctGuesses) {
        guessRemaining -= 1;
        console.log('Incorrect');
        if (!guessRemaining) {
            console.log('Sorry you have run out of guesses :(');
            newGame();
        } else {
            console.log(guessRemaining + ' guesses remaining');
            console.log('===================================');
            console.log(movieTitle.displayWord);
            gamePrompt();
        }
    } else {
        console.log('Correct');
        console.log('===================================');
        if (movieTitle.numLetters === movieTitle.correctGuesses) {
            console.log('You guessed the movie!!');
            console.log(movieTitle.title);
            newGame();
        } else {
            console.log(movieTitle.displayWord);
            diff = movieTitle.numLetters - movieTitle.correctGuesses;
            gamePrompt();
        }
    }

}

function gamePrompt() {
    prompt.start();
    prompt.get(['guess'], function (err, result) {
        console.log('');
        console.log('Your Guess: ' + result.guess);
        movieTitle.guessLetter(result.guess);
        movieTitle.displayArr();
        gameGuess();
    });
}

