const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = process.env;

// PORT, DB_PW, DB_NAME, host?

module.exports = sequelize;
