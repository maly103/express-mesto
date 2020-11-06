const fsPromises = require('fs').promises;

module.exports = (path) => fsPromises.readFile(path, { encoding: 'utf8' }).then((data) => JSON.parse(data));
