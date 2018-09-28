var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Arbre = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'arbres'
});

module.exports = mongoose.model('Arbre', Arbre);
