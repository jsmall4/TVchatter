const router = require("express").Router();
const { User, Comments } = require("../models");
const withAuth = require("../utils/auth");

//renderhome page route.
router.get("/", (req, res) => {
  res.render("homepage");
});

//render signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

//render dashboard page
router.get("/dashboard", withAuth, (req, res) => {
  Comments.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "user_comment",
      "tvshow_id",
    ],
   
  })
    .then((dbCommentData) => {
      const comments = dbCommentData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { comments, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});


router.get("/tvshow/:tvshowId", async (req, res) => {
  const tvshowId = req.params.tvshowId;
  const comments = await Comments.findAll({
    where:{ 
      tvshow_id: tvshowId
    },
    include: [
      User, 
      {
        model: User,
        attributes: ["username"]
      },
    ], 
  });
  console.log(comments);
  res.render("tvshows", {comments: comments || []});
});

router.post("/tvshow/:tvshowId", async (req, res) => {
  const user_id = req.session.user_id;
  const tvshowId = req.params.tvshowId;
  const content = req.body.content;
  try {
    const comments = await Comments.create({
      tvshow_id: tvshowId,
      user_comment: content,
      user_id: user_id,
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({error: error});

  }
  
});

router.post("/signup", async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.status(200).json(user);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
