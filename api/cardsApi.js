function initDeck () {

  var deck = [];
  var i = 0;

  while ( i < 52 ) {
    deck.push(i);
    i++;
  }

  return deck;
}

/* Found at
  http://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-arraymatrix-in-javascript-or */
function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
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

  return listToMatrix(deck, 13);
}


function calculateScore (deck) {

  var score = 0;
  var elem;
  var perfectScore = 104;

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
