const path = require("path");
const pathToCards = path.join(__dirname, "..", "data", "cards.json");
const dataFromFile = require("../utilits/read_file");

module.exports.getCards = (req, res) => {
  dataFromFile(pathToCards)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(404).send({ message: "файл не найден" });
    });
};
