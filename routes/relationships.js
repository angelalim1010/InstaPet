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
router.post("/", (req, res, next) => {
  return Relationship.create(req.body)
    .then(relationship => res.status(200).json(relationship))
    .catch(err => res.status(400).json(err));
}); // End CreateRelationship endpoint

/**
 * FindAllRelationships endpoint
 * @route GET /relationships
 * @desc Find all relationships
 * @access Public
 */
router.get("/", (req, res, next) => {
  return Relationship.findAll({
    order: [["id", "DESC"]]
  })
    .then(relationships => res.status(200).json(relationships))
    .catch(err => res.status(400).json(err));
}); // End FindAllRelationships endpoint

/**
 * UpdateRelationship endpoint
 * @route PUT /relationships/:relationshipId
 * @desc Update a relationship
 * @access Public
 */
router.put("/:relationshipId", (req, res, next) => {
  return Relationship.update({
    where: {
      id: req.params.relationshipId
    }
  })
    .then(relationship => res.status(200).json(relationship))
    .catch(err => res.status(400).json(err));
}); // End UpdateRelationship endpoint

/**
 * DeleteRelationship endpoint
 * @route DELETE /relationships/:relationshipId
 * @desc Delete a relationship
 * @access Public
 */
router.delete("/:relationshipId", (req, res, next) => {
  return Relationship.destroy({
    where: {
      id: req.params.relationshipId
    }
  })
    .then(() =>
      res.status(200).json({ message: "Relationship successfully deleted" })
    )
    .catch(err => res.status(400).json(err));
}); // End DeleteRelationship endpoint

module.exports = router;
