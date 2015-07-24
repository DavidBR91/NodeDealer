var utils = require('./utils.js');

function initDeck () {

  var deck = [];
  var i = 0;

  while ( i < 52 ) {
    deck.push(i);
    i++;
  }

  return deck;
}

function shuffleDeck () {

  var deck = initDeck();

  /* Found at: http://www.kirupa.com/html5/shuffling_array_js.htm */
  for (var i = deck.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = deck[randomIndex];

    deck[randomIndex] = deck[i];
    deck[i] = itemAtIndex;
  }

  return deck;
}

function calculateScore (deck) {

  var score = 0;
  var elem;
  var perfectScore = 104;

  deck = utils.listToMatrix(deck, 13);

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 13; j++) {

      elem = deck[i][j];

      if ( Math.floor(elem / 13) === i) {
        score++;
      }

      if (elem % 13 === j) {
        score++;
      }
    }
  }

  return (score / perfectScore) * 100;
}

exports.shuffleDeck = shuffleDeck;
exports.calculateScore = calculateScore;
