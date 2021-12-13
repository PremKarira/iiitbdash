const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const ugh = mongoose.Schema({
  _id: reqString,
  content : { type : Array , "default" : [] }
})

module.exports = mongoose.model('ugh', ugh)