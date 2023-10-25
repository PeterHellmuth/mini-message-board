var express = require("express");
const Message = require("../models/message");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  req.app.locals.messages = await Message.find();
  res.render("index", {
    title: "Mini Messageboard",
    messages: req.app.locals.messages,
  });
});

router.post("/new", async function (req, res, next) {
  const newMessage = new Message({
    text: req.body.messageText,
    user: req.body.username,
  });
  await newMessage.save();
  req.app.locals.messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
