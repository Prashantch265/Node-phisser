const express = require("express");
const ejs = require("ejs");
const path = require("path");
const pageRoute = require("./routes/pages.route");
const authRoute = require("./routes/auth.route");

require("dotenv").config();

const app = express();
const CURRENT_WORKING_DIR = process.cwd();

app.set("view engine", "ejs");
app.use("/views", express.static(path.join(CURRENT_WORKING_DIR, "views")));
app.use("/auth", pageRoute);
// app.use("/auth", authRoute);

module.exports = app;
