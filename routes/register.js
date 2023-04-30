const express = require("express")
const router = express.Router()
const User = require("../Schema/User");
const bcrypt = require('bcrypt');


router.post('/', (req, res) => {

  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send('Exista!');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        nume: req.body.name,
        prenume: req.body.prename,
        genul: req.body.gen

      });
      await newUser.save();
      res.send("Utilizator Creat!")
    }
  });
});
module.exports = router