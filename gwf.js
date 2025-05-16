const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gwfSchema = new Schema({
  userId: String,
  irrigationMethod: String,
  plantingDate: {
    type: Date,
    default: Date.now,
  },
  expectedYield: Number,
});

const Gwf = mongoose.model('Gwf', gwfSchema);
module.exports = Gwf;
