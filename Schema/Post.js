const mongoose = require('mongoose');



const post = new mongoose.Schema({
  _id: String,
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  username: String,
  Postare: [{ mediaContent: String, timeUpload: Number, textUpload: String }],
}, { strict: false });


module.exports = mongoose.model("Posts", post)