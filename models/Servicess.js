const mongoose = require('mongoose')

const Servicess = mongoose.model('Servicess', {
  name: String,
  contact: Number,
  service: String,
  value: Number,
  date: Date,
})

module.exports = Servicess
