var mongoose = require('mongoose');

var InterestSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Interest', InterestSchema);
