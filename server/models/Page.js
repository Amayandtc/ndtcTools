const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model('Page', pageSchema);
