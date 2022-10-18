const router = require("express").Router();
const { Comments } = require("../models");
const withAuth = require("../utils/auth");

// Render dashboard page
router.get("/", withAuth, (req, res) => {
  Comments.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "user_comment", "tvshow_id"],
  })
    .then((dbCommentData) => {
      const comments = dbCommentData.map((post) => post.get({ plain: true }));
      console.log(comments);
      res.render("dashboard", { comments, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
