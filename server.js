const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;
