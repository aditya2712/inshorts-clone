require("dotenv").config();
const express = require("express");
const cors = require("cors");

require("./db_connection");
const routes = require("./routes/index");

app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
