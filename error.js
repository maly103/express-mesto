module.exports = (err, res) => {
  if (err.name === 'ValidationError') {
    const nameField = Object.values(err.errors).map((it) => it.path).join(',');
    res.status(400).send({ message: `Переданы некорректные данные в поле ${nameField}` });
  } else if (err.name === 'DocumentNotFoundError') {
    res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
  } else if (err.name === 'CastError') {
    res.status(400).send({ message: 'Неверный Id' });
  } else {
    res.status(500).send({ message: 'что-то пошло не так' });
  }
};
