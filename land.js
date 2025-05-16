const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const landSchema = new Schema({
  userId: String,
  landSize: Number,
  taluka: String,
  district: {
    type: String,
    default: 'pune',
  },
  soilName: String,
});

const Land = mongoose.model('Land', landSchema);
module.exports = Land;
