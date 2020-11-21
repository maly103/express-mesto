const express = require('express');

const { PORT = 3000 } = process.env;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routerUsers = require('./routers/users.js');
const routerCards = require('./routers/cards.js');

const app = express();
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5fb824832237cb3808124f16',
  };

  next();
});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routerUsers, routerCards);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`App listening on port ${PORT}`);
  /* eslint-enable no-console */
});
