const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const resumeSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  URL: {
    type: String,
  },
  user_id: {
    type: ObjectId,
    required: true
  }
});

module.exports = mongoose.model('Resume', resumeSchema);