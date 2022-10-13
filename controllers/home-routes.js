const router = require("express").Router();
const { TVshow, User, Comments } = require("../models");
// const withAuth = require("../utils/auth");

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

// router.get("/tvshow/:id", (req, res) => {
//   TVshow.findOne({
//     where: {
//       id: req.params.id,
//     },
//     include: [
//       {
//         model: User,
//         attributes: ["username"],
//       },
//       {
//         model: Comment,
//         attributes: ["comment_text", "user_id", "tvshow_id", "createdAt"],
//         include: [
//           {
//             model: User,
//             attributes: ["username"],
//           },
//         ],
//       },
//     ],
//   })
//     .then((tvreview_db) => {
//       if (!tvreview_db) {
//         res.status(404).json({ message: "No show found with this id" });
//         return;
//       }

//       const blog = tvreview_db.get({ plain: true });
//       res.render("TVshow", { tvshow, loggedIn: req.session.loggedIn });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get("/tvshow/:tvshowId", async (req, res) => {
  const tvshowId = req.params.tvshowId;
  const comments = await Comments.findAll({where:{tvshowId: tvshowId}});
  console.log(comments);
  res.render("tvshows", {comments: comments || []});
});

router.post("/tvshow/:tvshowId", async (req, res) => {
  const user_id = req.session.user_id;
  const tvshowId = req.params.tvshowId;
  const content = req.body.content;//{content: "comment here"}
  try {
    const comments = await Comments.create({
      tvshowId: tvshowId,
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
