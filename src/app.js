const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const pubilcDirectoryPath = path.join(__dirname, "../public");
const hbs = require("hbs");
const { determine, determineLong } = require("./utils/determine");

app.use(express.static(pubilcDirectoryPath));

app.set("view engine", "hbs");

hbs.registerHelper("list", function(context, options) {
  let ret = "<div>";
  for (let i = 0, j = context.length; i < j; i++) {
    ret = ret + "<div class='content-words'>" + context[i] + "</div><br />";
  }

  return ret + "</div>";
});

hbs.registerHelper("list2", function(context, options) {
  let ret = "<div>";
  for (let i = 0, j = context.length; i < j; i++) {
    ret = ret + "<span class='content_title'>" + context[i] + "</span><br />";
  }

  return ret + "</div>";
});

app.get("", (req, res) => {
  res.render("index");
});

app.get("/kpop", (req, res) => {
  res.render("kpop");
});

app.get("/bts", (req, res) => {
  res.render("bts");
});

app.get("/natural", (req, res) => {
  res.render("natural");
});

app.get("/culinary", (req, res) => {
  res.render("culinary");
});

app.get("/historical", (req, res) => {
  res.render("historical");
});

app.get("/post/:topic", (req, res) => {
  let object = {
    title: "",
    imgSrc: "",
    mid_title: "",
    content: []
  };
  determine(req.params.topic, object);

  res.render("post", object);
});

app.get("/post-long/:topic", (req, res) => {
  let object = {
    title: "",
    imgSrc: "",
    mid_title: [],
    content: []
  };
  determineLong(req.params.topic, object);

  res.render("post-long", object);
});

app.listen(port, () => {
  console.log("Server is up on port 3000");
});
