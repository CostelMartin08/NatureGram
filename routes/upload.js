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

router.get('/', (req, res) => {
  User.find({}, function (err, foundUsers) {
    if (err) {
      console.log(err);
      res.status(500).send({ error: 'Error finding users in the database.' });
    } else {
      if (foundUsers) {
        res.send({
          users: foundUsers,
        });
      }
    }
  });
});

router.post('/', checkAuthenticated, upload.single("file"), (req, res) => {

  const text = req.body.text;
  const file = req.file?.filename;
  const time = Date.now();
  const userID = req.user._id;

  const Postare = { _id: userID, mediaContent: "/uploads/UserPhoto/" + file, timeUpload: time, textUpload: text };
  User.findOneAndUpdate({ _id: userID }, { $push: { Postare: Postare } }, { upsert: true, new: true }, function (err, post) {
    if (err) throw err;
    if (!post) {
      User.create({ Postare: Postare }, function (err, post) {
        if (!err) {
          console.log('Post created: ', post);
          res.send("Postare Creata!")
        }
      });
    } else {
      if (!err) {
        console.log('Post updated: ', post);
        res.send('true')
      }

    }
  });
});



router.post("/coment", checkAuthenticated, upload.single("coment"), (req, res) => {
  const coment = req.body.coment;
  const postcoment = req.body.userpost;

  User.find({}, function (err, foundUsers) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      foundUsers.forEach(founduser => {
        founduser.Postare.forEach(postarea => {
          if (postarea.timeUpload == postcoment) {
            User.findOneAndUpdate(
              {
                _id: founduser._id,
                'Postare.timeUpload': postarea.timeUpload
              },
              {
                $push: {
                  'Postare.$.coment': [{_id: req.user._id, textC:coment, timeUpload: postarea.timeUpload} ]
                }
              },
              {
                new: true,
                overwrite: true
              },
              function (err, post) {
                if (err) {
                  console.error(err);
                  res.sendStatus(500);
                }
                if (post) {
                  console.log('Comentariu adaugat!');
                  res.send('ok')
                }
              }
            );
          }
        });
      });
    }
  });
});




router.get('/comentreact', checkAuthenticated, async (req, res) => {
  try {
    const users = await User.find();
    const usersAndComments = users.map(user => {
      const comments = user.Postare.map(post => post.coment);
      const timeupload = user.Postare.map(post => post.timeUpload);
      return {
        _id: user._id,
        comments: comments,
        timeUpload: timeupload
      };
    });
    res.send(usersAndComments);
  } catch (err) {
    console.log(err);
    res.status(500).send('Eroare server');
  }
});
module.exports = router