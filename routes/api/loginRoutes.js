const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Failed to log out");
    }

    res.send("Logged out successfully");
  });
});

module.exports = router;
