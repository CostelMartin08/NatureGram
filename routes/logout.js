const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {

  req.logout(err => {
    if (err) throw err;
    res.send("Sunteti deconectat!");
  });
});
module.exports = router