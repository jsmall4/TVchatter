const router = require("express").Router();
const { TVshow, User, Comments } = require("../models");

//renderhome page route.

router.get("/", (req, res) => {
  console.log("HIIIII");
  res.render("homepage");
});

//render signup page

router.get("/signup", (req, res) => {
  res.render("signup");
});

//render dashboard page

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/", (req, res) => {
  TVshow.findAll({
    attributes: ["poster"],
  })
    .then((tvreview_db) => {
      let movies = tvreview_db.map((tvshow) => tvshow.get({ plain: true }));
      const shuffled = tvshow.sort(() => 0.5 - Math.random());
      TVshow = shuffled.slice(0, 9);
      res.render("homepage", {
        tvshow,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/tvshow/:id", (req, res) => {
  TVshow.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["comment_text", "user_id", "tvshow_id", "createdAt"],
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      },
    ],
  })
    .then((tvreview_db) => {
      if (!tvreview_db) {
        res.status(404).json({ message: "No show found with this id" });
        return;
      }

      const blog = tvreview_db.get({ plain: true });
      res.render("TVshow", { tvshow, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
