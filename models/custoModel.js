const mongoose = require('mongoose')

const Custoss = mongoose.model('Custoss', {
  mpd: Number,
  mod: Number,
  cif: Number,
  cpp: Number,
  date: Date,
})

module.exports = Custoss
