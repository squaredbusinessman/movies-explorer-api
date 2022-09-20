const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'Поле имя должно быть заполнено!'],
    minLength: 2,
    maxLength: 30,
  },
  email: {
    type: 'string',
    required: [true, 'Поле email должно быть заполнено!'],
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Пожалуйста, введите корректный email',
    },
  },
  password: {
    type: 'string',
    required: [true, 'Поле пароль должно быть заполнено!'],
    select: false,
  },
});

module.exports = mongoose.model('user', userSchema);
