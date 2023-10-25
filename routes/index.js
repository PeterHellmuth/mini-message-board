var express = require("express");
const Message = require("../models/message");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: req.app.locals.messages,
  });
});

/* GET home page. */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Messageboard" });
});

router.post("/new", function (req, res, next) {
  const newMessage = new Message({
    text: req.body.messageText,
    user: req.body.username,
  });
  newMessage.save();
  req.app.locals.messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
