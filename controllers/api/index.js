const router = require("express").Router();
const userRoutes = require("./user-routes");
const commentsRoutes = require("./comments-routes")
// const commentRoutes = require("./projectRoutes");
// const TVshows = require("./tvshows");

router.use("/users", userRoutes);
router.use("/comments", commentsRoutes)
// router.use("/projects", commentRoutes);
// router.use("/projects", TVShows);

module.exports = router;
