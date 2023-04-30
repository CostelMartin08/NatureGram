const express = require("express")
const router = express.Router()
const User = require("../Schema/User");

const checkAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send("Nu este autentificat!");
};

router.post("/", checkAuthenticated, (req, res) => {

  User.find({}, function (err, foundUsers) {
    if (err) {
      console.log(err); 
    } else {
      foundUsers.map(founduser => {
        founduser.Postare.map(postarea => { 
          if (postarea.timeUpload === req.body.liKe) {
            User.findOneAndUpdate(
              {
                _id: founduser._id,
                'Postare.timeUpload': postarea.timeUpload
              },
              {
                $push: {
                  'Postare.$.like': req.user.prenume
                }
              },
              {
                new: true,
                overwrite: true
              },
              function (err, post) {
                if (err) throw err;
                if (post) {
                  console.log('Like adaugat!');
                }
              }
            );
          }
        });
      });
    }
  });
  res.send("Cerere de adaugare acceptata!(like)");
})

module.exports = router