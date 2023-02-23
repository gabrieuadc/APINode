const mongoose = require('mongoose')

const Estoquee = mongoose.model('Estoquee', {
  prod: String,
  un: String,
  qtd: Number,
  value: Number,
  date: Date,
})

module.exports = Estoquee
