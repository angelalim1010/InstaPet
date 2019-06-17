const router = require("express").Router();
const User = require("../database/models").User;
module.exports = router;

router.get("/me", (req, res, next) => {
  res.json(req.body || {});
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    });
    if (user) {
      console.log("user found");
      req.login(user, err => (err ? next(err) : res.json(user)));
    } else {
      const err = new Error("Incorrect email or password!");
      err.status = 401;
      throw err;
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy(err => {
    if (err) return next(err);
    res.status(204).end();
  });
});
