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

function getSuit (n) {

  var suit;

  switch (n) {
    case 0:
      suit = 'spades';
      break;
    case 1:
      suit = 'diams';
      break;
    case 2:
      suit = 'hearts';
      break;
    case 3:
      suit = 'clubs';
      break;
  }

  return suit;
}

function getValue (n) {

  var value = (n + 1) % 13;

  switch (value) {
    case 1:
      value = 'A';
      break;
    case 11:
      value = 'J';
      break;
    case 12:
      value = 'Q';
      break;
    case 0:
      value = 'K';
      break;
  }

  return value.toString();
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
  var newDeck = [];
  var toInsert;
  var suit;

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

      toInsert = {
        suit: getSuit(Math.floor(elem / 13)),
        rank: getValue(elem)
      };

      newDeck.push(toInsert);
    }
  }

  return {
   score: ((score / perfectScore) * 100).toFixed(2),
   deck: newDeck
  };
}

exports.shuffleDeck = shuffleDeck;
exports.calculateScore = calculateScore;
