const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    switch (file.fieldname) {
      case 'file':
        cb(null, "client/public/uploads/UserPhoto");
        break;
      case 'fileProfileImG':
        cb(null, "client/public/uploads/UserProfilePhoto");
        break;
      default:
        cb(null, "client/public/uploads");
    }
  },
  
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname + "-" + Date.now() + ".jpg");
  },
});
  
const upload = multer({ storage: storage });
module.exports = upload;















//const multer = require("multer");
//const storage = multer.diskStorage({
 // destination: function (req, file, cb) {
 //   cb(null, "client/public/uploads");
 // },
 // filename: function (req, file, cb) {
 //   cb(null,  file.originalname + "-" + Date.now() + ".jpg");
 //},
//});
  
//const upload = multer({ storage: storage });
//module.exports = upload;