const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//Importing Routes
const userRoutes = require("./routes/auth");

//app
const app = express();
//Database connect
const DB = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log(`Database is strted`))
  .catch((err) => console.log(`Database Error ${err}`));

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//routes middleware
// doing this because it will helps in routes autoloading
/* What is routes autoloading?
Ans:  
*/
readdirSync("./routes").map((route) =>
  app.use("/api", require("./routes/" + route))
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port: ${process.env.PORT}`);
});
