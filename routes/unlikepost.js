const express = require("express")
const router = express.Router()
const User = require("../Schema/User");


const checkAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send("Nu este autentificat!");
};

router.delete('/', checkAuthenticated, (req, res) => {
  User.find({}, function (err, foundUsers) {
    if (err) {
      console.log(err);
    } else {
      foundUsers.map(founduser => {
        founduser.Postare.map(postarea => {
          if (postarea.timeUpload === req.body.liKe) {
            User.updateOne(
              { 'Postare.timeUpload': postarea.timeUpload },
              { $pull: { 'Postare.$.like': req.user.prenume } },
              (err, result) => {
                if (err) {
                  console.error(err);
                  res.status(500).send('Eroare server!');
                } else {
                  console.log('Like eliminat!');
                  res.send("Cerere de eliminare acceptata!(unlike)");
                }
              }
            );
          }
        });
      });
    }
  });
});
module.exports = router