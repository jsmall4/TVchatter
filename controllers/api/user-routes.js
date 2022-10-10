const router = require("express").Router();
const { User, TVshow, Comment } = require("../../models");
require("dotenv").config();

// edit attributes to suit
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "tvshow_id", "user_id"],
        include: {
          model: TVshow,
          attributes: ["title", "poster"],
        },
      },
    ],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
