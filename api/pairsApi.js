var utils = require('./utils.js')

function getHorizontalPairs (deck) {

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {

      if (deck[i][j].rank === deck[i][j+1].rank){
        deck[i][j].highlight = true;
        deck[i][j+1].highlight = true;
      }
    }
  }
}

function getVerticalPairs (deck) {

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 13; j++) {
      if (deck[i][j].rank === deck[i+1][j].rank) {
        deck[i][j].highlight = true;
        deck[i+1][j].highlight = true;
      }
    }
  }
}

function getDiagonalPairs (deck) {

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 12; j++) {
      if (deck[i][j].rank === deck[i+1][j+1].rank) {
        deck[i][j].highlight = true;
        deck[i+1][j+1].highlight = true;
      }
    }
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 12; j > 0; j--) {
      if (deck[i][j].rank === deck[i+1][j-1].rank) {
        deck[i][j].highlight = true;
        deck[i+1][j-1].highlight = true;
      }
    }
  }
}

function getPairs (deck) {

  deck = utils.listToMatrix(deck, 13);

  getHorizontalPairs(deck);
  getVerticalPairs(deck);
  getDiagonalPairs(deck);

  var newDeck = deck[0].concat(deck[1]).concat(deck[2]).concat(deck[3]);

  return newDeck;
}

exports.getPairs = getPairs;
