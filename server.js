const express = require('express');
const app = express();

const path = require('path');
const passport = require('passport');
const cookieParser = require("cookie-parser");
const session = require('express-session');


const registerRouter = require("./routes/register");
const uploadRouter = require("./routes/upload");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const updateImgRouter = require("./routes/updateImg");
const likeruta = require("./routes/likepost");
const unlikeruta = require("./routes/unlikepost");
const deleteruta = require("./routes/deletepost");

require('dotenv').config();
const database = require('./Schema/mongoConnect');


app.use(express.static(path.resolve(__dirname, './client/build')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
  secret: process.env.SECRET_CODE,
  saveUninitialized: true,
  resave: false,
  maxAge: 1000 * 60 * 15,

}));

app.use(cookieParser(process.env.SECRET_CODE));


require("./pachete/passportConfig")(passport);
app.use(passport.initialize());
app.use(passport.session());


app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/upload", uploadRouter);
app.use("/logout", logoutRouter);
app.use("/updateImg", updateImgRouter);
app.use("/likeruta", likeruta);
app.use("/unlikeruta", unlikeruta);
app.use("/deletepost", deleteruta);


app.get('*', (req, res) => {

  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));


});


app.listen(process.env.PORT || 5000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});