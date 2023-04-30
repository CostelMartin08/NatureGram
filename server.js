const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const bodyParser = require('body-parser');
const registerRouter = require("./routes/register");
const uploadRouter = require ("./routes/upload");
const loginRouter = require("./routes/login");
const logoutRouter = require ("./routes/logout");
const updateImgRouter= require ("./routes/updateImg");
const likeruta = require("./routes/likepost");
const unlikeruta = require("./routes/unlikepost");
const deleteruta = require("./routes/deletepost");
const User = require("./Schema/User");
const app = express();

  
mongoose.set('strictQuery', false);
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/WebApp20DB', { useNewUrlParser: true }, { useUnifiedTopology: true });
};
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: "http://localhost:3000", credentials: true,}));
app.use(session({secret: "codulsecret", resave: false, saveUninitialized: false,}));
app.use(cookieParser("codulsecret"));
require("./pachete/passportConfig")(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/upload", uploadRouter);
app.use("/logout", logoutRouter) ;
app.use("/updateImg", updateImgRouter);
app.use("/likeruta", likeruta);
app.use("/unlikeruta", unlikeruta);
app.use("/deletepost", deleteruta);

  
app.get('/users', (req, res) => {


  res.send({ user: req.user });

 
});
 


 





const port = 5000;
app.listen(port, () => `Serverul ruleaza: ${port}`);