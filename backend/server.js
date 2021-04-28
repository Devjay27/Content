const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");
const contRouter = require("./routes/route");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.log.bind(console, "DB connection error"));

app.get("/", (req, res) => {
  console.log("Content Page");
});

app.use("/api", contRouter);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
});
