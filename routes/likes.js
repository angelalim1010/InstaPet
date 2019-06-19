const express = require("express");
const router = express.Router();

// Set Like model
const { Like } = require("../database/models");

/**
 * AddLike endpoint
 * @route POST /likes
 * @desc Add a like
 * @access Public
 */
router.post("/", (req, res, next) => {
  return Like.create(req.body)
    .then(like => res.status(200).json(like))
    .catch(err => res.status(400).json(err));
}); // End AddLike endpoint

/**
 * FindAllLikes endpoint
 * @route GET /likes
 * @desc Find all likes
 * @access Public
 */
router.get("/", (req, res, next) => {
  return Like.findAll({
    order: [["id", "DESC"]]
  })
    .then(likes => res.status(200).json(likes))
    .catch(err => res.status(400).json(err));
}); // End FindAllLikes endpoint

/**
 * UpdateLike endpoint
 * @route PUT /likes/:likeId
 * @desc Update a like
 * @access Public
 */
router.put("/:likeId", (req, res, next) => {
  return Like.update({
    where: {
      id: req.params.likeId
    }
  })
    .then(like => res.status(200).json(like))
    .catch(err => res.status(400).json(err));
}); // End UpdateLike endpoint

/**
 * DeleteLike endpoint
 * @route DELETE /likes/:likeId
 * @desc Delete a like
 * @access Public
 */
router.delete("/:likeId", (req, res, next) => {
  return Like.destroy({
    where: {
      id: req.params.likeId
    }
  })
    .then(() => res.status(200).json({ message: "Like successfully deleted" }))
    .catch(err => res.status(400).json(err));
}); // End DeleteLike endpoint

module.exports = router;
