const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = Crud = mongoose.model('Crud', dataSchema)

