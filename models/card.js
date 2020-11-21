const mongoose = require('mongoose');

/* eslint no-useless-escape: "error" */
// eslint-disable-next-line no-useless-escape
const regex = /^https?:\/{2}[w{3}\.]{0,1}[^\/][\w\W]{1,}#?$/gi;

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return regex.test(v);
      },
      message: 'Неверный формат!',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',

  },

  likes: {
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,

  },
});
module.exports = mongoose.model('card', cardSchema);
