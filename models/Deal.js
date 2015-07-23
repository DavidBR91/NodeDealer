var mongoose = require('mongoose');

var Deal = new mongoose.Schemma {
  score: { type: Number, min: 0, max: 100 },
  deckConfig: [Number],
  date: { type: Date, default: Date.now }
}
