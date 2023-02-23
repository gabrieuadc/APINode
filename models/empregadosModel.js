const mongoose = require('mongoose')

const Empregadoss = mongoose.model('Empregadoss', {
  name: String,
  contact: Number,
  service: String,
  salar: Number,
  adm: Date,
})

module.exports = Empregadoss
