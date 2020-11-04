const fsPromises = require("fs").promises;

module.exports = (path) => {
  return fsPromises.readFile(path, { encoding: "utf8" }).then((data) => {
    return JSON.parse(data);
  });
};
