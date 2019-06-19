const Relationships = require('../models').Relationships;

module.exports = {
  create(req, res, next) {
    console.log(req.body);
    return Relationships.create(req.body)
      .then(relationship => res.status(200).json(relationship))
      .catch(err => res.status(400).json(err));
  },
  list(req, res, next) {
    return Relationships.finAll({
      order: [['id', 'DESC']]
    })
      .then(relationships => res.status(200).json(relationships))
      .catch(err => res.status(400).json(err));
  },
  update(req, res, next) {
    return Relationships.update(req.body, { where: { id: req.params.id } })
      .then(relationship => res.status(200).json(relationship))
      .catch(err => err.status(400).json(err));
  },
  delete(req, res, next) {
    return Relationships.destroy({ where: { id: req.params.id } })
      .then(() => res.status(200).send({ message: 'Relationship terminated' }))
      .catch(err => res.status(400).json(err));
  }
};
