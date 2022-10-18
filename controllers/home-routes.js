const router = require("express").Router();
const { User, Comments } = require("../models");
const withAuth = require("../utils/auth");

// render home page route.
router.get("/", (req, res) => {
  res.render("homepage");
});

// render signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// render log in page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// render tvshow page with comments about that tvshow
router.get("/tvshow/:tvshowId", async (req, res) => {
  const tvshowId = req.params.tvshowId;
  const comments = await Comments.findAll({
    where: {
      tvshow_id: tvshowId,
    },
    include: [
      User,
      {
        model: User,
        attributes: ["username"],
      },
    ],
  });
  console.log(comments);
  res.render("tvshows", { comments: comments || [] });
});

module.exports = router;
