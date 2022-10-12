const router = require("express").Router();
const userRoutes = require("./user-routes");
// const commentRoutes = require("./projectRoutes");
// const TVshows = require("./tvshows");

router.use("/users", userRoutes);
// router.use("/projects", commentRoutes);
// router.use("/projects", TVShows);

module.exports = router;
