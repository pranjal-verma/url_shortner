const router = require("express").Router();

const urlModel = require("../models/shortUrl");

router.post("/shorten_url", async (req, res) => {
  console.log("shortenURl");
  console.log("req body", req.body);
  const { url } = req.body || {};
  const shortUrl = await urlModel.create({ orignal: url });

  // await shortUrl.save();
  res.send("hello world");
});

router.get("/route", (req, res) => {
  console.log(
    "🚀 ~ file: url_routes.js ~ line 16 ~ router.get ~ req",
    req.query
  );
  res.send(req.query);
});

module.exports = router;
