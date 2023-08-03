const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
  },
  description: {
    type: String,
    required: true,
    minlength: 100,
  },
  url: {
    type: String,
  },
  category: {
    type: String,
    enum: {
      values: ['history', 'travel', 'health', 'fashion', 'art', 'political'],
      message: `{VALUE} is not supported`,
    },
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('Blog', BlogSchema)
