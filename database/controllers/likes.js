const Like = require('../models').Like;

module.exports = {
    create(req, res) {
        return Like.create(req.body)
            .then(like => res.status(200).json(like))
            .catch(err => res.status(400).json(err));
    },
    list(req, res) {
        return Like.findAll({
            order: [["id", "ASC"]]
        })
            .then(likes => res.status(200).json(likes))
            .catch(err => res.status(400).json(err));
    },
    delete(req, res) {
        return Like.destroy({ where: { id: req.params.likeId } })
            .then(() =>
                res.status(200).json({ message: 'Removed like' })
            )
            .catch(err => res.status(400).json(err));
    }
};
