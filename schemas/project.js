const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
  platform: {
    type: String,
  },
  URL: {
    type: String,
  },
  image: {
    type: String,
  },
  user_id: {
    type: ObjectId,
    required: true
  }
});

module.exports = mongoose.model('Project', projectSchema);