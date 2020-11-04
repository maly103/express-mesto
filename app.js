const express = require("express");
const { PORT = 3000 } = process.env;
const path = require("path");
const routerUsers = require("./routers/users.js");
const routerCards = require("./routers/cards.js");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routerUsers, routerCards);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
