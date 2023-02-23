const mongoose = require('mongoose')

const Despesass = mongoose.model('Despesass', {
  name: String,
  contact: Number,
  services: String,
  value: Number,
  date: Date,
})

module.exports = Despesass
