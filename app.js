const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoConnect = require("./utils/database").mongoConnect;
const errorController = require("./controllers/error");
const User = require("./models/user")

const app = express();

app.set("view engine", "pug");

const adminRoutes = require("./routes/admin");
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById('608ec5d934a11e5d8b6674eb')
    .then(user => {
      req.user = new User (user.name, user.email, user.cart, user._id)
      next();
    })
    .catch(err => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});
