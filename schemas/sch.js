const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const sch = mongoose.Schema({
  _id: reqString,
  name: reqString,
  img: reqString,
  content: reqString,
})

module.exports = mongoose.model('sch', sch)