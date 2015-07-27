var mongoose = require('mongoose');

var Deal = new mongoose.Schema ({
  score: { type: Number, min: 0, max: 100 },
  deckConfig: [ { suit: String, rank: String, highlight: Boolean } ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Deal', Deal);
