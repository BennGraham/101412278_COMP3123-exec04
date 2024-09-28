// Benn Graham - 101412278
const express = require("express");
const app = express();
const routes = require("./routes.js");
const port = process.env.PORT || 3000;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
