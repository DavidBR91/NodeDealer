var express = require('express');
var router = express.Router();
var Deal = require('../models/Deal');
var deckApi = require('../api/cardsApi.js');

router.post('/', function (req, res) {

  var deck = deckApi.shuffleDeck();
  var dealObj = deckApi.calculateScore(deck);

  var deal = new Deal ({
    score: dealObj.score,
    deckConfig: dealObj.deck
  });

  deal.save(deal, function (err, result) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send({
        id: result._id,
        score: result.score,
        deck: result.deckConfig
      });
    }
  });

});

router.get('/', function (req, res) {

  Deal.find().exec(function (err, docs) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send({
        deals: docs
      });
    }
  });

});

module.exports = router;
