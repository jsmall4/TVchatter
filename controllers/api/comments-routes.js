const router = require("express").Router();
const { Comments, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Comments.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/user-comments", (req, res) => {
  Comments.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["tvshow_id"],
  })
    .then((dbCommentData) => {
      const comments = dbCommentData.map((post) => post.get({ plain: true }));
      res.json(comments);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Comments.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    tvshow_id: req.body.tvshow_id,
    tvshow_rating: req.body.tvshow_rating,
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  Comments.update(
    {
      comment_text: req.body.comment_text,
      tvshow_rating: req.body.tvshow_rating,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Comments.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
