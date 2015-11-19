var mongoose = require('mongoose');
var Interest = require('./interest');

var EventSchema = new mongoose.Schema({
  name: String,
  interests: [Interest.schema],
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Event', EventSchema);
