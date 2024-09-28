const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("visit /hello, /user, or /user/{firstName}/{lastName}");
});

router.get("/hello", (req, res) => {
  res.send("Hello Express JS");
});

router.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

router
  .route("/user/:firstname/:lastname")
  .get((req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
  })
  .post((req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
  });

module.exports = router;
