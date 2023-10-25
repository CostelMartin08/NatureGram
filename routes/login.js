const express = require("express")
const router = express.Router()
const passport = require('passport');

router.post('/', (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(400).send('Bad Request');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Utilizator Conectat!");
      });
    }
  })(req, res, next);        
});
module.exports = router         