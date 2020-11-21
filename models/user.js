const mongoose = require('mongoose');
/* eslint no-useless-escape: "error" */
// eslint-disable-next-line no-useless-escape
const regex = /^https?:\/{2}[w{3}\.]{0,1}[^\/][\w\W]{1,}#?$/gi;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return regex.test(v);
      },
      message: 'Неверный формат!',
    },
  },
});
module.exports = mongoose.model('user', userSchema);
