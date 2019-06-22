const express = require("express");
const router = express.Router();

// Set Relationship model
const { Relationship } = require("../database/models");

/**
 * CreateRelationship endpoint
 * @route POST /relationships
 * @desc Create a relationship
 * @access Public
 */
router.post("/", async (req, res, next) => {
  try {
    let newRelationship = await Relationship.create(req.body);
    res.status(200).send(newRelationship);
  } catch (err) {
    next(err);
  }
}); // End CreateRelationship endpoint

/**
 * FindAllRelationships endpoint
 * @route GET /relationships
 * @desc Find all relationships
 * @access Public
 */
router.get("/", async (req, res, next) => {
  try {
    let allRelationships = await Relationship.findAll({
      order: [["id", "DESC"]]
    });
    res.status(200).send(allRelationships);
  } catch (err) {
    next(err);
  }
}); // End FindAllRelationships endpoint

/**
 * UpdateRelationship endpoint
 * @route PUT /relationships/:relationshipId
 * @desc Update a relationship
 * @access Public
 */
router.put("/:relationshipId", async (req, res, next) => {
  try {
    let updatedRelationship = await Relationship.update({
      where: {
        id: req.params.relationshipId
      }
    });
    res.status(200).send(updatedRelationship);
  } catch (err) {
    next(err);
  }
}); // End UpdateRelationship endpoint

/**
 * DeleteRelationship endpoint
 * @route DELETE /relationships/:relationshipId
 * @desc Delete a relationship
 * @access Public
 */
router.delete("/:relationshipId", async (req, res, next) => {
  try {
    const targetRelationship = await Relationship.destroy({
      where: {
        id: req.params.relationshipId
      }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}); // End DeleteRelationship endpoint

module.exports = router;
