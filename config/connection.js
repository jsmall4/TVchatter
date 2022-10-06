const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = process.env. {
    host: "localhost",
    dialect: "mysql",
    port: 3001,
}



// PORT, DB_PW, DB_NAME, host?


module.exports = sequelize;
