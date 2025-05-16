const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cropSchema = new Schema({
  userId: String,
  cropName: String,
  cropYield: Number,
  growingSeason: String,
});

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
