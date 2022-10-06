const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentRoutes = require("./projectRoutes");
const TVRoutes = require("./TVRoutes");

router.use("/users", userRoutes);
router.use("/projects", commentRoutes);
router.use("/projects", TVRoutes);

module.exports = router;


