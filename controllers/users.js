const path = require('path');

const pathToUsers = path.join(__dirname, '..', 'data', 'users.json');
const dataFromFile = require('../utilits/read_file');

module.exports.getUsers = (req, res) => {
  dataFromFile(pathToUsers)
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

module.exports.getUser = (req, res) => {
  const { id } = req.params;
  dataFromFile(pathToUsers)
    .then((data) => {
      const user = data.find((item) => item._id === id);
      if (!user) {
        res.status(500).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
    })
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};
