const router = require("express").Router();

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("login"),
    {
      title: "Login Page",
    };
});

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("signup", {
    title: "Signup Page",
  });
});

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("home", {
    title: "Home Page",
  });
});

module.exports = router;