const User = require("./user");

const Comments = require("./comments");

User.hasMany(Comments, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Comments };
