const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: String,
    nume: String,
    prenume: String,
    email: String,
    password: String,
    genul: String,
    googleId: String,
    profileimg: String,
    Postare: [{ mediaContent: String, timeUpload: Number, textUpload: String, like: [], coment:[{_id:String, textC:String, timeUpload: Number}] }],
}, { strict: false });


module.exports = mongoose.model("Users", user);