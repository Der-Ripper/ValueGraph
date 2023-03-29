const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  email: {type: String, required: true, unique:true},
  password: {type: String, required: true},
  inpmass:[{type: String}],
  date: [{type: Date, default: Date.now}]
});

module.exports = model(name = 'User', schema);