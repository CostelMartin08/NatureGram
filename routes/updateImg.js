const express = require("express")
const router = express.Router()
const User = require("../Schema/User");
const upload = require("../pachete/multerConfig");

const checkAuthenticated = function (req, res, next) {
   if (req.isAuthenticated()) {
    return next();
  }
  res.send("Nu este autentificat!");
};


router.post('/', checkAuthenticated, upload.single("fileProfileImG"), async (req, res) => {

  console.log(req.user)
  User.updateOne({ _id: req.user },
    { $set: { profileimg: "/uploads/UserProfilePhoto/" + req.file.filename } },
    { new: true, overwrite: true },
    function (err) {
      if (!err) {
        res.send("Fotografie incarcata cu succes!");
      } else { res.send("Ups! A aparut o problema!") }
    })
});
module.exports = router