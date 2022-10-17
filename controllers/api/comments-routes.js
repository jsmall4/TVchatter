const router = require("express").Router();
const { Comments, User } = require("../../models");
const withAuth = require("../../utils/auth");

// View all comments
router.get("/", (req, res) => {
  Comments.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// View a single comment by searching comment_id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const commentData = await Comments.findAll({
      where: {
        id: id,
      },
    });
    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post comments about the tvshow
router.post("/tvshow/:tvshowId", withAuth, async (req, res) => {
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
    res.status(400).json({ error: error });
  }
});

// Update comment based on the comment_id given in the request parameters.
router.put("/:id", withAuth, async (req, res) => {
  const newComment = req.body.newComment;
  try {
    const commentsData = await Comments.update(
      {
        user_comment: newComment,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!commentsData) {
      res.status(404).json({ message: "No comments found with this id!" });
      return;
    }
    res.status(200).json("Comment updated!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete comment based on the comment_id given in the request parameters.
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentsData = await Comments.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!commentsData) {
      res.status(404).json({ message: "No comments found with this id!" });
      return;
    }
    res.status(200).json("Comment deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
