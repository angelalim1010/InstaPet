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
router.post("/", async (req, res, next) => {
  try {
    let newLike = await Like.create(req.body);
    res.status(200).json(newLike);
  } catch (err) {
    next(err);
  }
}); // End AddLike endpoint

/**
 * FindAllLikes endpoint
 * @route GET /likes
 * @desc Find all likes
 * @access Public
 */
router.get("/", async (req, res, next) => {
  try {
    // get likes in descending order by id
    let allLikes = await Like.findAll({
      order: [["id", "DESC"]]
    });
    res.status(200).json(allLikes);
  } catch (err) {
    next(err);
  }
}); // End FindAllLikes endpoint

/**
 * UpdateLike endpoint
 * @route PUT /likes/:likeId
 * @desc Update a like
 * @access Public
 */
router.put("/:likeId", async (req, res, next) => {
  try {
    let updatedLike = await Like.update({
      where: {
        id: req.params.likeId
      }
    });
    res.status(200).json(updatedLike);
  } catch (err) {
    next(err);
  }
}); // End UpdateLike endpoint

/**
 * DeleteLike endpoint
 * @route DELETE /likes/:likeId
 * @desc Delete a like
 * @access Public
 */
router.delete("/:likeId", async (req, res, next) => {
  try {
    await Like.destroy({
      where: {
        id: req.params.likeId
      }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}); // End DeleteLike endpoint

module.exports = router;
