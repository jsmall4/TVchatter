const router = require("express").Router();
const userRoutes = require("./user-routes");
const commentsRoutes = require("./comments-routes");

router.use("/users", userRoutes);
router.use("/comments", commentsRoutes);

module.exports = router;
