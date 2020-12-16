const User = require("../models/user");

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({
      email: email,
      password: password
  });

  user.save()
  .then(result => {
      res.status(200).json({ message: "User data received", data: result });
  })
  .catch(err => console.log(err));
};
