const mongoose = require('mongoose')

const UserCollection = mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  age: { type: String, required: false },
  city: { type: String, required: false },
  country: { type: String, required: false },
  phone: { type: String, required: false },
})

module.exports = mongoose.model('UserCollection', UserCollection)
