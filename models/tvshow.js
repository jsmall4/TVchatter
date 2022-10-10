const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our TVshow model
class TVshow extends Model {}
// create fields/columns for TVshow model
TVshow.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tvshow_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tvshow",
  }
);
module.exports = TVshow;
